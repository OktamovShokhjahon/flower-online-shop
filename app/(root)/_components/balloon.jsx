"use client";
import React, { useRef } from "react";
import CustomImage from "./image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { styles } from "./helpers";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { t } from "../../../utils/translate";

const Balloon = () => {
  const swiperRef = useRef(null);
  return (
    <div className="xl:w-[1360px] mx-auto w-[94%] relative">
      <div className="w-full grid grid-cols-1 desktop:grid-cols-2 gap-5">
        <div className="w-full h-[540px] rounded-[10px] lg:rounded-[20px] bg-[#E1E8F6] relative">
          <CustomImage
            image={"/images/ball.webp"}
            title={"balloon"}
            fill
            className1="w-full desktop:flex rounded-[10px] lg:rounded-[20px]  hidden h-full object-contain"
          />
          <CustomImage
            image={"/images/b22.webp"}
            title={"balloon"}
            fill
            className1="w-full desktop:hidden rounded-[10px] lg:rounded-[20px]  h-full object-contain"
          />

          <p className="absolute top-[32px] desktop:top-[36%] left-[20px] lg:left-[50px] max-w-[218px] lg:max-w-[324px] text-[32px] leading-[38px] lg:text-[48px] lg:leading-[56px] font-semibold text-mainBlack font-montserrat">
            {t("ball.p1")}
          </p>

          <div className="flex items-center absolute bottom-[30px] lg:bottom-[50px] left-[20px] text-mainBlack lg:left-[50px] gap-3">
            <p className="text-[18px] leading-[24px]  uppercase font-semibold font-montserrat">
              {t("ball.p2")}
            </p>
            <svg
              width={24}
              height={12}
              viewBox="0 0 24 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.5303 6.53033C23.8232 6.23744 23.8232 5.76257 23.5303 5.46967L18.7574 0.696701C18.4645 0.403807 17.9896 0.403807 17.6967 0.696701C17.4038 0.989594 17.4038 1.46447 17.6967 1.75736L21.9393 6L17.6967 10.2426C17.4038 10.5355 17.4038 11.0104 17.6967 11.3033C17.9896 11.5962 18.4645 11.5962 18.7574 11.3033L23.5303 6.53033ZM-6.55671e-08 6.75L23 6.75L23 5.25L6.55671e-08 5.25L-6.55671e-08 6.75Z"
                fill="#453C3C"
              />
            </svg>
          </div>
        </div>
        <div className="w-full relative min-h-[540px]">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Autoplay, Navigation]}
            loop={true}
            slidesPerView={2}
            spaceBetween={20}
            className="w-full h-full z-[3]"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((c) => {
              return (
                <SwiperSlide className="w-full" key={c}>
                  <div className="w-full flex flex-col gap-4 relative">
                    {/* isStock */}
                    <div className="w-[50px] h-[27px] md:w-[75px] md:h-[40px] rounded-br-[10px] rounded-tl-[10px] md:rounded-br-[20px] md:rounded-tl-[20px] bg-[#fff] absolute inset-0 z-[2] flex items-center justify-center">
                      <p className="text-[13px] md:text-[16px] md:leading-[18px] text-mainBlack font-montserrat font-normal md:font-semibold">
                        -15%
                      </p>
                    </div>
                    {/* like */}
                    <div className="absolute top-2 right-2 md:top-5 md:right-5 z-[2]">
                      <div
                        className={`w-[22px] h-[22px] md:w-[34px] md:h-[34px] rounded-full bg-[#DBE0D233]/20 flex items-center justify-center ${styles.active}`}
                      >
                        <Heart className="text-white w-[14px] md:w-[20px]" />
                      </div>
                    </div>
                    <div className="w-full h-[157px] md:h-[325px] relative md:rounded-[20px] rounded-[10px]">
                      <CustomImage
                        image="/images/b2.webp"
                        title="vitrina"
                        fill
                        className1="object-cover md:rounded-[20px] rounded-[10px]"
                      />
                    </div>
                    <p className="text-[13px] leading-[16px] polo:text-[18px] polo:leading-[24px] text-mainBlack uppercase font-montserrat font-semibold">
                      Кремовый букет пионовидных роз
                    </p>
                    <div className="w-full flex lg:items-center justify-between lg:flex-row flex-col gap-4">
                      <div className="flex gap-3 lg:gap-1 xl:items-center xl:flex-row flex-row lg:flex-col">
                        <p className="text-[18px] leading-[24px] text-mainBlack font-montserrat  font-semibold">
                          4 290 ₽
                        </p>
                        <p className="text-[12px] leading-[16px] text-white px-1 bg-[#EE2A23] flex items-center justify-center line-through font-montserrat  font-semibold">
                          4 890 ₽
                        </p>
                      </div>
                      <button
                        className={`w-full xs:w-[155px] h-[50px] md:h-[54px] md:rounded-[20px] rounded-[10px] text-white bg-[#7D6064] md:bg-[#F5E7E7] font-montserrat md:text-mainBlack ${styles.active} text-[14px] leading-[18px] md:text-[18px] md:leading-[24px] font-normal hover:bg-mainBlack hover:text-mainWhite transition-all ease-in-out duration-500`}
                      >
                        Купить
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <button
            className={`${styles.active} absolute bottom-0 left-6 md:flex hidden md:left-[20px] transform -translate-y-1/2 bg-white z-[69] p-2 rounded-full text-mainBlack`}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className={`${styles.active} absolute bottom-0 left-6 md:flex hidden md:left-[80px] transform -translate-y-1/2 bg-white z-[69] p-2 rounded-full text-mainBlack`}
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Balloon;
