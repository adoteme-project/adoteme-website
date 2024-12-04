import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';


const Carousel = ({ items, renderItem, slidesPerView = 3, spaceBetween = 20 }) => {
    return (
        <Swiper
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            navigation
            pagination={{ clickable: true }}
            className='py-5 w-[100%]'
        >
            {items.map((item, index) => (
                <SwiperSlide key={index} className='flex justify-between items-center py-6 px-14'>
                    {renderItem(item)}
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;
