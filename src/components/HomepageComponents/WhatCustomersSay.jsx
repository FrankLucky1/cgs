import NextAndBackButton from "@/Utility/NextAndBackButton";
import ReviewCard from "@/Utility/ReviewCard";
import React from "react";

const WhatCustomersSay = () => {
  return (
    <div className="bg-[#669688] md:h-[588px] w-full flex max-sm:flex-col items-center justify-center md:justify-start md:pl-[44px] overflow-auto">
      <div className="flex flex-col gap-[32px] md:mr-[86px] w-[365px] h-[348px] justify-center items-start text-white">
        <h1 className="text-[44px] font-bold leading-[42.33px]">What Our <br /> Customers <br /> are Saying</h1>
        <p>Twimva Auto Lakkent experts step in when things come up.</p>
        <NextAndBackButton color={"white"}/>
      </div>
      <div className="flex items-center max-sm:px-10 justify-start no-scrollbar h-[400px] gap-8 w-full overflow-x-auto overflow-y-hidden">
      <ReviewCard/>
      <ReviewCard/>
      <ReviewCard/>
      <ReviewCard/>
      <ReviewCard/>

      </div>
    </div>
  );
};

export default WhatCustomersSay;
