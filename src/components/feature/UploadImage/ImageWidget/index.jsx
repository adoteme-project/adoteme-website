import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { Controller } from "react-hook-form";

const ImageWidget = ({ control, onChange, image, colSpan, contextPath }) => {
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (image) {
      setPreview(URL.createObjectURL(image));
    }
  }, [image]);

  const handleFileChange = (file, fieldOnChange) => {
    if (file && file.size > 5 * 1024 * 1024) {
      alert("Arquivo não pode passar de 5MB");
      return;
    }

    if (file && !file.type.startsWith("image/")) {
      alert("Apenas imagens são permitidas");
      return;
    }

    setPreview(file ? URL.createObjectURL(file) : null);
    if (file) {
      fieldOnChange(file);
      onChange(file);
    }
  };

  return (
    <div className={`flex justify-center items-center shadow-xl bg-cinza 
    rounded-md relative ${contextPath === 'abrigo' ? colSpan : 'w-1/2'}`}>
      {preview ? (
        <img src={preview} alt="Preview" className="object-fill h-full w-full rounded-md" />
      ) : (
        <FontAwesomeIcon icon={faCamera} size="2x"/>
      )}
      <Controller
        name="imagem"
        control={control}
        defaultValue={null}
        render={({ field: { onChange: fieldOnChange } }) => (
          <input
            type="file"
            className="absolute inset-0 opacity-0 cursor-pointer"
            onChange={(e) => handleFileChange(e.target.files[0], fieldOnChange)}
          />
        )}
      />
    </div>
  );
};

export default ImageWidget;