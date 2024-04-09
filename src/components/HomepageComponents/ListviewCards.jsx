import Card from '@/Utility/Card'
import NextAndBackButton from '@/Utility/NextAndBackButton'
import React from 'react'

const ListviewCards = ({title}) => {
  return (
    <div className="w-full px-5 md:px-[68px] flex flex-col gap-[25px] h-[577.55px]">
    <div className="flex items-center justify-between ">
      <h1 className="text-3xl md:text-[44px] text-[#4B5563] font-bold">
        {title}
      </h1>
     <NextAndBackButton color={"black"}/>
    </div>
    <div className="flex gap-[40px] items-center justify-between overflow-auto no-scrollbar">

    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    </div>
  </div>
  )
}

export default ListviewCards