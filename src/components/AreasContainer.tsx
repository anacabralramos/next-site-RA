import React, { useEffect, useState } from "react";
import CardAreas from "./CardAreas";

interface CardAtributes {
  title: string;
  Description: string;
  Background: string;
  Icon: string;
}
interface AreasProps {
  Span: string;
  LeftCard: CardAtributes;
  MiddleCard: CardAtributes;
  RightCard: CardAtributes;
}

const AreasContainer = ({
  Span,
  LeftCard,
  MiddleCard,
  RightCard,
}: AreasProps) => {
  // useEffect(function mount() {
  //   const handleScroll = () => {
  //     var size =
  //       window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
  //     // console.log(size);
  //     document.body.style.setProperty("--scroll", size.toString());
  //   };
  //   window.addEventListener("scroll", handleScroll);

  //   return function unMount() {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // });

  return (
    <div className="relative" id="areas">
      <div className="bg-lime h-[715px] flex card">
        <p className="text-[58px] ml-[180px] mt-[270px] font-semibold leading-[60px]">
          {Span}
        </p>
      </div>
      <div className="h-[715px] bg-[url('../../public/meio.png')] bg-cover w-[33.35%] ml-[33.35%] card flex justify-center items-center">
        <CardAreas
          title={MiddleCard.title}
          description={MiddleCard.Description}
          icon={MiddleCard.Icon}
        />
      </div>
      <div className=" h-[715px] w-[33.35%] card flex items-center ">
        <div className=" bg-[url('../../public/left.png')] bg-cover bg-[center_bottom_50%] h-[600px] w-full flex justify-center items-center pt-[200px]">
          <CardAreas
            title={LeftCard.title}
            description={LeftCard.Description}
            icon={LeftCard.Icon}
          />
        </div>
      </div>
      <div className=" h-[715px] w-[33.35%] card ml-[66.66%] flex items-center">
        <div className=" bg-[url('../../public/right.png')] bg-cover bg-[center_bottom_50%] h-[600px] w-full flex justify-center items-center pt-[200px]">
          <CardAreas
            title={RightCard.title}
            description={RightCard.Description}
            icon={RightCard.Icon}
          />
        </div>
      </div>
    </div>
  );
};

export default AreasContainer;
