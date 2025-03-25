"use client";
import { t } from "../../../utils/translate";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { styles } from "./helpers";
import CustomImage from "./image";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";

const Stock = () => {
  const swiperRef = useRef(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className="st:w-[1508px] mx-auto w-[94%] flex flex-col gap-[30px] polo:gap-[50px]">
      <div className="xl:w-[1360px] mx-auto w-full flex justify-between items-center">
        <p className="text-[28px] leading-[32px] polo:text-[48px] polo:leading-[52px] font-semibold text-mainBlack font-montserrat">
          {t("stock.p1")}
        </p>
        <button
          className={`text-mainBlack font-montserrat text-[15px] polo:flex hidden font-normal leading-[18px] ${styles.active}`}
        >
          {t("vitrina.btn")}
        </button>
        <div className="w-[38px] h-[38px] relative polo:hidden">
          <CustomImage
            image={"/images/ar.svg"}
            fill
            title="ar"
            className1="w-full h-full object-contain"
          />
        </div>
      </div>

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
              <SwiperSlide className="w-full" key={c}>
                <div className="w-full flex flex-col gap-4 relative">
                  {/* isStock */}
                  <div className="w-[50px] h-[27px] md:w-[78px] md:h-[40px] md:rounded-[20px] rounded-[10px] bg-white absolute inset-0 z-[2] flex items-center justify-center">
                    <p className="text-[13px] leading-[15px] md:text-[16px] md:leading-[18px] text-mainBlack font-montserrat font-normal">
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
                    <div className="flex gap-1 items-center">
                      <p className="text-[18px] leading-[24px] text-mainBlack font-montserrat  font-semibold">
                        4 290 ₽
                      </p>
                      <p className="text-[12px] leading-[16px] text-white px-1 bg-[#EE2A23] line-through font-montserrat  font-semibold">
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
  );
};

export default Stock;
