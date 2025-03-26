import CustomImage from "./image";

function SimpleFlowerCard({ image, name, id }) {
  return (
    <div>
      <div className="max-w-[325px] w-full">
        <CustomImage image={image} title={name} className1="rounded-[20px]" />
      </div>
      <p className="font-[500] text-[18px] font-montserrat text-[#453C3C]">
        {name}
      </p>
    </div>
  );
}

export default SimpleFlowerCard;
