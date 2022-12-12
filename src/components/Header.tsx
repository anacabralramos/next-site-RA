import React from "react";
import Acordeon from "./Acordeon";

const Header = () => {
  return (
    <div className=" flex h-28 w-screen pt-20 px-[150px] justify-between text-white">
      <img className="cursor-pointer" src="/logo2.png" alt="logo" />
      <div className="flex justify-between pt-3 w-[500px] text-lg">
        <div className="flex justify-between w-[270px] ">
          <p className="cursor-pointer hover:text-lime">Sobre nós</p>
          <p className="cursor-pointer hover:text-lime">Sobre o programa</p>
        </div>
        <Acordeon />
        {/* <p className="cursor-pointer">Acessibilidade Seta</p> */}
      </div>
    </div>
  );
};

export default Header;
