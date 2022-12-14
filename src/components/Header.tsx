import React from "react";
import Acordeon from "./Acordeon";
import Menu from "./Menu";

const Header = () => {
  return (
    <div className="h-[85px] w-screen flex justify-center items-end">
      <div className="flex items-end gap-[380px]">
        <img
          className="cursor-pointer w-[150px] h-[30px]"
          src="/logo2.png"
          alt="logo"
        />
        <Menu opcoes={["Home", "Áreas", "O Programa", "Projetos"]} />
        <Acordeon />
        {/* <div className="flex justify-between pt-3 w-[500px] text-lg"> */}
        {/* <div className="flex justify-between w-[270px] ">
          <Menu opcoes={["Sobre nós", "Sobre o programa"]} />
          </div>
         */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Header;
