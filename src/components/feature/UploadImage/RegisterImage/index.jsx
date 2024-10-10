import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faCamera } from "@fortawesome/free-solid-svg-icons";
import { Controller } from "react-hook-form"; // Import Controller from react-hook-form

const FormRegisterImage = ({ control }) => {
  const [preview, setPreview] = useState(null);

  const handleFileChange = (file, onChange) => {
    if (file && file.size > 5 * 1024 * 1024) {
      alert("Arquivo não pode passar de 5MB");
      return;
    }

    if (file && !file.type.startsWith("image/")) {
      alert("Apenas imagens são permitidas");
      return;
    }

    setPreview(file ? URL.createObjectURL(file) : null);
    if(file) {
      onChange(file);
    }
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="relative">
        <div className="w-72 h-72 bg-cinza rounded-full flex items-center justify-center overflow-hidden">
          {preview ? (
            <img
              src={preview}
              alt="Preview"
              className="object-cover w-full h-full"
            />
          ) : (
            <FontAwesomeIcon icon={faAdd} />
          )}
        </div>
        <label
          htmlFor="file-input"
          className="bg-azul-dark text-branco rounded-full py-2 px-3 w-fit absolute top-2 right-6 cursor-pointer"
        >
          <FontAwesomeIcon icon={faCamera} />
        </label>
        <Controller
          name="fotoPerfil"
          control={control}
          defaultValue={null}
          render={({ field: { onChange } }) => (
            <input
              id="file-input"
              type="file"
              className="hidden"
              onChange={(e) => handleFileChange(e.target.files[0], onChange)}
            />
          )}
        />
      </div>
    </div>
  );
};

export default FormRegisterImage;