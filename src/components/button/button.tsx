import React from "react";
import {BsArrowRight} from 'react-icons/bs'

interface Btn {
  bDetail: string;
  showIcon: boolean
}

export default function Mybutton({ bDetail,showIcon }: Btn) {
  return (
    <div> 
      <button className='relative text-[13.5px] flex items-center  gap-[0.5rem] rounded-[0.2rem] text-[#fff] border-white border-[2.5px] px-[1.5rem] uppercase py-[0.7rem] cursor hover:bg-[#0101019b] duration-[0.5s]'>
        {bDetail} <span>{showIcon?<BsArrowRight className='text-[1.5rem] text-[#4fb4be]'/>:''}</span>
      </button>
    </div>
  );
}
