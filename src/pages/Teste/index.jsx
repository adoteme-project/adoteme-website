import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faCamera } from "@fortawesome/free-solid-svg-icons";

const EnviarImagem = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [image, setImage] = useState("");

  const uwConfig = {
    cloudName: import.meta.env.VITE_CLOUD_NAME,
    uploadPreset: import.meta.env.VITE_UPLOAD_PRESET,
  };

  const uploadImage = () => {
    if (!selectedFile) {
      console.error("No file selected.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("upload_preset", uwConfig.uploadPreset);

    axios
      .post(
        `https://api.cloudinary.com/v1_1/${uwConfig.cloudName}/image/upload`,
        formData
      )
      .then((response) => {
        setImage(response.data.secure_url);
        setPreview(null);
      })
      .catch((error) => {
        console.error("Error uploading the image:", error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    uploadImage();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-10">
      <div className="relative">
        <div className="w-72 h-72 bg-cinza rounded-full flex items-center justify-center overflow-hidden">
          {preview ? (
            <img
              src={preview}
              alt="Preview"
              className="object-cover w-full h-full"
            />
          ) : (
            <FontAwesomeIcon icon={faAdd}/>
          )}
        </div>
        <label
          htmlFor="file-input"
          className="bg-azul-dark text-branco rounded-full py-2 px-3 w-fit absolute top-2 right-6 cursor-pointer"
        >
          <FontAwesomeIcon icon={faCamera} />
        </label>
        <input
          id="file-input"
          type="file"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
      <button type="submit" className="bg-azul-main px-4 py-2 w-fit">
        Enviar
      </button>
    </form>
  );
};

const Teste = () => {
  return (
    <>
      <EnviarImagem />
    </>
  );
};

export default Teste;
