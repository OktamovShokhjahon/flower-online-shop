import {
  Balloon,
  Category,
  Hero,
  Info,
  Info2,
  NewFlowers,
  OnlineVitrina,
  Popular,
  Stock,
} from "./_components";

const Home = () => {
  return (
    <div className="laptop:w-[1636px] mx-auto w-[94%] space-y-[30px] xs:space-y-[50px] lg:space-y-[100px] pb-[100px] pt-[50px]">
      <Hero />
      <Category />
      <Info />
      <OnlineVitrina />
      <NewFlowers />
      <Info2 />
      <Stock />
      <Popular />
      <Balloon />
    </div>
  );
};

export default Home;
