import React from "react";
import {BsArrowRight} from 'react-icons/bs'

interface Btn {
  bDetail: string;
  showIcon: boolean;
  bgColor?: boolean ;
}

export default function Mybutton({ bDetail,showIcon,bgColor }: Btn) {
  return (
    <div> 
      <button className={`relative text-[13.5px] flex items-center ${bgColor?'bg-[#122339] font-light text-[12px] text-[#eee]':'bg-transparent hover:bg-[#4a97f649] border-white border-[2.5px]'}  gap-[0.5rem] rounded-[0.2rem] text-[#fff]  px-[1.5rem] uppercase py-[0.7rem] cursor duration-[0.5s]`}>
        {bDetail} <span>{showIcon?<BsArrowRight className='text-[1.5rem] text-[#4fb4be]'/>:''}</span>
      </button>
    </div>
  );
}
