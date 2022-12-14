import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className="bg-black h-[153px]">
      {/* <div className="h-[3px] w-full bg-coal"></div> */}
      <div className="h-[3px] w-full bg-product"></div>
      {/* <div className="h-[3px] w-full bg-matter"></div> */}
      <div className="pt-[20px] flex flex-col gap-7">
        <div className="flex justify-center">
          <a href="https://www.linkedin.com/company/rethinkdigitalco/mycompany/verification/">
            <LinkedInIcon className="fill-white cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/rethink.digital/?igshid=YmMyMTA2M2Y=">
            <InstagramIcon className="fill-white cursor-pointer" />
          </a>
        </div>
        <div className="flex justify-center flex-col items-center">
          <p className="text-white">Powered by Ana Clara Ramos</p>
          <p className="text-matter">@2017 Rethink Tecnologias</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
