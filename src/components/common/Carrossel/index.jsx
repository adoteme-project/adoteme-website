import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';


const Carousel = ({ items, renderItem, slidesPerView = 3, spaceBetween = 10 }) => {
    return (
        <Swiper
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            navigation
            pagination={{ clickable: true }}
        >
            {items.map((item, index) => (
                <SwiperSlide key={index}>
                    {renderItem(item)}
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;
