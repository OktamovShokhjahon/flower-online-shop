"use client";
import { t } from "../../../utils/translate";
import Link from "next/link";
import React, { useState } from "react";
import { styles, toggleFunction } from "../_components/helpers";
import RangeSlider from "./range";
import { Heart } from "lucide-react";
import CustomImage from "../_components/image";
import MyPagination from "./pagination";

const CatalogHome = () => {
  const [catalog, setCatalog] = useState(ICATALOG);
  const toggleFunc = (id) => toggleFunction(setCatalog, id);
  return (
    <div className="xl:w-[1360px] mx-auto w-[94%] space-y-[30px] pb-[100px] pt-[20px] sm:pt-[30px]">
      {/* Links */}
      <div className="flex items-center gap-[10px]">
        <Link
          href={"/"}
          className="text-[16px] leading-[20px] font-medium font-montserrat text-[#453C3C80]/50"
        >
          {t("catalog.p1")}
        </Link>
        <p className="w-[2px] h-full bg-mainBlack min-h-[15px]"></p>
        <Link
          href={"/"}
          className="text-[16px] leading-[20px] font-medium font-montserrat text-mainBlack"
        >
          {t("catalog.p2")}
        </Link>
      </div>
      <p className="text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] xl:text-[48px] xl:leading-[58px] text-mainBlack font-montserrat font-semibold">
        Каталог цветов
      </p>

      <div className="overflow-x-auto w-full">
        <div className="w-full flex items-center gap-[15px]">
          {catalog?.map((c, idx) => (
            <div
              key={idx}
              onClick={() => toggleFunc(c.id)}
              className={`h-[52px] cursor-pointer ${
                styles.active
              } gap-[7px] flex items-center justify-center px-4 rounded-[12px] ${
                c.isActive ? "bg-[#7D6064]" : "bg-[#F5E7E7]"
              }`}
            >
              <div>
                {!c.isActive ? (
                  <svg
                    width={28}
                    height={28}
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx={14} cy={14} r="13.5" stroke="#453C3C" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.795 9.30512C21.0683 9.57849 21.0683 10.0217 20.795 10.2951L12.395 18.6951C12.1216 18.9684 11.6784 18.9684 11.405 18.6951L7.20503 14.4951C6.93166 14.2217 6.93166 13.7785 7.20503 13.5051C7.47839 13.2318 7.92161 13.2318 8.19497 13.5051L11.9 17.2101L19.805 9.30512C20.0784 9.03176 20.5216 9.03176 20.795 9.30512Z"
                      fill="#453C3C"
                    />
                  </svg>
                ) : (
                  <svg
                    width={28}
                    height={28}
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx={14} cy={14} r="13.5" stroke="white" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.795 9.30512C21.0683 9.57849 21.0683 10.0217 20.795 10.2951L12.395 18.6951C12.1216 18.9684 11.6784 18.9684 11.405 18.6951L7.20503 14.4951C6.93166 14.2217 6.93166 13.7785 7.20503 13.5051C7.47839 13.2318 7.92161 13.2318 8.19497 13.5051L11.9 17.2101L19.805 9.30512C20.0784 9.03176 20.5216 9.03176 20.795 9.30512Z"
                      fill="white"
                    />
                  </svg>
                )}
              </div>
              <p
                className={`break-words whitespace-nowrap text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-medium font-montserrat ${
                  c.isActive ? "text-mainWhite" : "text-mainBlack"
                }`}
              >
                {c?.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full desktop:h-[104px] bg-[#F5E7E7] rounded-[10px] md:rounded-[20px] py-[20px] gap-[30px] desktop:py-[6px] px-[20px] sm:px-[30px] flex justify-between desktop:items-center desktop:flex-row flex-col">
        <div className="flex gap-5 h-full desktop:flex-row flex-col">
          <p className="text-[22px] leading-[18px] font-semibold font-montserrat text-mainBlack">
            Цена
          </p>
          <div className="pt-[30px] desktop:pt-[48px] flex">
            <RangeSlider />
          </div>
        </div>

        <div className="flex items-center gap-[15px]">
          <button
            className={`w-[150px] sm:w-[208px] h-[54px] polo:h-[66px] bg-[#7D6064] rounded-[10px] md:rounded-[20px] text-[14px] leading-[18px] sm:text-[18px] sm:leading-[24px] font-semibold font-montserrat text-mainWhite ${styles.active}`}
          >
            Применить
          </button>
          <button
            className={`w-[155px] h-[40px] sm:h-[54px] polo:h-[66px] bg-transparent rounded-[10px] md:rounded-[20px] text-[14px] leading-[18px] sm:text-[18px] sm:leading-[24px] font-semibold font-montserrat text-mainBlack ${styles.active}`}
          >
            Сбросить
          </button>
        </div>
      </div>

      <div className="flex sm:items-center justify-between sm:flex-row flex-col gap-[20px]">
        <p className="text-[18px] leading-[24px] text-mainBlack font-semibold font-montserrat">
          Найдено 102
        </p>

        <div className="w-full xs:w-[325px] h-[54px] bg-[#F5E7E7] rounded-[10px] md:rounded-[20px] flex items-center px-[20px] xs:px-0 justify-between xs:justify-center gap-6 md:gap-10">
          <p className="text-[18px] leading-[24px] text-mainBlack font-medium font-montserrat">
            Сначала дешевле
          </p>
          <div className={styles.active}>
            <svg
              width={22}
              height={22}
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx={11} cy={11} r={11} fill="#453C3C" />
              <path d="M5.5 8.85156L11 14.6953L16.5 8.85156" stroke="#F5E7E7" />
            </svg>
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {Array(16)
          .fill(0)
          .map((item, index) => (
            <div key={index} className="w-full flex flex-col gap-4 relative">
              <div className="w-[47px] h-[27px] md:w-[75px] md:h-[40px] md:rounded-[20px] rounded-[10px] bg-[#FADEED] absolute inset-0 z-[2] flex items-center justify-center">
                <p className="text-[13px] leading-[15px] md:text-[16px] md:leading-[18px] text-mainBlack font-montserrat font-semibold">
                  Top
                </p>
              </div>
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
                <p className="text-[18px] leading-[24px] text-mainBlack font-montserrat  font-semibold">
                  4 290 ₽
                </p>
                <button
                  className={`w-full xs:w-[155px] h-[50px] md:h-[54px] md:rounded-[20px] rounded-[10px] text-white bg-[#7D6064] md:bg-[#F5E7E7] font-montserrat md:text-mainBlack ${styles.active} text-[14px] leading-[18px] md:text-[18px] md:leading-[24px] font-normal hover:bg-mainBlack hover:text-mainWhite transition-all ease-in-out duration-500`}
                >
                  Купить
                </button>
              </div>
            </div>
          ))}
      </div>

      {/* <MyPagination /> */}

      <p className="text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] xl:text-[48px] xl:leading-[58px] text-mainBlack font-montserrat font-semibold">
        Вы смотрели
      </p>

      <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-[20px]">
        {Array(6)
          .fill(0)
          .map((item, index) => (
            <div key={index} className="flex flex-col gap-[20px]">
              <div className="h-[157px] sm:h-[210px] w-full relative">
                <CustomImage
                  image="/images/smot.webp"
                  title="vitrina"
                  fill
                  className1="object-cover rounded-[24px]"
                />
              </div>
              <p className="text-[15px] leading-[18px] sm:text-[16px] sm:leading-[20px] uppercase font-semibold font-montserrat text-[#453C3C]">
                3 гортензии Лайм Грин
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CatalogHome;

const ICATALOG = [
  {
    id: 1,
    title: "Букеты",
    isActive: true,
  },
  {
    id: 2,
    title: "пионовидные розы",
    isActive: false,
  },
  {
    id: 3,
    title: "Сезонные букеты",
    isActive: false,
  },
  {
    id: 4,
    title: "Пионы",
    isActive: false,
  },
  {
    id: 5,
    title: "Сборные букеты",
    isActive: false,
  },
  {
    id: 6,
    title: "Монобукеты",
    isActive: false,
  },
  {
    id: 7,
    title: "Коробки с Цветами",
    isActive: false,
  },
  {
    id: 8,
    title: "В корзине",
    isActive: false,
  },
];
