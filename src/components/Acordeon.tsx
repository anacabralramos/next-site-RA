// import { Accordion } from "@mui/material";
import { Button } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const Acordeon = () => {
  return (
    <div>
      <button className="flex cursor-pointer w-max text-white transition ease-in delay-75 hover:text-lime group ">
        <h1>Acessibilidade </h1>
        <div className="inline-block align-baseline">
          <ArrowDropDownIcon className="transform group-hover:rotate-180 transition duration-300" />
        </div>
      </button>
    </div>
  );
};

export default Acordeon;
