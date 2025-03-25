import React, { useState, useRef } from "react";

const RangeSlider = () => {
  const [minValue, setMinValue] = useState(4000);
  const [maxValue, setMaxValue] = useState(18000);
  const minRange = 0;
  const maxRange = 50000;
  const sliderRef = useRef(null);

  const handleThumbMove = (event, thumb) => {
    if (!sliderRef.current) return;

    const sliderRect = sliderRef.current.getBoundingClientRect();
    const offsetX = event.clientX - sliderRect.left;
    const newValue = Math.round((offsetX / sliderRect.width) * maxRange);

    if (thumb === "min" && newValue >= minRange && newValue < maxValue - 100) {
      setMinValue(newValue);
    } else if (
      thumb === "max" &&
      newValue <= maxRange &&
      newValue > minValue + 100
    ) {
      setMaxValue(newValue);
    }
  };

  return (
    <div className="relative flex items-center w-full desktop:w-[400px] polo:w-[584px] mx-auto z-[4]">
      <div className="relative w-full desktop:mx-3" ref={sliderRef}>
        {/* Background Line */}
        <div className="absolute top-1/2 left-0 w-full h-[4px] bg-[#453C3C33]/20 transform -translate-y-1/2"></div>
        {/* Active Range */}
        <div
          className="absolute top-1/2 h-[4px] bg-black transform -translate-y-1/2"
          style={{
            left: `${((minValue - minRange) / (maxRange - minRange)) * 100}%`,
            right: `${
              100 - ((maxValue - minRange) / (maxRange - minRange)) * 100
            }%`,
          }}
        ></div>
        {/* Min Value Circle & Price */}
        <div
          className="absolute w-5 h-5 bg-white rounded-full border-[5px] z-[5] border-mainBlack shadow cursor-pointer"
          style={{
            left: `calc(${
              ((minValue - minRange) / (maxRange - minRange)) * 100
            }% - 10px)`,
            top: "50%",
            transform: "translateY(-50%)",
          }}
          onMouseDown={() => {
            document.onmousemove = (ev) => handleThumbMove(ev, "min");
            document.onmouseup = () =>
              (document.onmousemove = document.onmouseup = null);
          }}
        >
          <span className="absolute top-[-24px] break-words whitespace-nowrap left-1/2 transform -translate-x-1/2 text-sm font-semibold text-gray-700">
            {minValue} ₽
          </span>
        </div>
        {/* Max Value Circle & Price */}
        <div
          className="absolute w-5 h-5 bg-white rounded-full border-[5px] border-mainBlack shadow cursor-pointer"
          style={{
            left: `calc(${
              ((maxValue - minRange) / (maxRange - minRange)) * 100
            }% - 10px)`,
            top: "50%",
            transform: "translateY(-50%)",
          }}
          onMouseDown={() => {
            document.onmousemove = (ev) => handleThumbMove(ev, "max");
            document.onmouseup = () =>
              (document.onmousemove = document.onmouseup = null);
          }}
        >
          <span className="absolute top-[-24px] left-1/2 break-words whitespace-nowrap transform -translate-x-1/2 text-sm font-semibold text-gray-700">
            {maxValue} ₽
          </span>
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
