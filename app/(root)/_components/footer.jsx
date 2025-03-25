"use client";
import Link from "next/link";
import React, { useState } from "react";
import CustomImage from "./image";
import { ChevronDown } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../components/ui/popover";
import { t } from "../../../utils/translate";
import { styles } from "./helpers";

const Footer = () => {
  const [city, setCity] = useState(t("header.top.cities.c1"));

  return (
    <div className="w-full h-[370px] bg-[#F5E7E7] border-t border-t-[#453C3C33]/20">
      <div className="polo:w-[1280px] justify-center items-center mx-auto w-[94%] h-full flex flex-col py-[50px] gap-[30px]">
        <div className="flex items-start gap-[70px]">
          {/* 1 */}
          <div className="flex flex-col gap-[20px]">
            {/* logo */}
            <div className="h-[46px] w-[207px] relative flex items-center justify-center">
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
            </div>
            <div className="flex flex-col gap-[10px]">
              <Link
                href={"tel:89049999999"}
                className="font-semibold text-[18px] leading-[24px] text-mainBlack font-montserrat"
              >
                8(904) 999 99 99
              </Link>
              <Link
                href={"tel:88009999999"}
                className="font-semibold text-[18px] leading-[24px] text-mainBlack font-montserrat"
              >
                8(800) 999 99 99
              </Link>
            </div>
            <div className="flex items-center gap-[15px]">
              <Link
                href="https://t.me/+88009999999"
                target="_blank"
                className={`${styles.active} w-[40px] h-[40px] rounded-full hover:bg-white flex items-center justify-center transition-all duration-500 ease-in-out`}
              >
                <svg
                  width={30}
                  height={30}
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.1991 20.1137C15.2302 20.1456 15.2613 20.1455 15.2613 20.1773C16.7864 21.3209 18.3115 22.4646 19.8055 23.64C20.0233 23.7988 20.2412 23.8941 20.4902 23.9576C20.9882 24.0847 21.3306 23.9259 21.5484 23.4812C21.6418 23.2906 21.7041 23.0681 21.7352 22.8775C22.0153 21.6068 22.2644 20.3044 22.5445 19.0336C22.9802 16.9051 23.416 14.8085 23.8828 12.68C24.2252 10.9963 24.5987 9.31265 24.9411 7.59718C25.0033 7.31126 25.0345 7.02536 24.9411 6.70768C24.8166 6.23116 24.4119 5.94525 23.9762 6.00879C23.8517 6.04055 23.6961 6.07232 23.5716 6.10409C20.7081 7.24773 17.8136 8.39138 14.9501 9.50325C11.9932 10.6787 9.03641 11.8223 6.04846 12.9977C5.58159 13.1883 5.0836 13.3789 4.61673 13.6013C4.42999 13.6966 4.24324 13.8237 4.11874 13.9825C3.90087 14.3002 3.99424 14.5861 4.30549 14.745C4.46111 14.8085 4.61673 14.872 4.77236 14.9038C6.29745 15.3803 7.85369 15.8569 9.37878 16.3334C9.47215 16.3651 9.53441 16.3651 9.62778 16.3016C13.0515 14.1731 16.4129 12.0129 19.7744 9.8527C20.0857 9.66209 20.3658 9.47149 20.6769 9.28088C20.8326 9.18558 20.9882 9.12204 21.175 9.15381C21.3306 9.18558 21.3617 9.28088 21.2683 9.40795C21.2373 9.47149 21.175 9.50325 21.1127 9.56679C19.2453 11.314 17.3467 13.0613 15.4792 14.8085C14.4209 15.7933 13.3627 16.7781 12.2734 17.7947C12.2422 17.8264 12.2111 17.8582 12.2111 17.89C12.1489 18.6206 12.0866 19.3513 12.0555 20.0819C11.9932 20.8762 11.931 21.6385 11.8687 22.4328C11.8687 22.5599 11.8376 22.7187 11.8376 22.8457C11.8687 22.8457 11.8999 22.8457 11.931 22.8457C11.9621 22.8457 11.9932 22.8457 12.0244 22.8457C12.3667 22.7822 12.6469 22.5916 12.8959 22.3375C13.2071 22.0516 13.4872 21.7657 13.7673 21.4797C14.2653 21.035 14.7322 20.5903 15.1991 20.1137Z"
                    fill="#453C3C"
                  />
                </svg>
              </Link>
              <Link
                href="https://t.me/+88009999999"
                target="_blank"
                className={`${styles.active} w-[40px] h-[40px] rounded-full hover:bg-white flex items-center justify-center transition-all duration-500 ease-in-out`}
              >
                <svg
                  width={30}
                  height={30}
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.06324 8.65481C2.71937 8.65481 2.3755 8.65481 2.03162 8.65481C1.80237 8.65481 1.57312 8.76394 1.34387 8.76394C1.11462 8.87308 1 9.09135 1 9.30962C1 9.41875 1 9.41875 1 9.41875C1.11462 9.74616 1.22925 9.96442 1.34387 10.2918C2.03162 11.6014 2.71937 12.9111 3.40712 14.2207C4.43874 15.8577 5.47036 17.4947 6.73123 19.0226C7.30436 19.6775 7.9921 20.3323 8.67985 20.9871C9.48222 21.5327 10.2846 22.0784 11.2016 22.515C12.4624 23.0606 12.8063 22.9515 14.1818 22.8424C14.6403 22.8424 15.0988 22.8424 15.6719 22.8424C15.7865 22.8424 17.0474 22.8424 17.162 22.8424C17.5059 22.7332 17.6205 23.0606 17.7352 22.7332C17.7352 22.6241 17.8498 22.4058 17.8498 22.2967C17.8498 21.9693 17.9644 21.5327 17.9644 21.2053C18.079 20.8779 18.1937 20.5505 18.4229 20.2231C18.7668 19.7866 19.1107 19.7866 19.5692 20.0049C19.913 20.114 20.1423 20.3323 20.3715 20.6597C20.83 21.2053 21.4032 21.6419 21.8617 22.1876C22.2055 22.515 22.664 22.7332 23.1225 22.9515C23.1225 23.0606 24.1541 22.9515 24.6126 22.9515C24.9565 22.9515 25.7589 22.9515 26.1028 22.9515C27.0198 22.9515 26.6759 22.9515 27.5929 22.9515C27.9368 22.9515 28.7391 22.9515 29.083 22.9515C29.5415 22.7332 30 22.6241 29.7708 22.1876C29.6561 21.9693 29.6561 21.8601 29.5415 21.6419C29.1976 21.0962 28.7391 20.5505 28.2806 20.114C27.5929 19.4592 26.9051 18.9135 26.332 18.2587C25.9881 18.0404 25.7589 17.713 25.5296 17.3856C25.1858 17.0582 25.1858 16.6216 25.415 16.2942C25.5296 16.1851 25.5296 15.9668 25.6443 15.8577C26.1028 15.2029 26.6759 14.6572 27.1344 14.0024C27.8221 13.1293 28.6245 12.2563 29.1976 11.274C29.4269 10.8375 29.6561 10.401 29.8854 9.96442C29.8854 9.85529 30 9.63702 30 9.52789C30 9.20048 29.8854 8.98221 29.4269 8.87308C29.083 8.76394 28.8538 8.76394 28.5099 8.76394C27.4783 8.76394 26.4466 8.76394 25.415 8.76394C24.9565 8.76394 24.498 8.76394 24.0395 8.76394C23.6956 8.76394 23.4664 8.87308 23.3518 9.09135C23.2371 9.20048 23.2371 9.30962 23.2371 9.41875C22.7787 10.6192 22.2055 11.8197 21.4032 12.9111C20.9447 13.675 20.4862 14.3298 19.7984 14.9846C19.5692 15.2029 19.3399 15.4212 18.996 15.5303C18.8814 15.6394 18.6522 15.5303 18.5375 15.4212C18.4229 15.312 18.3083 15.2029 18.3083 15.0938C18.079 14.7664 18.079 14.4389 18.079 14.1115C18.079 13.5659 18.079 13.1293 18.079 12.5837C18.079 12.1471 18.079 11.6014 18.079 11.1649C18.079 10.9466 18.079 10.7284 18.079 10.6192C18.079 10.1827 18.079 9.63702 18.079 9.20048C17.9644 8.65481 17.7352 8.3274 17.162 8.21827C16.4743 8 15.9012 8 15.328 8C14.5257 8 13.6087 8 12.8063 8C12.4624 8 12.3773 8.10913 12.0335 8.21827C11.6896 8.3274 11.9466 8.2976 11.7174 8.625C11.6028 8.73413 11.7174 8.51587 11.7174 8.625C11.7174 8.73414 11.6028 9.14087 11.7174 9.25C11.832 9.25 11.8043 9.64167 12.0335 9.75081C12.1186 10.1827 12.0039 9.74616 12.2332 10.1827C12.3478 10.5101 12.3478 10.7284 12.4624 11.0558C12.4624 11.4923 12.5771 11.8197 12.5771 12.2563C12.5771 13.0202 12.5771 13.8933 12.4624 14.6572C12.4624 14.9846 12.3478 15.2029 12.1186 15.4212C11.7747 15.4212 11.6601 15.5303 11.4308 15.5303C11.3162 15.5303 11.087 15.4212 10.9723 15.312C10.6285 15.2029 10.3992 14.8755 10.17 14.6572C9.48222 13.675 8.79448 12.6928 8.22135 11.7106C7.87748 10.9466 7.5336 10.1827 7.07511 9.30962C6.84586 8.87308 6.50198 8.65481 5.92886 8.65481C5.01186 8.65481 4.09487 8.65481 3.06324 8.65481Z"
                    fill="#453C3C"
                  />
                </svg>
              </Link>
              <Link
                href="https://t.me/+88009999999"
                target="_blank"
                className={`${styles.active} w-[40px] h-[40px] rounded-full hover:bg-white flex items-center justify-center transition-all duration-500 ease-in-out`}
              >
                <svg
                  width={30}
                  height={30}
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.3547 9.08737C21.0637 3.99983 14.3448 2.48732 9.13413 5.64984C4.06063 8.81237 2.41517 15.6874 5.70609 20.775L5.98034 21.1875L4.88336 25.3125L8.99702 24.2125L9.40838 24.4875C11.191 25.45 13.1107 26 15.0303 26C17.0872 26 19.144 25.45 20.9267 24.35C26.0002 21.05 27.5085 14.3124 24.3547 9.08737ZM21.4751 19.675C20.9267 20.5 20.241 21.05 19.2812 21.1875C18.7327 21.1875 18.0471 21.4625 15.3046 20.3625C12.9736 19.2625 11.0538 17.4749 9.68262 15.4124C8.85989 14.4499 8.44852 13.2124 8.31141 11.9749C8.31141 10.8749 8.72278 9.91238 9.40838 9.22487C9.68262 8.94987 9.95686 8.81237 10.2311 8.81237H10.9167C11.191 8.81237 11.4652 8.81237 11.6023 9.36237C11.8766 10.0499 12.5622 11.6999 12.5622 11.8374C12.6993 11.9749 12.6993 12.2499 12.5622 12.3874C12.6993 12.6624 12.5622 12.9374 12.4251 13.0749C12.2879 13.2124 12.1508 13.4874 12.0137 13.6249C11.7395 13.7624 11.6023 14.0374 11.7395 14.3124C12.2879 15.1374 12.9736 15.9624 13.6592 16.6499C14.4819 17.3374 15.3046 17.8874 16.2644 18.2999C16.5388 18.4374 16.813 18.4374 16.9501 18.1624C17.0872 17.8874 17.7729 17.1999 18.0471 16.9249C18.3213 16.6499 18.4584 16.6499 18.7327 16.7874L20.9267 17.8874C21.2009 18.0249 21.4751 18.1624 21.6122 18.2999C21.7494 18.7124 21.7494 19.2625 21.4751 19.675Z"
                    fill="#453C3C"
                  />
                </svg>
              </Link>
            </div>

            <p className="text-[12px] leading-[16px] text-[#16161633]/20 font-montserrat font-medium">
              {t("footer.p1")} <br />
              {t("footer.p2")}
            </p>
          </div>
          {/* 2 */}
          <div className="flex flex-col gap-[20px]">
            {/* language */}
            <div className="flex items-center gap-2 h-[46px]">
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

            <p className="text-[16px] leading-[20px] text-mainBlack font-semibold font-montserrat">
              {t("footer.p3")}
            </p>

            <div className="flex flex-col gap-[10px]">
              <p
                className={`text-[14px] leading-[18px] font-medium font-montserrat text-[#453C3C99]/60 ${styles.active} cursor-pointer hover:text-mainBlack transition-all duration-500 ease-in-out hover:font-semibold`}
              >
                {t("footer.p4")}
              </p>
              <p
                className={`text-[14px] leading-[18px] font-medium font-montserrat text-[#453C3C99]/60 ${styles.active} cursor-pointer hover:text-mainBlack transition-all duration-500 ease-in-out hover:font-semibold`}
              >
                {t("footer.p5")}
              </p>
              <p
                className={`text-[14px] leading-[18px] font-medium font-montserrat text-[#453C3C99]/60 ${styles.active} cursor-pointer hover:text-mainBlack transition-all duration-500 ease-in-out hover:font-semibold`}
              >
                {t("footer.p6")}
              </p>
              <p
                className={`text-[14px] leading-[18px] font-medium font-montserrat text-[#453C3C99]/60 ${styles.active} cursor-pointer hover:text-mainBlack transition-all duration-500 ease-in-out hover:font-semibold`}
              >
                {t("footer.p7")}
              </p>
              <p
                className={`text-[14px] leading-[18px] font-medium font-montserrat text-[#453C3C99]/60 ${styles.active} cursor-pointer hover:text-mainBlack transition-all duration-500 ease-in-out hover:font-semibold`}
              >
                {t("footer.p8")}
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className="flex flex-col gap-[20px] min-w-[270px]">
            <div className="h-[46px] bg-[#F9EFF0] w-full px-[20px] flex items-center md:rounded-[20px] rounded-[10px] gap-[30px]">
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
            <p className="text-[16px] leading-[20px] text-mainBlack font-semibold font-montserrat">
              {t("footer.p9")}
            </p>
            <p className="text-[16px] leading-[20px] text-mainBlack font-semibold font-montserrat">
              {t("footer.p10")}
            </p>
            <p className="text-[16px] leading-[20px] text-mainBlack font-semibold font-montserrat">
              {t("footer.p11")}
            </p>
            <p className="text-[16px] leading-[20px] text-mainBlack font-semibold font-montserrat">
              {t("footer.p12")}
            </p>
          </div>
          {/* 4 */}
          <div className="flex flex-col gap-[20px] min-w-[400px]">
            {/* search */}
            <div className="w-[310px] h-[46px] relative">
              <input
                type="text"
                placeholder={t("header.top.t2")}
                className="w-full h-full md:rounded-[20px] rounded-[10px] bg-[#F9EFF0] px-[30px] placeholder:text-[14px] placeholder:leading-[17px] text-mainBlack placeholder:text-[#453C3C80]/40 font-montserrat font-medium outline-mainBlack pr-[80px]"
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

            <div className="w-auto flex items-start gap-[60px]">
              <div className="flex flex-col gap-[20px]">
                <p className="text-[16px] leading-[20px] text-mainBlack font-semibold font-montserrat">
                  {t("footer.p13")}
                </p>
                <p className="text-[16px] leading-[20px] text-mainBlack font-semibold font-montserrat">
                  {t("footer.p14")}
                </p>
                <p className="text-[16px] leading-[20px] text-mainBlack font-semibold font-montserrat">
                  {t("footer.p15")}
                </p>
              </div>
              <div className="flex flex-col gap-[20px]">
                <p className="text-[16px] leading-[20px] text-mainBlack font-semibold font-montserrat">
                  {t("footer.p16")}
                </p>
                <p
                  className={`text-[14px] leading-[18px] font-medium font-montserrat text-[#453C3C99]/60 ${styles.active} cursor-pointer hover:text-mainBlack transition-all duration-500 ease-in-out hover:font-semibold`}
                >
                  {t("footer.p17")}
                </p>
                <p
                  className={`text-[14px] leading-[18px] font-medium font-montserrat text-[#453C3C99]/60 ${styles.active} cursor-pointer hover:text-mainBlack transition-all duration-500 ease-in-out hover:font-semibold`}
                >
                  {t("footer.p18")}
                </p>
                <p
                  className={`text-[14px] leading-[18px] font-medium font-montserrat text-[#453C3C99]/60 ${styles.active} cursor-pointer hover:text-mainBlack transition-all duration-500 ease-in-out hover:font-semibold`}
                >
                  {t("footer.p19")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
