"use client";

import BreadCrumps from "../_components/breadcrumps";
import SimpleFlowerCard from "../_components/simple-flower-card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import Plantation2 from "../../../public/images/vit.webp";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useRef } from "react";
import { useMediaQuery } from "usehooks-ts";
import { styles } from "../_components/helpers";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import CustomImage from "../_components/image";

const flowers = [
  {
    image: Plantation2,
    name: "Freedom (Фридом)",
  },
  {
    image: Plantation2,
    name: "Freedom (Фридом)",
  },
  {
    image: Plantation2,
    name: "Freedom (Фридом)",
  },
  {
    image: Plantation2,
    name: "Freedom (Фридом)",
  },
  {
    image: Plantation2,
    name: "Freedom (Фридом)",
  },
  {
    image: Plantation2,
    name: "Freedom (Фридом)",
  },
  {
    image: Plantation2,
    name: "Freedom (Фридом)",
  },
  {
    image: Plantation2,
    name: "Freedom (Фридом)",
  },
];

function HolidaySchedule() {
  const links = [
    {
      name: "Главная",
      href: "/",
    },
    {
      name: "График праздников",
      href: "/holiday-schedule",
    },
  ];

  const paragraphs = [
    {
      title: "Сентябрь:",
      paragraphs: [
        "1 сентября - День знаний",
        "27 сентября - День воспитателя и дошкольного работника",
        "30 сентября - Вера, Надежда, Любовь",
      ],
    },
    {
      title: "Июль:",
      paragraphs: [
        "7 июля - Ивана Купала",
        "8 июля - Всеросийский день семьи любви и верности",
      ],
    },
    {
      title: "Май",
      paragraphs: [
        "5 мая - ПАСХА",
        "9 мая - День Победы",
        "12 мая - Красная горка",
        "15 мая - Международный день семьи",
      ],
    },
    {
      title: "Октябрь",
      paragraphs: [
        "1 октября - Международный день пожилых людей",
        "5 октября - День учителя",
        "30 октября - День тренера",
      ],
    },
    {
      title: "Июнь",
      paragraphs: [
        "1 июня - Международный день защиты детей",
        "23 июня - ТРОИЦА",
        "12 июня - День России",
        "14 июня - Международный день блогера",
        "18 июня - День медицинского работника",
        "22 июня - День памяти и скорби",
      ],
    },
    {
      title: "Февраль",
      paragraphs: [
        "14 февраля - День Св. Валентина",
        "15 февраля - Сретение Господне",
        "23 февраля - День Защитника Отечества",
      ],
    },
  ];

  const swiperRef = useRef(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="main-container">
      <BreadCrumps links={links} />

      <h1 className="bold-title my-[50px]">Календарь праздников 2024</h1>

      <div className="flex justify-between items-center">
        <div className="w-[50%] flex flex-col gap-[50px]">
          {paragraphs &&
            paragraphs.slice(0, 3).map((par, idx) => {
              return (
                <div className="flex flex-col gap-[10px]" key={idx}>
                  <h2 className="little-title">{par.title}</h2>
                  {par.paragraphs.map((pa, idx2) => (
                    <p className="light-description" key={idx2}>
                      {pa}
                    </p>
                  ))}
                </div>
              );
            })}
        </div>

        <div className="w-[50%] flex flex-col gap-[50px]">
          {paragraphs &&
            paragraphs.slice(3).map((par, idx) => {
              return (
                <div className="flex flex-col gap-[10px]" key={idx}>
                  <h2 className="little-title">{par.title}</h2>
                  {par.paragraphs.map((pa, idx2) => (
                    <p className="light-description" key={idx2}>
                      {pa}
                    </p>
                  ))}
                </div>
              );
            })}
        </div>
      </div>

      <div className="mt-[100px]">
        <h1 className="bold-title">Сорта роз</h1>

        <div className="desktop:flex mt-[50px] hidden justify-between items-center flex-wrap gap-y-[40px]">
          {flowers &&
            flowers.map((flower, idx) => {
              return <SimpleFlowerCard key={idx} {...flower} />;
            })}
        </div>

        <div className="block desktop:hidden">
          <Swiper
            scrollbar={{
              hide: true,
            }}
            modules={[Scrollbar]}
            slidesPerView={2}
            spaceBetween={20}
            className="mySwiper"
          >
            {flowers &&
              flowers.map((flower, idx) => {
                return (
                  <SwiperSlide key={idx}>
                    <SimpleFlowerCard {...flower} />
                  </SwiperSlide>
                );
              })}
          </Swiper>
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
                        </p>
                        <button
                          className={`w-full xs:w-[155px] h-[50px] md:h-[54px] md:rounded-[20px] rounded-[10px] text-white bg-[#7D6064] md:bg-[#F5E7E7] font-montserrat md:text-mainBlack ${styles.active} text-[14px] leading-[18px] md:text-[18px] md:leading-[24px] font-normal hover:bg-mainBlack hover:text-mainWhite transition-all ease-in-out duration-500`}
                        >
                          Купить
                        </button>
                      </div>
                    </div>
                    <div className="absolute left-0 top-0 bg-white py-[12px] px-[22px] rounded-t-[12px] rounded-b-[12px] rounded-[22px]">
                      Top
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

export default HolidaySchedule;
