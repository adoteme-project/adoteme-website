import { useState } from "react";
import CloudImage from "../../components/common/CloudImage";
import UploadWidget from "../../components/feature/UploadImage";
import axios from "axios";

const EnviarImagem = () => {
  const [image, setImage] = useState("");

  const uwConfig = {
    cloudName: import.meta.env.VITE_CLOUD_NAME,
    uploadPreset: import.meta.env.VITE_UPLOAD_PRESET,
  };

  const uploadImage = (files) => {
    const formData = new FormData();

    formData.append("file", files[0]);
    formData.append("upload_preset", uwConfig.uploadPreset);
    axios
      .post(
        `https://api.cloudinary.com/v1_1/${uwConfig.cloudName}/image/upload`,
        formData
      )
      .then((response) => {
        setImage(response.data.secure_url);
      })
      .catch((error) => {
        console.error("Error uploading the image:", error);
      });
  };

  return (
    <div>
      {/* <UploadWidget uwConfig={uwConfig} setPublicId={setPublicId}/> */}
      <input type="file" onChange={(e) => uploadImage(e.target.files)} />
      <img src={image} alt="Imagem enviada" />
    </div>
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

/* import { useEffect, useState } from "react";
import ListAchados from "../../components/ListAchados";
import useModal from "../../hooks/useModal";
import { getPetPerdido } from "../../services/pets";

const Teste = () => {
  const [pets, setPets] = useState([]);
  const [isShowingModal, toogleModal] = useModal();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPetPerdido();
        console.log(response.data);
        setPets(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <button onClick={toogleModal} className="bg-azul-main p-2">
        Mostrar modal
      </button>
      <ListAchados pets={pets} show={isShowingModal} onClose={toogleModal} />
    </>
  );
};

export default Teste; */
