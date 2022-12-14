import React from "react";

type itemsMenu = {
  opcoes: string[];
};

const Menu = ({ opcoes }: itemsMenu) => {
  return (
    <div className="flex gap-[18px]">
      {opcoes.map((opcao) => (
        <div>
          <p className="text-white transition ease-in delay-75 hover:text-lime cursor-pointer text-[17px]">
            {opcao}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Menu;
