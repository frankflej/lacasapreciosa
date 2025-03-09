import React from "react";
import { BsArrowRight } from 'react-icons/bs';

interface Btn {
  bDetail: string;
  showIcon: boolean;
  className?: string;
  bgColor?: boolean
}

export default function Mybutton({ bDetail, showIcon, className }: Btn) {
  return (
    <button
      className={`flex items-center gap-2 px-6 py-3 text-white bg-[#c07b50] rounded-lg hover:bg-[#a36945] active:bg-[#8a573b] transition-all duration-150 ${className}`}
    >
      {bDetail}
      {showIcon && <BsArrowRight className='text-lg' />}
    </button>
  );
}