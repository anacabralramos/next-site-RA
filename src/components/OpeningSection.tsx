import React from "react";
import Header from "./Header";

interface Menu {
  Option: string;
  Option2: string;
  Option3: string;
  Option4: string;
}
interface MenuAcordeon {
  Option: string;
  Option1: string;
}
interface OpeningSectionProps {
  title: string;
  background: string;
  logo: string;
  menu: Menu;
  TitleAcordeon: string;
  MenuAcordeon: MenuAcordeon;
}

export default function OpeningSection({
  title,
  background,
  logo,
  menu,
  TitleAcordeon,
  MenuAcordeon,
}: OpeningSectionProps) {
  var url = `url('${background}')`;
  return (
    <div
      className="bg-cover bg-center  h-[77%]"
      style={{
        backgroundImage: url,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-75 h-[77%] ">
        <Header
          logo={logo}
          menu={menu}
          TitleAcordeon={TitleAcordeon}
          MenuAcordeon={MenuAcordeon}
        />
        <div className="h-full w-full pl-[250px] pt-[80px] font-normal">
          <p className="align-middle mt-[100px] w-[700px] text-7xl text-lime">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}
