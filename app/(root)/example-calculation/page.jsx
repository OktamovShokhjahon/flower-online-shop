"use client";

import Image from "next/image";
import BreadCrumps from "../_components/breadcrumps";
import img1 from "../../../public/images/example-calculation-1.png";
import { Swiper, SwiperSlide } from "swiper/react";
// import swiperRef from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import CustomImage from "../_components/image";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";
import { useRef } from "react";
import { styles } from "../_components/helpers";

const breadCrumps = [
  {
    name: "Главная",
    href: "/",
  },
  {
    name: "Пример расчета",
    href: "/example-calculation",
  },
];

function ExampleCalculation() {
  const swiperRef = useRef(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="main-container">
      <BreadCrumps links={breadCrumps} />

      <div className="mt-[50px] flex justify-between flex-col desktop:flex-row">
        <div className="w-full desktop:w-[48%] flex flex-col gap-[20px]">
          <p className="light-description">
            Вы хотите закупить партию розы разных сортов длиной 70 см и объемом
            5 фуллбоксов. В одном фуллбоксе - 500 роз длиной 70 см, значит ваш
            заказ составит 5*500=2500 роз.
          </p>
          <p className="light-description">
            1 фуллбокс Пинк флойд супер-премиум - 325$ (0.65$ за шт.), 1
            фуллбокс Фридом премиум - 185$ (0.37$ за шт.), 2 фуллбокса Микс из
            нескольких сортов - 400$ (0.40$ за шт.), 1 фуллбокс Свитнесс премиум
            - 185$ (0.37$ за шт.). Сумма: 325$ + 185$ + 400$ + 185$ = 1095$
            (1095$ / 2500 шт. = 0.438$ за шт. по-среднему)
          </p>
          <p className="light-description">
            <span>Теперь считаем доставку в Москву. </span>
            Кито-Амстердам - 105$ за фуллбокс. Амстердам-Москва - 91$ за
            фуллбокс. Прекулинг - 12$ за фуллбокс. За 5 фуллбоксов получаем:
            525$ + 455$ + 60$ = 1040$
          </p>
          <p className="light-description">
            <span>ИТОГО: 1095$ + 1040$ = 2135$.</span>
          </p>
        </div>
        <div className="mt-[20px] w-full desktop:w-[50%]">
          <Image src={img1} alt="image" layout="responsive" />
          <p className="light-description mt-[30px]">
            * Растаможивание включено в стоимость. Оплата за первый этап
            осуществляется в Эквадоре, за второй - транспортной компании в
            Москве.
          </p>
        </div>
      </div>

      <div className="mt-[100px]">
        <div className="flex justify-between items-center mb-[50px]">
          <h1 className="bold-title">Акции</h1>
          <p className="light-description">Смотреть всё</p>
        </div>

        <div className="mb-[100px]">
          <div className="xl:w-[1360px] mx-auto w-full relative">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Autoplay, Navigation]}
              loop={true}
              slidesPerView={isMobile ? 2 : 4}
              spaceBetween={20}
              className="w-full h-full z-[3]"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((c) => {
                return (
                  <SwiperSlide className="relative w-full" key={c}>
                    <div className="w-full flex flex-col gap-4 relative">
                      <div className="absolute top-2 right-2 md:top-5 md:right-5 z-[2]">
                        <div
                          className={`w-[22px] h-[22px] md:w-[34px] md:h-[34px] rounded-full bg-[#DBE0D233]/20 flex items-center justify-center ${styles.active}`}
                        >
                          <Heart className="text-white w-[14px] md:w-[20px]" />
                        </div>
                      </div>
                      <div className="w-full h-[157px] md:h-[325px] relative md:rounded-[20px] rounded-[10px]">
                        <CustomImage
                          image="/images/vit.webp"
                          title="vitrina"
                          fill
                          className1="object-cover md:rounded-[20px] rounded-[10px]"
                        />
                      </div>
                      <p className="text-[13px] leading-[16px] polo:text-[18px] polo:leading-[24px] text-mainBlack uppercase font-montserrat font-semibold">
                        Кремовый букет пионовидных роз
                      </p>
                      <div className="w-full flex gap-[12px] md:items-center md:flex-row flex-col md:justify-between">
                        <p className="text-[18px] leading-[24px] text-mainBlack font-montserrat font-semibold">
                          4 290 ₽
                          <span className="ml-[5px] bg-red-700 text-white text-[12px] line-through">
                            4890 ₽
                          </span>
                        </p>
                        <button
                          className={`w-full xs:w-[155px] h-[50px] md:h-[54px] md:rounded-[20px] rounded-[10px] text-white bg-[#7D6064] md:bg-[#F5E7E7] font-montserrat md:text-mainBlack ${styles.active} text-[14px] leading-[18px] md:text-[18px] md:leading-[24px] font-normal hover:bg-mainBlack hover:text-mainWhite transition-all ease-in-out duration-500`}
                        >
                          Купить
                        </button>
                      </div>
                    </div>
                    <div className="absolute left-0 top-0 bg-white py-[12px] px-[22px] rounded-t-[12px] rounded-b-[12px] rounded-[22px]">
                      -15%
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <button
              className={`${styles.active} absolute top-[162.5px] md:flex hidden left-6 md:left-[-70px] transform -translate-y-1/2 bg-white z-[69] p-2 rounded-full text-mainBlack`}
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className={`${styles.active} absolute top-[162.5px] md:flex hidden right-6 md:right-[-70px] transform -translate-y-1/2 bg-white z-[69] p-2 rounded-full text-mainBlack`}
              onClick={() => swiperRef.current?.slideNext()}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExampleCalculation;
