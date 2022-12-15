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
  var urlLeft = `url('${LeftCard.Background}')`;
  var urlMiddle = `url('${MiddleCard.Background}')`;
  var urlRight = `url('${RightCard.Background}')`;

  return (
    <div className="relative" id="areas">
      <div className="bg-lime h-[100vh] flex card items-center">
        <p className="text-[58px] ml-[180px] font-semibold leading-[60px]">
          {Span}
        </p>
      </div>
      <div
        style={{ backgroundImage: urlMiddle }}
        className="h-[100vh] bg-cover w-[33.33%] ml-[33.33%] card flex justify-center items-center"
      >
        <CardAreas
          title={MiddleCard.title}
          description={MiddleCard.Description}
          icon={MiddleCard.Icon}
        />
      </div>
      <div className=" h-[100vh] w-[33.33%] card flex items-center">
        <div
          style={{ backgroundImage: urlLeft }}
          className="bg-[100%] bg-cover h-[85%] w-full flex justify-center items-center pt-[200px]  overflow-hidden"
        >
          <CardAreas
            title={LeftCard.title}
            description={LeftCard.Description}
            icon={LeftCard.Icon}
          />
        </div>
      </div>
      <div className=" h-[100vh] w-[33.33%] card ml-[66.66%] flex items-center">
        <div
          style={{ backgroundImage: urlRight }}
          className="bg-[100%] bg-cover h-[85%] w-full flex justify-center items-center pt-[200px]"
        >
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
