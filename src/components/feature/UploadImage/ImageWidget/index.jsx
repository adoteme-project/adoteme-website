import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { Controller } from "react-hook-form";
import { MoonLoader } from "react-spinners";

const ImageWidget = ({ control, onChange, image, colSpan, contextPath }) => {
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (image) {
      setLoading(true);
      const objectURL = URL.createObjectURL(image);
      setPreview(objectURL);
      return () => URL.revokeObjectURL(objectURL);
    }
  }, [image]);

  useEffect(() => {
    if (preview) {
      const img = new Image();
      img.src = preview;
      img.onload = () => setLoading(false);
    }
  }, [preview])

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
      {loading ? (
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 rounded-md text-white">
          <MoonLoader speedMultiplier={1}/>
        </div>
      ) : preview ? (
        <img src={preview} alt="Preview" className="object-cover h-full w-full rounded-md" />
      ) : (
        <FontAwesomeIcon icon={faCamera} size="2x" />
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