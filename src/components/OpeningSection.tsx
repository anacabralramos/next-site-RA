import React from "react";
import Header from "./Header";
import { Axios } from "axios";

const OpeningSection = () => {
  return (
    <div className=" bg-[url('../../public/background.jpg')] bg-cover bg-center  h-[77%]">
      <div className="absolute inset-0 bg-black bg-opacity-75 h-[77%] ">
        <Header />
        <div className="h-full w-full pl-[250px] pt-[80px] font-normal">
          <p className="align-middle mt-[100px] w-[700px] text-7xl text-lime">
            ¤Venha se tornar →→ um Rethinker®
          </p>
        </div>
      </div>
    </div>
  );
};

export default OpeningSection;
