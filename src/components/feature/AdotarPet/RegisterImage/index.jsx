import { useState } from "react";
import { Controller } from "react-hook-form";

const FormRegisterImage = ({ control, labels }) => {
  const [previews, setPreviews] = useState(labels.map(() => []));

  const handleFileChange = (files, index, onChange) => {
    const fileArray = Array.from(files);

    // Validação para evitar mais de 5 imagens por campo
    if (previews[index].length + fileArray.length > 5) {
      alert("Você pode adicionar no máximo 5 imagens por campo.");
      return;
    }

    const updatedPreviews = [...previews];
    const validFiles = fileArray.filter((file) => {
      if (file.size > 5 * 1024 * 1024) {
        alert(`O arquivo ${file.name} excede o tamanho máximo de 5MB.`);
        return false;
      }

      if (!file.type.startsWith("image/")) {
        alert(`O arquivo ${file.name} não é uma imagem válida.`);
        return false;
      }

      return true;
    });

    const newPreviews = validFiles.map((file) => ({
      url: URL.createObjectURL(file),
      file,
    }));

    updatedPreviews[index] = [...updatedPreviews[index], ...newPreviews];
    setPreviews(updatedPreviews);

    // Atualiza o estado do formulário
    onChange(updatedPreviews[index].map((preview) => preview.file));
  };

  const handleRemoveImage = (labelIndex, imageIndex, onChange) => {
    const updatedPreviews = [...previews];
    updatedPreviews[labelIndex].splice(imageIndex, 1);
    setPreviews(updatedPreviews);

    // Atualiza o estado do formulário
    onChange(updatedPreviews[labelIndex].map((preview) => preview.file));
  };

  return (
    <div className="flex flex-col gap-6">
      {labels.map((label, labelIndex) => (
        <div
          key={labelIndex}
          className="border-2 border-dashed border-[#4C8EB5] p-4 text-center"
        >
          <p className="text-sm text-gray-500 mb-2">{label}</p>

          <div className="flex flex-wrap gap-4 justify-center mb-4">
            {previews[labelIndex].map((preview, imageIndex) => (
              <div key={imageIndex} className="relative group">
                <img
                  src={preview.url}
                  alt={`Preview ${labelIndex}-${imageIndex}`}
                  className="object-cover w-20 h-20 rounded-md"
                />
                <button
                  type="button"
                  className="absolute top-0 right-0 bg-red-500 text-white text-xs p-1 rounded-full opacity-0 group-hover:opacity-100 transition"
                  onClick={() =>
                    handleRemoveImage(labelIndex, imageIndex, (files) =>
                      control.setValue(`foto_${labelIndex}`, files)
                    )
                  }
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div
            className="cursor-pointer text-blue-500 text-3xl mb-2"
            onClick={() =>
              document.getElementById(`file-input-${labelIndex}`).click()
            }
          >
            &#8593;
          </div>
          <Controller
            name={`foto_${labelIndex}`}
            control={control}
            defaultValue={[]}
            render={({ field: { onChange } }) => (
              <input
                id={`file-input-${labelIndex}`}
                type="file"
                className="hidden"
                multiple
                onChange={(e) => handleFileChange(e.target.files, labelIndex, onChange)}
              />
            )}
          />
          <p className="text-xs text-gray-400">
            Você pode adicionar até 5 imagens.
          </p>
        </div>
      ))}
    </div>
  );
};

export default FormRegisterImage;
