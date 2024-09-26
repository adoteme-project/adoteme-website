import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faCamera } from "@fortawesome/free-solid-svg-icons";
import { postProfilePicture } from "@/services/adotanteAPI";

const FormRegisterImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [setImage] = useState("");
  const [setUploadError] = useState(null);

  const uploadImage = () => {
    if (!selectedFile) {
      console.error("No file selected.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    postProfilePicture(formData)
      .then((response) => {
        console.log(response);
        setImage(response.data.secure_url);
        setPreview(null);
        setSelectedFile(null);
        setUploadError(null);
      })
      .catch((error) => {
        console.error("Error uploading the image:", error);
        setUploadError("Error uploading the image. Please try again.");
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
            <FontAwesomeIcon icon={faAdd} />
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

export default FormRegisterImage;
