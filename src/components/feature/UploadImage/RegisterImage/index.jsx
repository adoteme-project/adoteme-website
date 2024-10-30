import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faCamera, faPen } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons"; 
import { Controller } from "react-hook-form";
import { useLocation } from "react-router-dom";

const FormRegisterImage = ({ control }) => {
  const location = useLocation();
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
    if (file) {
      console.log(file);
      onChange(file);
    }
  };

  const isProfilePage = location.pathname === "/perfil/usuario";

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="relative">
        <div
          className={`${
            isProfilePage ? "w-40 h-40" : "w-72 h-72"
          } rounded-full flex items-center justify-center overflow-hidden border-2 ${
            isProfilePage ? "border-transparent" : "border-cinza"
          }`}
        >
          {preview ? (
            <img
              src={preview}
              alt="Preview"
              className="object-cover w-full h-full"
            />
          ) : (
            <FontAwesomeIcon icon={faAdd} size="4x" className="text-cinza" />
          )}
        </div>
        <label
          htmlFor="file-input"
          className={`bg-azul-dark text-branco rounded-full py-2 px-3 w-fit absolute cursor-pointer ${
            isProfilePage
              ? "bottom-2 right-0 transform -translate-x-1/2"
              : "top-1 right-8" //
          }`}
        >
          <FontAwesomeIcon icon={isProfilePage ? faPen : faCamera} />
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
