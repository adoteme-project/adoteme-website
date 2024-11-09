import { useNavigate } from "react-router-dom";
import ImageWidget from "../../UploadImage/ImageWidget";
import { useForm, FormProvider } from "react-hook-form";
import { useState } from "react";

const PetsImagesStep = () => {
  const navigate = useNavigate();
  const methods = useForm();
  const { handleSubmit, setValue } = methods;
  const [images, setImages] = useState([]);

  const handleImageChange = (file, index) => {
    if (file) {
      const newImages = [...images];
      newImages[index] = file;
      setImages(newImages);
      setValue(`imagem${index}`, file);
    }
  };

  const saveImages = () => {
    console.log(images);
    navigate("/ong/cadastrar-pet/abrigo/abrigo-informacoes");
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(saveImages)}>
        <h1 className="text-center text-azul-main font-nunito text-2xl mb-4 font-semibold">
          Imagens do Pet
        </h1>
        <div className="w-full grid grid-rows-2 grid-cols-4 gap-4 gap-x-10 h-96">
          {[...Array(5)].map((_, index) => (
            <ImageWidget
              key={index}
              control={methods.control}
              onChange={(file) => handleImageChange(file, index)}
              image={images[index]}
              colSpan={index == 0 ? 'row-span-2 col-span-2' : 'col-span-1'}
            />
          ))}
        </div>
        <nav className="w-full flex justify-center mt-4">
          <button className="bg-verde px-4 py-3 rounded-md text-branco" type="submit">
            Continuar
          </button>
        </nav>
      </form>
    </FormProvider>
  );
};

export default PetsImagesStep;