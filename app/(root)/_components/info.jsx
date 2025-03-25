import { t } from "../../../utils/translate";
import React from "react";
import { styles } from "./helpers";
import CustomImage from "./image";

const Info = () => {
  return (
    <div className="w-full min-h-[587px] desktop:min-h-[370px] bg-[#FADEED] md:rounded-[20px] rounded-[10px] px-[20px] py-[30px] desktop:px-0 desktop:py-0 flex desktop:items-center justify-center relative">
      <CustomImage
        image={"/images/bg2.webp"}
        title={t("info.p1")}
        fill
        className1="w-full h-full object-contain desktop:flex hidden"
      />
      <div className="mid:w-[1360px] mx-auto w-[94%] h-full flex items-center">
        <div className="z-[2] flex flex-col gap-[15px] desktop:gap-6">
          <p className="uppercase text-[28px] leading-[36px] desktop:text-[40px] desktop:leading-[48px] mid:text-[48px] mid:leading-[52px] font-medium text-mainBlack font-montserrat">
            <span className="font-semibold">{t("info.p1")}</span>
          </p>
          <p className="text-[14px] leading-[18px] mid:text-[16px] max-w-[550px] mid:max-w-[623px] mid:leading-[24px] text-mainBlack font-normal font-montserrat">
            {t("info.p2")}
          </p>

          <div className="w-auto flex items-center gap-6 mt-auto">
            <p className="font-semibold text-[18px] leading-[22px] mid:text-[20px] font-montserrat text-mainBlack mid:leading-[24px]">
              {t("info.p3")}
            </p>
            <button
              className={`${styles.active} hidden desktop:flex items-center justify-center w-[300px] mid:w-[345px] h-[60px] mid:h-[67px] md:rounded-[20px] rounded-[10px] bg-[#7D6064] text-[#fff] text-[16px] leading-[20px] mid:text-[18px] mid:leading-[24px] font-normal font-montserrat`}
            >
              {t("info.p4")}
            </button>
          </div>
        </div>
      </div>

      <CustomImage
        image={"/images/in3.webp"}
        title={t("info.p1")}
        fill
        className1="w-full h-full object-contain desktop:hidden"
      />

      <div className="absolute bottom-5 w-[290px]">
        <button
          className={`${styles.active} desktop:hidden w-full h-[60px] mid:h-[67px] md:rounded-[20px] rounded-[10px] bg-[#7D6064] text-[#fff] text-[14px] leading-[18px] mid:text-[18px] mid:leading-[24px] font-normal font-montserrat`}
        >
          {t("info.p5")}
        </button>
      </div>
    </div>
  );
};

export default Info;
