import imagemBannerHome from "@/assets/banner-principal.svg";
import Button from "@/components/common/Button/index";
import { useLocation } from "react-router-dom";

const Banner = ({tamanho, imagensBanner }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const bannerImage = isHome ? imagemBannerHome : imagensBanner;

  return (
    <section className={`h-[${tamanho}] w-full`}>
      <div className="relative inline-block">
        <img
          src={isHome ? imagemBannerHome : imagensBanner}
          alt="Banner"
          className="w-full h-auto block"
        />
        {isHome && (
          <div className="absolute inset-0 flex flex-col justify-center items-start pl-8 gap-4">
            <h2 className="font-nunito text-5xl font-bold text-azul-main w-[500px]">
              Encontre seu novo melhor amigo
            </h2>
            <Button
              tamanho="150"
              altura="40"
              color="#FFA607"
              fontSize="15"
              textColor="#FFFFFF"
              titulo="Adote agora"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Banner;
