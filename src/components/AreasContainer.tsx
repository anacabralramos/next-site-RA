import React, { useEffect, useState } from "react";

const AreasContainer = () => {
  // window.addEventListener("scroll", () => {
  //     document.body.style.setProperty(
  //       "--scroll",

  //       window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
  //     );
  //   },
  //   false
  // );

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position =
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
    console.log(position);
    // qt rolada em pixels / tamanho em pixels do body - altura da janela em pixels
    setScrollPosition(position);

    document.body.style.setProperty("--scroll", scrollPosition.toString());
    document.body.style.setProperty("--back", "#706E64");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // console.log(scrollPosition);
  // console.log(scrollPosition);

  return (
    <div className="">
      <div className="bg-lime h-[715px] flex ">
        <p className="text-[58px] ml-[180px] mt-[270px] font-semibold leading-[60px]">
          Tenha a liberdade de escolher onde atuar em qualquer momento da sua
          carreira.
        </p>
      </div>
      <div className=" mt-[50px] ml-[50px] h-[50px] w-[50px] card"></div>
      <div className=" bg-coal h-[715px] flex w-full">
        <div className="bg-green-400 h-[715px] w-[33.35%]"></div>
        <div className="bg-red-400 h-[715px] w-[33.35%]"></div>
        <div className="bg-blue-400 h-[715px] w-[33.35%]"></div>
      </div>
    </div>
  );
};

export default AreasContainer;
