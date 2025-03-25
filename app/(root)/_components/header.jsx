"use client";
import React, { useState } from "react";
import { styles } from "./helpers";
import Link from "next/link";
import CustomImage from "./image";
import { ChevronDown } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../components/ui/popover";
import { t } from "../../../utils/translate";
import { usePathname } from "next/navigation";
import useScrollDirection from "../../../hooks/use-scroll";
import useScrollStore from "../../../hooks/scroll.store";

const Header = () => {
  const isScrollingUp = useScrollStore((state) => state.isScrollingUp);
  useScrollDirection();
  const [city, setCity] = useState(t("header.top.cities.c1"));
  const pathname = usePathname();
  const isPathname = (path) => pathname === path;

  return (
    isScrollingUp && (
      <div
        data-aos="fade-down"
        className="h-[60px] desktop:h-[155px] w-full fixed inset-0 z-[99] bg-mainWhite"
      >
        <div className="xl:w-[1360px] w-[94%] py-[21px] mx-auto h-full hidden desktop:flex flex-col gap-[24px] mid:gap-[36px]">
          {/* top */}
          <div className="w-full flex polo:justify-between gap-[30px] mid:gap-[50px] items-center">
            {/* left */}
            <div className="flex gap-[30px] mid:gap-[50px] items-center">
              {/* logo */}
              <Link
                href="/"
                className={`w-[207px] h-[40px] ${styles.active} relative`}
              >
                <CustomImage
                  image="/images/logo.svg"
                  title="logo"
                  fill
                  className1="object-contain"
                />
              </Link>
              {/* language */}
              <div className="flex items-center gap-2">
                <p className="text-[16px] leading-[24px] font-semibold font-montserrat text-mainBlack">
                  RU
                </p>
                <Popover>
                  <PopoverTrigger>
                    <div className="w-[16px] h-[16px] flex items-center justify-center bg-mainBlack rounded-full">
                      <ChevronDown className="text-secondWhite" />
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="max-w-[60px] rounded-t-none rounded-b-[20px] z-[99] p-2 flex text-mainBlack font-montserrat text-[15px] justify-center">
                    RU
                  </PopoverContent>
                </Popover>
              </div>

              <div className="h-[46px] bg-secondWhite px-[20px] xl:px-[30px] flex items-center md:rounded-[20px] rounded-[10px] gap-[30px]">
                <p className="font-montserrat text-[15px] font-normal text-[#453C3C80]/40">
                  {t("header.top.t1")}
                </p>

                <div className="flex items-center gap-2">
                  <p className="text-[16px] leading-[24px] font-semibold font-montserrat text-mainBlack">
                    {city}
                  </p>
                  <Popover>
                    <PopoverTrigger>
                      <div className="w-[16px] h-[16px] flex items-center justify-center bg-mainBlack rounded-full">
                        <ChevronDown className="text-secondWhite" />
                      </div>
                    </PopoverTrigger>
                    <PopoverContent className="max-w-[200px] bg-[#F9EFF0] rounded-t-none z-[99] rounded-b-[20px] mt-[10px] p-3 gap-2 flex text-mainBlack font-montserrat text-[15px] flex-col justify-center">
                      <p
                        className="cursor-pointer"
                        onClick={() => {
                          setCity(t("header.top.cities.c1"));
                        }}
                      >
                        {t("header.top.cities.c1")}
                      </p>
                      {/* <p  className='cursor-pointer'
                      onClick={() => {
                        setCity(t("header.top.cities.c2"))
                      }}
                    >{t("header.top.cities.c2")}</p> */}
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
            {/* right */}
            <div className="flex items-center gap-[30px] mid:gap-[50px]">
              {/* search */}
              <div className="w-[280px] xl:w-[310px] h-[46px] relative">
                <input
                  type="text"
                  placeholder={t("header.top.t2")}
                  className="w-full h-full md:rounded-[20px] rounded-[10px] bg-secondWhite px-[20px] xl:px-[30px] placeholder:text-[14px] placeholder:leading-[17px] text-mainBlack placeholder:text-[#453C3C80]/40 font-montserrat font-medium outline-mainBlack pr-[80px]"
                />

                <div
                  className={`${styles.active} absolute right-[30px] top-[50%] translate-y-[-50%] cursor-pointer`}
                >
                  <svg
                    width={22}
                    height={22}
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.1062 18.5878C15.3003 20.0657 12.9918 20.9523 10.4762 20.9523C4.69035 20.9523 0 16.262 0 10.4762C0 4.69033 4.69035 0 10.4762 0C16.262 0 20.9524 4.69033 20.9524 10.4762C20.9524 12.9918 20.0657 15.3003 18.5878 17.1063L21.6932 20.2116C22.1023 20.6207 22.1023 21.284 21.6932 21.6932C21.284 22.1023 20.6207 22.1023 20.2116 21.6932L17.1062 18.5878ZM18.8571 10.4762C18.8571 15.1048 15.1049 18.8571 10.4762 18.8571C5.84751 18.8571 2.09524 15.1048 2.09524 10.4762C2.09524 5.8475 5.84751 2.09523 10.4762 2.09523C15.1049 2.09523 18.8571 5.8475 18.8571 10.4762Z"
                      fill="#453C3C"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex items-center polo:flex-row flex-col gap-[2px] polo:gap-[20px]">
                <Link
                  href={"tel:89049999999"}
                  className="font-semibold text-[14px] polo:text-[16px] xl:text-[18px] xl:leading-[24px] text-mainBlack font-montserrat"
                >
                  8(904) 999 99 99
                </Link>
                <Link
                  href={"tel:88009999999"}
                  className="font-semibold text-[14px] polo:text-[16px] xl:text-[18px] xl:leading-[24px] text-mainBlack font-montserrat"
                >
                  8(800) 999 99 99
                </Link>
              </div>
            </div>
          </div>

          {/* bottom */}
          <div className="w-full flex items-center justify-between gap-[30px] mid:gap-[50px]">
            <div className="flex items-center gap-[30px] mid:gap-[50px]">
              <Link
                href={"/catalog"}
                className={`flex items-center gap-1 ${styles.active} ${
                  isPathname("/catalog") && "border-b border-b-mainBlack pb-1"
                }`}
              >
                <p className="text-[16px] leading-[22px] text-mainBlack font-normal font-montserrat">
                  {t("header.bottom.t1")}
                </p>
                <div>
                  <svg
                    width={18}
                    height={17}
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.22217 4.20665V2.27778C7.22217 1.80628 7.40949 1.35412 7.74289 1.02072C8.07629 0.687327 8.52845 0.5 8.99995 0.5C9.47144 0.5 9.9236 0.687327 10.257 1.02072C10.5904 1.35412 10.7777 1.80628 10.7777 2.27778V4.20665"
                      fill="white"
                    />
                    <path
                      d="M7.22217 4.20665V2.27778C7.22217 1.80628 7.40949 1.35412 7.74289 1.02072C8.07629 0.687327 8.52845 0.5 8.99995 0.5C9.47144 0.5 9.9236 0.687327 10.257 1.02072C10.5904 1.35412 10.7777 1.80628 10.7777 2.27778V4.20665"
                      stroke="#453C3C"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.7777 12.7935V14.7223C10.7777 15.1938 10.5904 15.646 10.257 15.9794C9.9236 16.3128 9.47144 16.5001 8.99995 16.5001C8.52845 16.5001 8.07629 16.3128 7.74289 15.9794C7.40949 15.646 7.22217 15.1938 7.22217 14.7223V12.7935"
                      fill="white"
                    />
                    <path
                      d="M10.7777 12.7935V14.7223C10.7777 15.1938 10.5904 15.646 10.257 15.9794C9.9236 16.3128 9.47144 16.5001 8.99995 16.5001C8.52845 16.5001 8.07629 16.3128 7.74289 15.9794C7.40949 15.646 7.22217 15.1938 7.22217 14.7223V12.7935"
                      stroke="#453C3C"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.2935 6.72217H15.2224C15.6939 6.72217 16.146 6.90949 16.4794 7.24289C16.8128 7.57629 17.0002 8.02845 17.0002 8.49995C17.0002 8.97144 16.8128 9.4236 16.4794 9.757C16.146 10.0904 15.6939 10.2777 15.2224 10.2777H13.2935"
                      fill="white"
                    />
                    <path
                      d="M13.2935 6.72217H15.2224C15.6939 6.72217 16.146 6.90949 16.4794 7.24289C16.8128 7.57629 17.0002 8.02845 17.0002 8.49995C17.0002 8.97144 16.8128 9.4236 16.4794 9.757C16.146 10.0904 15.6939 10.2777 15.2224 10.2777H13.2935"
                      stroke="#453C3C"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.70671 10.2777H2.77778C2.30628 10.2777 1.85412 10.0904 1.52072 9.757C1.18733 9.4236 1 8.97144 1 8.49995C1 8.02845 1.18733 7.57629 1.52072 7.24289C1.85412 6.90949 2.30628 6.72217 2.77778 6.72217H4.70671"
                      fill="white"
                    />
                    <path
                      d="M4.70671 10.2777H2.77778C2.30628 10.2777 1.85412 10.0904 1.52072 9.757C1.18733 9.4236 1 8.97144 1 8.49995C1 8.02845 1.18733 7.57629 1.52072 7.24289C1.85412 6.90949 2.30628 6.72217 2.77778 6.72217H4.70671"
                      stroke="#453C3C"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.28418 5.85558C9.3658 5.66953 9.48193 5.50063 9.62641 5.3578L12.142 2.84223C12.3071 2.67694 12.5031 2.54579 12.719 2.45633C12.9348 2.36686 13.1661 2.3208 13.3997 2.3208C13.6334 2.3208 13.8647 2.36686 14.0805 2.45633C14.2963 2.54579 14.4924 2.67694 14.6576 2.84223C14.8228 3.00734 14.9539 3.2034 15.0434 3.41922C15.1329 3.63504 15.1789 3.86636 15.1789 4.09999C15.1789 4.33362 15.1329 4.56494 15.0434 4.78076C14.9539 4.99658 14.8228 5.19269 14.6576 5.3578L12.142 7.87332C11.9992 8.0178 11.8303 8.13393 11.6442 8.21555"
                      fill="white"
                    />
                    <path
                      d="M9.28418 5.85558C9.3658 5.66953 9.48193 5.50063 9.62641 5.3578L12.142 2.84223C12.3071 2.67694 12.5031 2.54579 12.719 2.45633C12.9348 2.36686 13.1661 2.3208 13.3997 2.3208C13.6334 2.3208 13.8647 2.36686 14.0805 2.45633C14.2963 2.54579 14.4924 2.67694 14.6576 2.84223C14.8228 3.00734 14.9539 3.2034 15.0434 3.41922C15.1329 3.63504 15.1789 3.86636 15.1789 4.09999C15.1789 4.33362 15.1329 4.56494 15.0434 4.78076C14.9539 4.99658 14.8228 5.19269 14.6576 5.3578L12.142 7.87332C11.9992 8.0178 11.8303 8.13393 11.6442 8.21555"
                      stroke="#453C3C"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.71571 11.1667C8.63409 11.3527 8.51796 11.5216 8.37348 11.6644L5.85786 14.18C5.52427 14.5136 5.07191 14.701 4.60015 14.701C4.12839 14.701 3.67592 14.5136 3.34234 14.18C3.00876 13.8464 2.82129 13.394 2.82129 12.9222C2.82129 12.4504 3.00876 11.998 3.34234 11.6644L5.85786 9.14887C6.00069 9.00439 6.16964 8.88826 6.35569 8.80664"
                      fill="white"
                    />
                    <path
                      d="M8.71571 11.1667C8.63409 11.3527 8.51796 11.5216 8.37348 11.6644L5.85786 14.18C5.52427 14.5136 5.07191 14.701 4.60015 14.701C4.12839 14.701 3.67592 14.5136 3.34234 14.18C3.00876 13.8464 2.82129 13.394 2.82129 12.9222C2.82129 12.4504 3.00876 11.998 3.34234 11.6644L5.85786 9.14887C6.00069 9.00439 6.16964 8.88826 6.35569 8.80664"
                      stroke="#453C3C"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.6667 8.78467C11.8527 8.86629 12.0217 8.98242 12.1645 9.1269L14.68 11.6424C14.8453 11.8075 14.9764 12.0036 15.0659 12.2195C15.1553 12.4353 15.2014 12.6666 15.2014 12.9002C15.2014 13.1339 15.1553 13.3652 15.0659 13.581C14.9764 13.7968 14.8453 13.9929 14.68 14.158C14.5149 14.3233 14.3188 14.4544 14.103 14.5439C13.8872 14.6334 13.6558 14.6794 13.4222 14.6794C13.1886 14.6794 12.9572 14.6334 12.7414 14.5439C12.5256 14.4544 12.3296 14.3233 12.1645 14.158L9.64887 11.6424C9.50439 11.4996 9.38826 11.3307 9.30664 11.1446"
                      fill="white"
                    />
                    <path
                      d="M11.6667 8.78467C11.8527 8.86629 12.0217 8.98242 12.1645 9.1269L14.68 11.6424C14.8453 11.8075 14.9764 12.0036 15.0659 12.2195C15.1553 12.4353 15.2014 12.6666 15.2014 12.9002C15.2014 13.1339 15.1553 13.3652 15.0659 13.581C14.9764 13.7968 14.8453 13.9929 14.68 14.158C14.5149 14.3233 14.3188 14.4544 14.103 14.5439C13.8872 14.6334 13.6558 14.6794 13.4222 14.6794C13.1886 14.6794 12.9572 14.6334 12.7414 14.5439C12.5256 14.4544 12.3296 14.3233 12.1645 14.158L9.64887 11.6424C9.50439 11.4996 9.38826 11.3307 9.30664 11.1446"
                      stroke="#453C3C"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.35569 8.2156C6.16964 8.13398 6.00069 8.01785 5.85786 7.87337L3.34234 5.35786C3.00876 5.02427 2.82129 4.5718 2.82129 4.10004C2.82129 3.62829 3.00876 3.17587 3.34234 2.84229C3.67592 2.5087 4.12839 2.32129 4.60015 2.32129C5.07191 2.32129 5.52427 2.5087 5.85786 2.84229L8.37348 5.35786C8.51796 5.50069 8.63409 5.66959 8.71571 5.85563"
                      fill="white"
                    />
                    <path
                      d="M6.35569 8.2156C6.16964 8.13398 6.00069 8.01785 5.85786 7.87337L3.34234 5.35786C3.00876 5.02427 2.82129 4.5718 2.82129 4.10004C2.82129 3.62829 3.00876 3.17587 3.34234 2.84229C3.67592 2.5087 4.12839 2.32129 4.60015 2.32129C5.07191 2.32129 5.52427 2.5087 5.85786 2.84229L8.37348 5.35786C8.51796 5.50069 8.63409 5.66959 8.71571 5.85563"
                      stroke="#453C3C"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.00065 11.1668C10.4734 11.1668 11.6673 9.97292 11.6673 8.50016C11.6673 7.0274 10.4734 5.8335 9.00065 5.8335C7.52789 5.8335 6.33398 7.0274 6.33398 8.50016C6.33398 9.97292 7.52789 11.1668 9.00065 11.1668Z"
                      stroke="#453C3C"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>

              <div className="flex items-center gap-2">
                <p className="text-[16px] leading-[22px] text-mainBlack font-normal font-montserrat">
                  {t("header.bottom.t2")}
                </p>
                <Popover>
                  <PopoverTrigger>
                    <ChevronDown className="text-mainBlack w-6 h-4" />
                  </PopoverTrigger>
                  <PopoverContent className="max-w-[200px] bg-[#F9EFF0] rounded-t-none rounded-b-[20px] mt-[10px] p-3 gap-2 flex text-mainBlack font-montserrat text-[15px] flex-col justify-center">
                    <Link
                      href={"/plantation"}
                      className={`cursor-pointer ${
                        isPathname("/plantation") && "underline"
                      }`}
                    >
                      {t("header.bottom.t7")}
                    </Link>
                    <Link
                      href={"/example-calculation"}
                      className={`cursor-pointer ${
                        isPathname("/example-calculation") && "underline"
                      }`}
                    >
                      {t("header.bottom.t8")}
                    </Link>
                    <Link
                      href={"/holiday-schedule"}
                      className={`cursor-pointer ${
                        isPathname("/holiday-schedule") && "underline"
                      }`}
                    >
                      {t("header.bottom.t9")}
                    </Link>
                  </PopoverContent>
                </Popover>
              </div>

              <Link
                href={"/payment-and-delivery"}
                className={`flex items-center gap-1 ${styles.active} ${
                  isPathname("/payment-and-delivery") &&
                  "border-b border-b-mainBlack pb-1"
                }`}
              >
                <p className="text-[16px] leading-[22px] text-mainBlack font-normal font-montserrat">
                  {t("header.bottom.t3")}
                </p>
              </Link>
            </div>

            <div className="flex items-center gap-[30px] mid:gap-[50px]">
              <Link
                href={"/broker"}
                className={`flex items-center gap-1 ${styles.active} ${
                  isPathname("/broker") && "border-b border-b-mainBlack pb-1"
                }`}
              >
                <p className="text-[16px] leading-[22px] text-mainBlack font-normal font-montserrat">
                  {t("header.bottom.t4")}
                </p>
              </Link>
              <Link
                href={"/wholesale-clients"}
                className={`flex items-center gap-1 ${styles.active} ${
                  isPathname("/wholesale-clients") &&
                  "border-b border-b-mainBlack pb-1"
                }`}
              >
                <p className="text-[16px] leading-[22px] text-mainBlack font-normal font-montserrat">
                  {t("header.bottom.t5")}
                </p>
              </Link>
              <Link
                href={"/retail-clients"}
                className={`flex items-center gap-1 ${styles.active} ${
                  isPathname("/retail-clients") &&
                  "border-b border-b-mainBlack pb-1"
                }`}
              >
                <p className="text-[16px] leading-[22px] text-mainBlack font-normal font-montserrat">
                  {t("header.bottom.t6")}
                </p>
              </Link>
            </div>

            <div className="flex items-center gap-[15px] mid:gap-[30px]">
              <div>
                <svg
                  className="w-[22px] h-[20px] polo:w-[34px] polo:h-[30px]"
                  viewBox="0 0 34 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.219 15.077L17 28L29.781 15.077C31.2018 13.6404 32 11.692 32 9.66032C32 5.42964 28.608 2 24.4239 2C22.4145 2 20.4875 2.80707 19.0667 4.24366L17 6.33333L14.9333 4.24366C13.5125 2.80707 11.5855 2 9.57614 2C5.39195 2 2 5.42964 2 9.66032C2 11.692 2.7982 13.6404 4.219 15.077Z"
                    stroke="#453C3C"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="relative">
                <svg
                  className="w-[20px] h-[19px] polo:w-[28px] polo:h-[26px]"
                  viewBox="0 0 26 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.72692 6.36364C6.72692 2.8491 9.57601 0 13.0906 0C16.6051 0 19.4542 2.8491 19.4542 6.36364H21.9996C24.1084 6.36364 25.8178 8.0731 25.8178 10.1818V21.6364C25.8178 25.1509 22.9687 28 19.4542 28H6.72692C3.21238 28 0.363281 25.1509 0.363281 21.6364V10.1818C0.363281 8.0731 2.07274 6.36364 4.18146 6.36364H6.72692ZM9.27237 6.36364C9.27237 4.25491 10.9818 2.54545 13.0906 2.54545C15.1993 2.54545 16.9087 4.25491 16.9087 6.36364H9.27237ZM6.72692 8.90909V12.7273C6.72692 13.4302 7.29674 14 7.99964 14C8.70255 14 9.27237 13.4302 9.27237 12.7273V8.90909H16.9087V12.7273C16.9087 13.4302 17.4786 14 18.1815 14C18.8844 14 19.4542 13.4302 19.4542 12.7273V8.90909H21.9996C22.7026 8.90909 23.2724 9.47891 23.2724 10.1818V21.6364C23.2724 23.7451 21.5629 25.4545 19.4542 25.4545H6.72692C4.61819 25.4545 2.90874 23.7451 2.90874 21.6364V10.1818C2.90874 9.47891 3.47856 8.90909 4.18146 8.90909H6.72692Z"
                    fill="#453C3C"
                  />
                </svg>
                <div className="absolute top-[-4px] polo:top-0 left-[10px] polo:left-[14px] w-[14px] h-[14px] rounded-full bg-[#7A9A40]"></div>
              </div>

              <div className="relative">
                <svg
                  className="w-[20px] h-[20px] polo:w-[28px] polo:h-[28px]"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22 8C22 12.4183 18.4182 16 14 16C9.58168 16 5.99996 12.4183 5.99996 8C5.99996 3.58172 9.58168 0 14 0C18.4182 0 22 3.58172 22 8ZM19.3333 8C19.3333 10.9455 16.9455 13.3333 14 13.3333C11.0544 13.3333 8.66663 10.9455 8.66663 8C8.66663 5.05448 11.0544 2.66667 14 2.66667C16.9455 2.66667 19.3333 5.05448 19.3333 8Z"
                    fill="#453C3C"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.0001 17.3333C10.0866 17.3333 7.26489 18.1451 5.24082 19.3623C3.20867 20.5844 2.06725 22.1633 1.43694 23.5441C0.905623 24.7081 1.14744 25.8943 1.85335 26.7394C2.52624 27.545 3.57249 28 4.66669 28H23.3333C24.4275 28 25.4737 27.545 26.1466 26.7395C26.8525 25.8944 27.0944 24.7082 26.5631 23.5442C25.9328 22.1633 24.7914 20.5844 22.7593 19.3623C20.7352 18.1451 17.9136 17.3333 14.0001 17.3333ZM3.86283 24.6515C4.30037 23.6929 5.10409 22.5562 6.61509 21.6476C8.13417 20.7341 10.4537 20 14.0001 20C17.5465 20 19.866 20.7341 21.385 21.6476C22.896 22.5563 23.6997 23.6929 24.1372 24.6515C24.1888 24.7647 24.1866 24.8327 24.1814 24.8675C24.1755 24.9071 24.156 24.9629 24.1 25.0299C23.9798 25.1738 23.7119 25.3333 23.3333 25.3333H4.66669C4.28812 25.3333 4.02017 25.1738 3.89996 25.0299C3.84399 24.9629 3.82452 24.9071 3.8186 24.8675C3.81341 24.8327 3.81116 24.7647 3.86283 24.6515Z"
                    fill="#453C3C"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-[94%] mx-auto items-center justify-between desktop:hidden h-full">
          <Link href={"/"} className="w-[163px] h-[30px] relative">
            <CustomImage
              image={"/images/ml.svg"}
              fill
              title="logo"
              className1="w-full h-full"
            />
          </Link>

          <div className={`w-[28px] h-[20px] relative ${styles.active}`}>
            <CustomImage
              image={"/images/line.svg"}
              fill
              title="logo"
              className1="w-full h-full"
            />
          </div>
        </div>
      </div>
    )
  );
};

export default Header;
