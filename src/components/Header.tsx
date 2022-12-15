import Image from "next/image";
import Logo from "../../public/logo2.png";
import React from "react";
import Acordeon from "./Acordeon";
import Menu from "./Menu";

interface MenuAcordeon {
  Option: string;
  Option1: string;
}
interface Menu {
  Option: string;
  Option2: string;
  Option3: string;
  Option4: string;
}
interface HeaderProps {
  logo: string;
  menu: Menu;
  TitleAcordeon: string;
  MenuAcordeon: MenuAcordeon;
}

const Header = ({ logo, menu, TitleAcordeon, MenuAcordeon }: HeaderProps) => {
  console.log(menu);

  return (
    <div className="h-[85px] w-screen flex justify-center items-end">
      <div className="flex items-end gap-[380px]">
        <Image
          className="cursor-pointer w-[150px] h-[28px]"
          src={Logo}
          alt="logo"
        ></Image>
        <Menu
          opcoes={[
            {
              title: menu.Option,
              active: true,
              redirect: "",
            },
            {
              title: menu.Option2,
              active: false,
              redirect: "",
            },
            {
              title: menu.Option3,
              active: false,
              redirect: "",
            },
            {
              title: menu.Option4,
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
