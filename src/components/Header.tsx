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
        <Menu
          opcoes={[
            {
              title: "Home",
              active: true,
              redirect: "",
            },
            {
              title: "Áreas",
              active: false,
              redirect: "",
            },
            {
              title: "O Programa",
              active: false,
              redirect: "",
            },
            {
              title: "Projetos",
              active: false,
              redirect: "",
            },
          ]}
        />
        <Acordeon />
      </div>
    </div>
  );
};

export default Header;
