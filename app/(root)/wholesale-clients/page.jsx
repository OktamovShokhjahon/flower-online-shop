"use client";

import BreadCrumps from "../_components/breadcrumps";
import image1 from "../../../public/images/whole-sale-1.png";
import image2 from "../../../public/images/whole-sale-2.png";
import Image from "next/image";
import SimpleFlowerCard from "../_components/simple-flower-card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import Plantation2 from "../../../public/images/vit.webp";

function WholesaleClients() {
  const links = [
    {
      name: "Главная",
      href: "/",
    },
    {
      name: "Оптовым клиентам",
      href: "/wholesale-clients",
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
          <h1 className="bold-title">Оптовым клиентам</h1>
          <div className="flex flex-col gap-[15px]">
            <h2 className="lil-title">
              Уважаемые Профессионалы цветочного бизнеса, партнеры!
            </h2>
            <p className="light-description">
              Наша компания уже сегодня может предложить уникальную услугу по
              закупке цветов непосредственно от производителя! Огромный
              цветочный ассортимент, который вы сможете купить напрямую с
              голландских цветочных аукционов  в режиме реального времени и по
              аукционным ценам, а также роза, купленная непосредственно на
              эквадорских и колумбийских плантациях, поможет вам стать более
              конкурентноспособными на цветочном рынке!
            </p>
            <p className="light-description">
              Профессиональные флористы, владельцы цветочных магазинов, бутиков,
              интернет-магазины доставки цветов, федеральные государственные
              организации — наши настоящие и будущие клиенты.
            </p>
          </div>
          <div className="flex flex-col gap-[15px]">
            <h2 className="bolder-title">
              Выгодное сотрудничество с оптовой базой цветов «Планета Флора»
            </h2>
            <p className="light-description">
              Дело в том, что наша компания не просто предоставляет возможность
              покупать цветы напрямую от производителей. Мы не бросаем своих
              клиентов один на один с транспортными компаниями, таможенными
              брокерами и с ворохом необходимых документов в ценах, ставках и в
              количестве которых можно запутаться и запросто потеряться. Работая
              с нами, вы получаете весь спектр услуг, связанных с закупкой
              цветов оптом в Голландии, Эквадоре, Колумбии, Кении и других
              странах, как в совокупности, так и каждого этапа в отдельности.
            </p>
          </div>
          <div className="flex flex-col gap-[15px]">
            <h2 className="bolder-title">
              Закупайте оптом только свежие цветы
            </h2>
            <p className="light-description">
              Компания располагает складом с холодильным оборудованием и
              необходимыми условиями для поддержания температурного режима.
              Ознакомиться с актуальными товарными позициями можно в оранжерее
              или садовом центре.
            </p>
            <p className="light-description">
              Компания готова предложить для небольших оптовых клиентов
              следующие преимущества сотрудничества:
            </p>
            <ul className="number-list">
              <li>
                Регулярное обновление ассортимента растений и высокое качество
                продукции;
              </li>
              <li>Широкий выбор роз, цветов для выращивания дома и в саду;</li>
              <li>
                Широкий ассортимент свежесрезанных цветов и все необходимое для
                работы флористов;
              </li>
              <li>
                Демократичные цены на позиционируемую продукцию благодаря
                прямому сотрудничеству с поставщиками
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-[15px]">
            <h1 className="bold-title">Предложение для оптовиков</h1>
            <p className="light-description">
              Компания предлагает для оптовых покупателей широкий ассортимент
              цветов и горшечных растений по оптовым ценам. Компания занимает
              одно из ведущих мест в регионе по масштабам сотрудничества с
              поставщиками из России, стран СНГ, Израиля, Голландии, Колумбии и
              Эквадора.
            </p>
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
              Регистрация для оптовых клиентов
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

export default WholesaleClients;
