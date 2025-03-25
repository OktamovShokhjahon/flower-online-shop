"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CustomImage from "./image";
import { styles } from "./helpers";
import { t } from "../../../utils/translate";
import "./styles/swiper.css";
import { useMediaQuery } from "usehooks-ts";

const Hero = () => {
  const swiperRef = useRef(null);
  const isMobie = useMediaQuery("(max-width: 767px)");
  return (
    <div className="w-full relative mypgn max-h-[670px] h-screen">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Autoplay, Navigation, Pagination]}
        loop={true}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        className="w-full h-full z-[3]"
      >
        <SwiperSlide className="w-full h-full bg-[#E1E8F6] md:rounded-[20px] rounded-[10px] relative z-[1]">
          <CustomImage
            image="/images/bg.webp"
            title="hero"
            fill
            className1="object-cover md:rounded-[20px] rounded-[10px] polo:flex hidden"
          />
          <div className="w-full polo:w-[666px] min-h-[240px] xl:min-h-[294px] z-[2] absolute top-[40px] polo:top-[188px] polo:left-[6%] xl:left-[11%] flex flex-col justify-center items-center polo:items-start gap-4 polo:gap-6">
            <p className="text-[32px] text-center polo:text-start leading-[42px] polo:text-[50px] polo:leading-[59px] xl:text-[62px] xl:leading-[68px] font-medium text-mainBlack font-montserrat">
              <span className="font-semibold">{t("hero.p4")}</span> <br />{" "}
              {t("hero.p6")}
            </p>
            <p className="text-[15px] polo:text-[16px] leading-[19px] polo:leading-[24px] text-mainBlack font-normal font-montserrat">
              {t("hero.p5")}
            </p>

            {/* mobile images */}
            <div className="w-full h-[358px] relative flex polo:hidden items-center justify-center">
              <CustomImage
                image="/images/h1.webp"
                title="hero"
                fill
                className1="object-contain"
              />
            </div>

            <div className="w-auto hidden polo:flex items-center gap-6 mt-auto">
              <button
                className={`${styles.active} w-[200px] xl:w-[218px] h-[60px] xl:h-[67px] md:rounded-[20px] rounded-[10px] bg-white text-[#7D6064] text-[16px] leading-[22px] xl:text-[18px] xl:leading-[24px] font-normal font-montserrat`}
              >
                {t("hero.p1")}
              </button>
              <button
                className={`${styles.active} w-[300px] xl:w-[345px] h-[60px] xl:h-[67px] md:rounded-[20px] rounded-[10px] bg-[#7D6064] text-[#fff] text-[16px] leading-[22px] xl:text-[18px] xl:leading-[24px] font-normal font-montserrat`}
              >
                {t("hero.p2")}
              </button>
            </div>

            <div className="w-auto polo:hidden flex flex-col items-center gap-[10px] absolute bottom-[-80px] mt-auto">
              <button
                className={`${styles.active} w-[290px] h-[60px] xl:h-[67px] md:rounded-[20px] rounded-[10px] bg-white text-[#7D6064] text-[16px] leading-[22px] xl:text-[18px] xl:leading-[24px] font-normal font-montserrat`}
              >
                {t("hero.p1")}
              </button>
              <button
                className={`${styles.active} w-[290px] h-[60px] xl:h-[67px] md:rounded-[20px] rounded-[10px] bg-[#7D6064] text-[#fff] text-[16px] leading-[22px] xl:text-[18px] xl:leading-[24px] font-normal font-montserrat`}
              >
                {t("hero.p2")}
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full bg-[#85CA40] md:rounded-[20px] rounded-[10px] relative z-[1]">
          <div className="w-[750px] xl:w-[999px] h-[578px] absolute right-0 top-0">
            <CustomImage
              image="/images/book.webp"
              title="hero"
              fill
              className1="xl:object-cover md:rounded-[20px] rounded-[10px] polo:flex hidden"
            />
          </div>
          <div className="w-full polo:w-[666px] min-h-[240px] xl:min-h-[294px] z-[2] absolute top-[40px] polo:top-[188px] polo:left-[6%] xl:left-[11%] flex flex-col justify-center items-center polo:items-start gap-4 polo:gap-6">
            <p className="text-[32px] leading-[42px] polo:text-[50px] text-center polo:text-start polo:leading-[59px] xl:text-[62px] xl:leading-[68px] font-medium text-mainBlack font-montserrat">
              <span className="font-semibold">{t("hero.p4")}</span> <br />{" "}
              {t("hero.p6")}
            </p>
            <p className="text-[15px] polo:text-[16px] left-[19px] polo:leading-[24px] text-mainBlack font-normal font-montserrat">
              {t("hero.p5")}
            </p>
            {/* mobile images */}
            <div className="w-full h-[358px] relative flex polo:hidden items-center justify-center">
              <CustomImage
                image="/images/h2.webp"
                title="hero"
                fill
                className1="object-contain"
              />
            </div>

            <div className="w-auto hidden polo:flex items-center gap-6 mt-auto">
              <button
                className={`${styles.active} w-[200px] xl:w-[218px] h-[60px] xl:h-[67px] md:rounded-[20px] rounded-[10px] bg-white text-[#7D6064] text-[16px] leading-[22px] xl:text-[18px] xl:leading-[24px] font-normal font-montserrat`}
              >
                {t("hero.p7")}
              </button>
              <button
                className={`${styles.active} w-[300px] xl:w-[345px] h-[60px] xl:h-[67px] md:rounded-[20px] rounded-[10px] bg-[#7D6064] text-[#fff] text-[16px] leading-[22px] xl:text-[18px] xl:leading-[24px] font-normal font-montserrat`}
              >
                {t("hero.p2")}
              </button>
            </div>
            <div className="w-auto polo:hidden flex flex-col items-center gap-[10px] absolute bottom-[-80px] mt-auto">
              <button
                className={`${styles.active} w-[290px] h-[60px] xl:h-[67px] md:rounded-[20px] rounded-[10px] bg-white text-[#7D6064] text-[16px] leading-[22px] xl:text-[18px] xl:leading-[24px] font-normal font-montserrat`}
              >
                {t("hero.p1")}
              </button>
              <button
                className={`${styles.active} w-[290px] h-[60px] xl:h-[67px] md:rounded-[20px] rounded-[10px] bg-[#7D6064] text-[#fff] text-[16px] leading-[22px] xl:text-[18px] xl:leading-[24px] font-normal font-montserrat`}
              >
                {t("hero.p2")}
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="custom-pagination" /> {/* Custom pagination container */}
      <button
        className={`${styles.active} tablet:flex hidden absolute top-1/2 left-6 xl:left-16 transform -translate-y-1/2 bg-mainWhite z-[69] p-2 rounded-full text-mainBlack`}
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className={`${styles.active} tablet:flex hidden absolute top-1/2 right-6 xl:right-16 transform -translate-y-1/2 bg-mainWhite z-[69] p-2 rounded-full text-mainBlack`}
        onClick={() => swiperRef.current?.slideNext()}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default Hero;
