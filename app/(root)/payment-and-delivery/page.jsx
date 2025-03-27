import { Popular } from "../_components";
import BreadCrumps from "../_components/breadcrumps";
import map from "../../../public/images/map.png";
import Image from "next/image";

function PaymentAndDelivery() {
  const links = [
    {
      name: "Главная",
      href: "/",
    },
    {
      name: "Оплата и доставка",
      href: "/payment-and-delivery",
    },
  ];

  return (
    <div className="main-container">
      <BreadCrumps links={links} />

      <div className="flex justify-between flex-col desktop:flex-row gap-[20px] mb-[100px]">
        <div className="max-w-full desktop:max-w-[60%] w-full flex flex-col gap-[30px] mt-[50px]">
          <h1 className="bolder-title">Оплата и доставка</h1>
          <div className="flex flex-col gap-[15px]">
            <h2 className="light-description">
              Бесплатная доставка цветов в пределах МКАД
            </h2>
            <p className="light-description">
              <span>1. География доставки:</span> <br /> Мы предлагаем
              бесплатную доставку цветов в рамках Московской кольцевой
              автомобильной дороги (МКАД).
            </p>
            <p className="light-description">
              <span>2. Рабочее время:</span> <br /> Доставка осуществляется в
              рабочие часы с 08:00 до 20:00.
            </p>
            <p className="light-description">
              <span>3. Интервалы доставки:</span> <br /> Вы можете выбрать
              удобный для вас двухчасовой интервал доставки, например, с 10:00
              до 12:00.
            </p>
            <p className="light-description">
              <span>4. Правила заказа:</span> <br />
              Заказ на доставку следует оформить минимум за 4 часа до начала
              выбранного интервала.
            </p>
            <p className="light-description">
              <span>5. Доставка в день заказа:</span> <br /> Для получения
              цветов в день заказа, необходимо оформить заказ до 14:00.
            </p>
          </div>
          <div className="flex flex-col gap-[15px]">
            <h2 className="bolder-title">
              Платная доставка цветов за пределы МКАД
            </h2>
            <div className="light-description">
              <span>Расчет стоимости:</span> <br /> Стоимость доставки
              определяется в зависимости от расстояния от МКАД:
              <ul className="disc-list">
                <li>До 5 км: 500 рублей</li>
                <li>От 6 до 10 км: 1000 рублей</li>
                <li>От 11 до 15 км: 1500 рублей</li>
              </ul>
            </div>
            <p className="light-description">
              <span>2. Определение километража:</span> <br /> Расстояние до
              места доставки измеряется от ближайшего к точке заказа шоссе,
              ведущего из центра Москвы.
            </p>
            <p className="light-description">
              <span>3. Время доставки:</span> Сроки доставки могут увеличиваться
              для адресов, расположенных за пределами МКАД.
            </p>
          </div>
        </div>
        <div className="max-w-full desktop:max-w-[38%] w-full flex flex-col justify-evenly desktop:items-center gap-[20px]">
          <div className="max-w-[554px]">
            <Image src={map} alt="image" width={"100%"} height={"100%"} />
          </div>
        </div>
      </div>

      <Popular />
      <div className="mb-[100px]"></div>
    </div>
  );
}

export default PaymentAndDelivery;
