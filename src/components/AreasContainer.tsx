import React, { useEffect, useState } from "react";

const AreasContainer = () => {
  useEffect(function mount() {
    const handleScroll = () => {
      var size =
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
      // console.log(window.pageYOffset);
      // var alturaAtual = document.getElementById("teste").offsetHeight;
      // console.log(size - 0.255);
      console.log(size);
      document.body.style.setProperty("--scroll", size.toString());
    };
    window.addEventListener("scroll", handleScroll);

    return function unMount() {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="relative">
      <div className="bg-lime h-[715px] flex card">
        <p className="text-[58px] ml-[180px] mt-[270px] font-semibold leading-[60px]">
          Tenha a liberdade de escolher onde atuar em qualquer momento da sua
          carreira.
        </p>
      </div>
      <div className="h-[715px] bg-[url('../../public/meio.png')] bg-cover w-[33.35%] ml-[33.35%] card">
        <div></div>
      </div>
      <div className=" h-[715px] w-[33.35%] card flex items-center">
        <div className=" bg-[url('../../public/left.png')] bg-cover bg-[center_bottom_50%] h-[600px] w-full"></div>
      </div>
      <div className=" h-[715px] w-[33.35%] card ml-[66.66%] flex items-center">
        <div className=" bg-[url('../../public/right.png')] bg-cover bg-[center_bottom_50%] h-[600px] w-full"></div>
      </div>
    </div>
  );
};

export default AreasContainer;
