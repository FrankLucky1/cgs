import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  applePay,
  logo,
  mastercard,
  mastercard2,
  paypal,
  visa,
} from "@/assets";


const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();

  const patners = [
    { photo: paypal },
    { photo: applePay },
    { photo: mastercard },
    { photo: mastercard2 },
    { photo: visa },
  ];
  return (
    <div className=" w-full h-full md:p-2 bg-[#FBF7F0]">
      <div className="flex flex-col gap-2 items-center mx-auto p-1">
        {/* top footer */}
        <div className="p-4 md:p-10 flex justify-between gap-12 w-full bg-white h-[258px] rounded-lg">
          <div className="md:w-[40%] lg:w-[60%] flex flex-col justify-between items-start">
            <span className="md:pr-[60px] text-black">
              <Image
                src={logo}
                width={115}
                height={42}
                alt="Picture of the author"
                className="w-auto max-sm:w-[55px]  h-auto"
              />{" "}
            </span>
            <span className="text-[7px] md:text-xs text-[#403E5A] ">© {year} CGS, Inc.</span>
          </div>

          <div className="md:w-[60%] lg:w-[40%] flex gap-3 justify-between items-start">
            <div className="">
              <h1 className="text-sm md:text-base mb-5 uppercase font-semibold text-[#403E5A]">
                Info
              </h1>

              <ul className="flex flex-col gap-5 text-xs font-medium">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className=" text-[#403E5A]">
              <h1 className="text-sm md:text-base mb-5 uppercase font-semibold ">
                Products
              </h1>

              <ul className="flex flex-col gap-5 text-xs font-medium">
                <li>Amana Ptac</li>
              </ul>
            </div>
            <div className="font-medium">
              <h1 className="text-sm md:text-base mb-5 uppercase font-semibold text-[#403E5A]">
                Contact
              </h1>
              <p className="text-xs text-[#403E5A] mb-5">
                14222 Reed Hartman Highway, <br />
                Cincinnati, Ohio 2532
              </p>
              <p className="text-xs text-[#403E5A] mb-5">(252) 745-9019</p>
            </div>
          </div>
        </div>

        {/* bottom footer */}
        <div className="p-5 flex justify-between items-center gap-12 w-full bg-white  rounded-lg">
          <span className="text-xs text-[#403E5A] ">@CGS</span>
          <div className="text-xs text-[#403E5A] flex gap-1">
            {patners.map(({photo})=>(
                <Image  
                key={photo} 
                src={photo}
                width={120}
                height={120}
                alt="Picture of the author"
                className="w-auto h-auto object-cover"
              />
              ))
            }
            </div>
          <span className="text-xs max-sm:hidden text-[#403E5A] ">Lorem Ipsum Donec</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
