const Banner = ({ tamanho, imagensBanner }) => {
  return (
    <section className={`h-[${tamanho}] w-full inline-block`}>
      <div className="relative  w-full">
        <img
          src={imagensBanner}
          alt="Banner"
          className="w-full h-auto block"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Banner;
