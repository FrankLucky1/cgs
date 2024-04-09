import {
  AvailableInLocation,
  FAQ,
  Hero,
  ListviewCards,
  WhatCustomersSay,
} from "@/components/HomepageComponents";
import { Box, Title } from "@mantine/core";

export default function Home() {
  return (
    <div className="bg-white flex flex-col gap-[20px] lg:gap-[80px]">
      <Hero />
      <AvailableInLocation />
      <WhatCustomersSay />
      <ListviewCards title={"Best Deals"} />
      <ListviewCards title={"Recently Viewed"} />
      <div className="bg-[#F37A36] w-full flex flex-col py-[41px] items-center justify-center h-[234px]">
        <h1 className="text-[44px] text-[#fff] font-bold">Your Order</h1>
        <p className="text-base font-medium text-white mb-5">Log in to view your past orders and inventory</p>
        <button className="text-lg font-[700] text-[#403E5A] bg-[#fff] rounded-full px-10 py-5">
          Log in
        </button>
      </div>
      <FAQ />
    </div>
  );
}
