import { Image } from "@mantine/core";
import { logo } from '@/assets';
// import Image from 'next/image'
import { IoMdHeartEmpty } from "react-icons/io";
import React from "react";

const Card = () => {
  return (
    <div className="flex flex-col gap-3 p-4 border border-[#F1F1F1] rounded-lg w-[296px] h-[451.55px]">
      <div className="w-[264px] h-[220px] bg-[#F6F6F6] relative flex items-center justify-center rounded-lg">
        
      <Image
      h={142}
      w={183.1}
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-10.png"
    />


        <span className="absolute right-[14px] top-[10px] p-1 border rounded-full border-[#E2E3E6]"><IoMdHeartEmpty className="border-[#E2E3E6]" /></span>
      </div>
      <div className="flex flex-col gap-[10px] items-start justify-center text-[#4B5563]">
      <p className="text-lg">Amana Ptec</p>
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-[5.5px] items-center justify-center">
        <span className="text-lg font-[700] text-[#4B5563]">$950</span>
        <span className="text-sm font-[700] text-[#6B72804D]/30 line-through">$1200</span>

        </div>
        <div>
          <span className="text-[14px]">4.7</span>
        </div>
      </div>
      <p className="text-[14px] text-[#737373] w-[249px]">Packaged Terminal Air <br /> Conditioner 9000 / 9000 BTU/h nominal capacity EER = 11.8 /</p>

      <button className="text-base font-[700] text-[#fff] bg-[#F36C21] rounded-[25px] w-full py-[7px]">Add to cart</button>
      </div>

    </div>
  );
};

export default Card;
