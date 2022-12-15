import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

interface FooterHome {
  span1: string;
  span2: string;
}

const Footer = ({ span1, span2 }: FooterHome) => {
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
          <p className="text-white">{span1}</p>
          <p className="text-matter">{span2}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
