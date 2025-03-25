'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { styles } from '../../_components/helpers';
import CustomImage from '../../_components/image';
import { useMediaQuery } from 'usehooks-ts';

const images = [
    '/images/foto.png',
    '/images/foto.png',
    '/images/foto.png',
    '/images/foto.png',
    '/images/foto.png',
];

export default function ImageGallery() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const swiperRef = useRef(null)
    const isTablet = useMediaQuery('(min-width: 1280px)');

    return (
        <div className="w-full mx-auto relative mypgn2">
            {/* Main Image Swiper */}
            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[Navigation, Thumbs, Pagination]}
                pagination={{ clickable: isTablet && true }}
                className="mb-4 rounded-xl overflow-hidden h-[330px] md:h-[500px] polo:h-[670px]"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div className='w-full h-full relative'>
                            <CustomImage image={src} title={`Image ${index + 1}`} fill className1="w-full h-full rounded-[20px] object-cover" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <button
                className={`${styles.active} absolute top-[334.5px] polo:flex hidden left-6 transform -translate-y-1/2 bg-white z-[69] p-2 rounded-full text-mainBlack`}
                onClick={() => swiperRef.current?.slidePrev()}
            >
                <ChevronLeft size={24} />
            </button>
            <button
                className={`${styles.active} absolute top-[334.5px] polo:flex hidden right-6 transform -translate-y-1/2 bg-white z-[69] p-2 rounded-full text-mainBlack`}
                onClick={() => swiperRef.current?.slideNext()}
            >
                <ChevronRight size={24} />
            </button>

            {/* Thumbnail Swiper */}
            <div className='w-full polo:flex hidden'>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={5}
                    watchSlidesProgress
                    modules={[Thumbs]}
                    className="cursor-pointer"
                >
                    {images.map((src, index) => (
                        <SwiperSlide key={index}>
                            <div className='w-[118px] h-[118px] relative'>
                                <CustomImage image={src} title={`Thumbnail ${index + 1}`} fill className1="w-full object-cover rounded-[20px] h-full" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </div>
    );
}
