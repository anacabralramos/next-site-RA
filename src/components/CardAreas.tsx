import React from "react";
import iconCode from "../../public/code.png].png";
import iconProduct from "../../public/prod.png";
import iconDesign from "../../public/design.png";
import iconArrow from "../../public/arrow.png";
import iconLogo from "../../public/logoArrow.png";
import Image from "next/image";

type CardProps = {
  title: string;
  icon: string;
  description: string;
};

const CardAreas = ({ title, description, icon }: CardProps) => {
  return (
    <div className="h-[200px] bg-white w-[445px] rounded-lg overflow-hidden">
      <div className="flex justify-between items-center pr-[30px] rounded-full h-[80px]">
        <div className="flex items-center">
          <img src={`${icon}`} className="scale-50" alt="" />
          <h1 className="text-xl font-semibold">{title}</h1>
        </div>
        <div>
          <Image className=" scale-125" src={iconArrow} alt="logo"></Image>
        </div>
      </div>
      <div className="h-[80px] w-full text-center">
        <p className="mr-[30px] ml-[30px]">{description}</p>
      </div>
      <div className="h-full bg-matter w-full pl-[27px]">
        <Image className="scale-[0.8]" src={iconLogo} alt="logo"></Image>
      </div>
    </div>
  );
};

export default CardAreas;
