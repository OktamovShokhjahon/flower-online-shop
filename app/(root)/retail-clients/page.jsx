"use client";

import BreadCrumps from "../_components/breadcrumps";
import image1 from "../../../public/images/retail-client-1.png";
import image2 from "../../../public/images/retail-client-2.png";
import Image from "next/image";
import SimpleFlowerCard from "../_components/simple-flower-card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import Plantation2 from "../../../public/images/vit.webp";

function RetailClients() {
  const links = [
    {
      name: "Главная",
      href: "/",
    },
    {
      name: "Розничным клиентам",
      href: "/retail-clients",
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

  return (
    <div className="main-container">
      <BreadCrumps links={links} />

      <div className="flex justify-between flex-col desktop:flex-row gap-[20px]">
        <div className="max-w-full desktop:max-w-[60%] w-full flex flex-col gap-[30px] mt-[50px]">
          <h1 className="bold-title">Розничным клиентам</h1>
          <div className="flex flex-col gap-[15px]">
            <h2 className="lil-title">
              Уважаемые Профессионалы цветочного бизнеса, партнеры!
            </h2>
            <p className="light-description">
              Мы понимаем, что простые люди (физические лица) тоже хотят
              сэкономить и недорого купить цветы. Один цветок продать мы,
              конечно, не можем, но покупка одной пачки — вполне допустима.
              Впрочем, у нас такие цены, что один цветок покупать — это просто
              смешно. Обычно к нам заезжают за небольшим букетом, но уезжают еще
              и с горшечными цветами, рассадой, садовыми деревьями и хорошим
              настроением. Поэтому все наши преимущества в виде низких цен на
              самые свежие цветы отличного качества доступны и частным лицам за
              наличный расчет.
            </p>
            <p className="light-description">
              Мы составим любой сложности композиции, согласно Вашим пожеланиям.
              Поверьте, они оправдают все Ваши ожидания! Букеты оптом
              приобретать у нас выгодно еще и потому, что наши флористы обладают
              незаурядной фантазией, творческим мышлением. Используя
              индивидуальный подход к каждому клиенту, они создают такие букеты,
              от которых клиент обычно в восторге.
            </p>
          </div>
          <div className="flex flex-col gap-[15px]">
            <h1 className="bolder-title">Что мы предлагаем:</h1>
            <p className="light-description">
              Вы хотели бы быстро и своевременно получать новые поставки
              цветочных композиций, всегда свежих и красочных? Мы с
              удовольствием поможем в этом, предлагая именно такие, выгодные
              клиенту условия. Это касается также разнообразия, постоянного
              пополнения ассортимента. 
            </p>
            <p className="light-description">
              У нас регулярно появляется что-то новое, уникальные соцветия
              дополняют имеющийся ассортимент прекрасных растений. У Вас есть
              возможность пополнять свой товар новыми растениями на постоянной
              основе. Наши флористы легко сделают букеты, которые будут
              отличаться оригинальностью и красотой.
            </p>
            <ul className="number-list">
              <li>Замечательное оформление</li>
              <li>Только свежие букеты высокого качества</li>
              <li>Приемлемые цены</li>
              <li>Своевременную доставку, все согласно заявке</li>
            </ul>
          </div>
          <div className="flex flex-col gap-[15px]">
            <h1 className="bolder-title">
              Оптово-розничные гипермаркеты цветов и подарков
            </h1>
            <ul className="number-list">
              <li>Низкие цены на цветы и садовые растения</li>
              <li>
                Широкий ассортимент свежесрезанных цветов и горшечных растений
              </li>
              <li>Круглосуточный график работы</li>
              <li>Удобное расположение</li>
            </ul>
            <p className="light-description">
              Крупный и мелкий опт цветов позволит обеспечить постоянные
              поставки свежесрезанных и горшечных цветов для сетей цветочных
              салонов и больших магазинов. В ассортименте представлено свыше 300
              сезонных цветов, зелень, необходимые материалы и инструменты для
              работы флористов.
            </p>
          </div>
          <div>
            <button className="button px-[48px]">
              Регистрация для розничных клиентов
            </button>
          </div>
        </div>
        <div className="max-w-full desktop:max-w-[38%] w-full flex flex-col justify-evenly desktop:items-center gap-[20px]">
          <div className="max-w-[554px]">
            <Image src={image1} alt="image" width={"100%"} height={"100%"} />
          </div>

          <div className="max-w-[554px]">
            <Image src={image2} alt="image" width={"100%"} height={"100%"} />
          </div>
        </div>
      </div>

      <div className="my-[100px]">
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
    </div>
  );
}

export default RetailClients;
