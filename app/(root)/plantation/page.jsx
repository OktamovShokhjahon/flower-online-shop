"use client";

import { t } from "../../../utils/translate";
import BreadCrumps from "../_components/breadcrumps";
import Palantation1 from "../../../public/images/palantation1.png";
import Plantation2 from "../../../public/images/vit.webp";
import PlantationBanner from "../../../public/images/plantation-banner.png";
import Image from "next/image";
import SimpleFlowerCard from "../_components/simple-flower-card";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";

const links = [
  {
    name: t("plantation.p1"),
    href: "/",
  },
  {
    name: t("plantation.p2"),
    href: "/plantation",
  },
];

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

const Plantation = () => {
  return (
    <div className="main-container">
      <BreadCrumps links={links} />

      <div className="w-full flex justify-between items-center mt-[50px]">
        <div className="w-full desktop:w-[48%] flex flex-col justify-between">
          <p className="bold-description">{t("plantation.p3")}</p>
          <p className="light-description py-[30px]">{t("plantation.p4")}</p>

          <div className="max-w-[1060px] block desktop:hidden">
            <Image
              src={Palantation1}
              width={"100%"}
              height={"100%"}
              alt="image"
              className="w-full"
            />
          </div>
          <div className="w-auto desktop:w-full">
            <button className="button desktop:w-[300px] mt-[30px] desktop:mt-0 w-full">
              {t("plantation.p5")}
            </button>
          </div>
        </div>
        <div className="hidden desktop:block max-w-[50%]">
          <Image src={Palantation1} width={"100%"} alt="image" />
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
                  <SwiperSlide>
                    <SimpleFlowerCard key={idx} {...flower} />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>

      <div className="mt-[100px]">
        <h1 className="light-title">{t("plantation.p6")}</h1>

        <div className="max-w-[1360px] mt-[50px]">
          <Image
            src={PlantationBanner}
            alt="image"
            width={"100%"}
            height={"100%"}
          />
        </div>
      </div>

      <div className="my-[100px]">
        <h1 className="light-title mb-[50px]">{t("plantation.p7")}</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2634.360010077368!2d67.76437727527569!3d40.107380574410584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b2950047afb107%3A0xb85d810ec26083e2!2sE&#39;zoz%20Market!5e1!3m2!1suz!2s!4v1742985426165!5m2!1suz!2s"
          width="100%"
          height="661px"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Plantation;
