import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel = ({ Images, Captions}) => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y ]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
        >
            {Images.map((el, i) => {
                return (<SwiperSlide><img src={el}></img><p className='text-lg p-2 text-slate-400 text-center pb-8'>{Captions[i]}</p></SwiperSlide>
                )
            })}
        </Swiper>
    );
};

export default Carousel;