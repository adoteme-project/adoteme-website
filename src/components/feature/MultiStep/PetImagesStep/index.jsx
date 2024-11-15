import { Link, useNavigate } from "react-router-dom";
import ImageWidget from "../../UploadImage/ImageWidget";
import { useForm, FormProvider } from "react-hook-form";
import { useEffect, useState } from "react";
import { useFormState } from "@/context/FormStateProvider";
import { useContextPath } from "@/context/PathContextProvider";

const PetsImagesStep = () => {
  const navigate = useNavigate();
  const methods = useForm();
  const { handleSubmit, setValue, reset } = methods;
  const { formState, setFormState } = useFormState();
  const [images, setImages] = useState(formState.images || []);
  const contextPath = useContextPath();

  const handleImageChange = (file, index) => {
    if (file) {
      const newImages = [...images];
      newImages[index] = file;
      setImages(newImages);
      setValue(`imagem${index}`, file);
    }
  };

  const { isSubmitting } = methods.formState;

  useEffect(() => {
    reset({
      ...images.reduce((acc, img, index) => {
        acc[`imagem${index}`] = img;
        return acc;
      }, {})
    });
  }, [images, reset]);

  const saveImages = () => {
    setFormState({
      ...formState,
      images,
    })

    console.log("Dados enviados:", formState);
    navigate(`/ong/cadastrar-pet/${contextPath}/${contextPath}-informacoes`);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(saveImages)} className="flex flex-col gap-10">
        <h1 className="text-center text-azul-main font-nunito text-2xl mb-4 font-semibold">
          {contextPath === 'abrigo' ? 'Imagens do Pet' : 'Imagem do Pet'}
        </h1>
        <div className={`w-full ${contextPath === 'abrigo' ? 'grid grid-rows-2 grid-cols-4' : 
          'flex justify-center'} gap-6 h-96`}>
          {[...Array(contextPath === 'abrigo' ? 5 : 1)].map((_, index) => (
            <ImageWidget
              key={index}
              control={methods.control}
              onChange={(file) => handleImageChange(file, index)}
              image={images[index] || null}
              colSpan={index === 0 ? 'row-span-2 col-span-2' : 'col-span-1'}
              contextPath={contextPath}
            />
          ))}
        </div>
        {contextPath === 'abrigo' ?
          (
            <nav className="w-full flex justify-center">
              <button
                className="bg-verde px-4 py-3 rounded-md text-branco"
                type="submit"
                disabled={isSubmitting}
              >
                Continuar
              </button>
            </nav>
          ) : (
            <div className="w-full flex justify-center">
              <nav className="w-[25%] flex justify-center gap-8">
                <Link to={`/ong/cadastrar-pet/resgatado/resgatado-local`}
                  className="bg-amarelo-select px-4 py-3 text-center rounded-md text-branco w-full">
                  Voltar
                </Link>
                <button type="submit" className="bg-verde px-4 py-3 rounded-md text-center text-branco w-full">
                  Continuar
                </button>
              </nav>
            </div>
          )}
      </form>
    </FormProvider>
  );
};

export default PetsImagesStep;