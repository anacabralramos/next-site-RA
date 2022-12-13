import React from "react";
import iconCode from "../../public/code.png].png";
import iconProduct from "../../public/prod.png";
import iconDesign from "../../public/design.png";
import iconArrow from "../../public/arrow.png";
import Image from "next/image";

type CardProps = {
  text: string;
  size: "normal" | "small";
  pngName: string;
  top: number;
  type: "DESIGN" | "PRODUCT" | "CODE";
};

const CardAreas = ({ type, text, size, pngName = "meio", top }: CardProps) => {
  return (
    <div className="h-[200px] bg-white w-[445px] rounded-lg">
      <div className="flex justify-between items-center pr-[30px] rounded-full">
        <div className="flex items-center">
          <Image
            className="scale-50"
            src={
              type === "CODE"
                ? iconCode
                : type === "DESIGN"
                ? iconDesign
                : iconProduct
            }
            alt="logo"
          ></Image>
          <h1 className="text-xl font-semibold">{type}</h1>
        </div>
        <div>
          <Image
            className="fill-black scale-125"
            src={iconArrow}
            alt="logo"
          ></Image>
        </div>
      </div>
      <div className="h-[10px] w-[10px] bg-red-300"></div>
    </div>
  );
};

export default CardAreas;
