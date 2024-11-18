import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';

register();

function Carrosel({ data = [], slidePerview, color, BoxComponent }) {
  return (
    <div>
      <Swiper
        slidesPerView={slidePerview}
        navigation
        pagination={{ clickable: true }}
        className="py-5"
      >
        {data.map((item, index) => (
          <SwiperSlide key={item.id} className="flex justify-center items-center py-5 px-px">
            <BoxComponent
              id={item.id}
              color={color[index % color.length]}
              nome={item.nome}
              imagem={item.imagem}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carrosel;
