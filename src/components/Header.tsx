import Image from "next/image";
import Logo from "../../public/logo2.png";
import React, { useEffect, useState } from "react";
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
  const [style, setStyle] = useState("h-[144px]");
  useEffect(function mount() {
    const handleScroll = () => {
      var size =
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
      // console.log(size);
      // -0.97
      // if(size <= -0.97) setStyle()
      if (size > -0.97) {
        setStyle("h-[55px] backdrop-blur-sm bg-black bg-opacity-25");
        // document.body.style.setProperty("--scroll", "39px");
      } else setStyle("h-[144px]");
      // document.body.style.setProperty("--scroll", "85px");
    };
    window.addEventListener("scroll", handleScroll);

    return function unMount() {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      className={`fixed w-screen flex justify-center z-50 ${style}`}
      id="header"
    >
      <div className="flex items-center gap-[380px]">
        <div>
          <Image src={`${logo}`} alt="" width={150} height={140} />
        </div>
        <Menu
          opcoes={[
            {
              title: menu.Option,
              active: true,
              redirect: "#home",
            },
            {
              title: menu.Option2,
              active: false,
              redirect: "#areas",
            },
            {
              title: menu.Option3,
              active: false,
              redirect: "#areas",
            },
            {
              title: menu.Option4,
              active: false,
              redirect: "#areas",
            },
          ]}
        />
        <Acordeon
          Option={MenuAcordeon.Option}
          Option1={MenuAcordeon.Option1}
          Title={TitleAcordeon}
        />
      </div>
    </div>
  );
};

export default Header;
