import React from "react";

type infoItem = {
  title: string;
  redirect: string;
  active: boolean;
};

type itemsMenu = {
  opcoes: infoItem[];
};

const Menu = ({ opcoes }: itemsMenu) => {
  // console.log(opcoes[0].);

  return (
    <div className="flex gap-[18px] ">
      {opcoes.map((opcao, key) => (
        <div key={key}>
          <a href={opcao.redirect}>
            <p
              className={`transition ease-in delay-75 hover:text-lime cursor-pointer text-[17px] ${
                opcao.active
                  ? "text-lime underline underline-offset-4"
                  : "text-white"
              }`}
            >
              {opcao.title}
            </p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Menu;
