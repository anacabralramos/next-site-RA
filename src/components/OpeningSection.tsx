import React from "react";

interface OpeningSectionProps {
  title: string;
  background: string;
}

export default function OpeningSection({
  title,
  background,
}: OpeningSectionProps) {
  var url = `url('${background}')`;
  return (
    <div
      className="bg-cover bg-center h-[77%]"
      style={{
        backgroundImage: url,
      }}
    >
      <div className="absolute w-full bg-black bg-opacity-75 h-[77%] pl-[250px] pt-[10%] font-normal">
        <p className="align-middle mt-[100px] w-[700px] text-7xl text-lime">
          {title}
        </p>
      </div>
    </div>
  );
}
