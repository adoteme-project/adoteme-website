import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import Box from '../Categorias/Box/box';

register();

function Carrosel({ data = [], slidePerview, color }) {
  // console.log('Data:', data);
  // console.log('Cores:', color);
  return (
    <div>
      <Swiper
        slidesPerView={slidePerview}
        navigation
        pagination={{clickable:true}}
        className='py-5'
      >
        {data.map((item, index) => (
          <SwiperSlide key={item.id} className="flex justify-center items-center py-5 px-px">
            <Box
              id={item.id}
              color={color[index % color.length]}
              nome={item.nome}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carrosel;
