import React from "react";
import iconCode from "../../public/code.png].png";
import iconProduct from "../../public/prod.png";
import iconDesign from "../../public/design.png";
import iconArrow from "../../public/arrow.png";
import iconLogo from "../../public/logoArrow.png";
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
    <div className="h-[200px] bg-white w-[445px] rounded-lg overflow-hidden">
      <div className="flex justify-between items-center pr-[30px] rounded-full h-[80px]">
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
          <Image className=" scale-125" src={iconArrow} alt="logo"></Image>
        </div>
      </div>
      <div className="h-[80px] w-full text-center">
        <p className="mr-[30px] ml-[30px]">
          {type === "CODE"
            ? "Área responsável por criar e executar as funcionalidades que desejamos em cada projeto."
            : type === "DESIGN"
            ? "Área responsável por planejar a experiência presente em cada produto digital."
            : "Área responsável por propor soluções e ir a fundo nas pesquisas para facilitar o dia a dia do usuário."}
        </p>
      </div>
      <div className="h-full bg-matter w-full pl-[27px]">
        <Image className="scale-[0.8]" src={iconLogo} alt="logo"></Image>
      </div>
    </div>
  );
};

export default CardAreas;
