import React from "react";

type CardProps = {
  text: string;
  size: "normal" | "small";
  pngName: string;
  top: number;
};

const CardAreas = ({ text, size, pngName = "meio", top }: CardProps) => {
  return (
    <div className="h-[600px] bg-white w-[445px]">
      {/* <div className={`bg-white w-[80%] h-[350px] `}>asdas</div> */}
      asdsdf
    </div>
  );
};

export default CardAreas;
