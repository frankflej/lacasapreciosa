import React from "react";
import {BsArrowRight} from 'react-icons/bs'

interface Btn {
  bDetail: string;
  bgColor?: boolean ;
}

export default function Mybutton({ bDetail,bgColor }: Btn) {
  return (
   <button
    className="px-5 py-3 text-white duration-150 bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-black active:bg-white active:text-black"
>
    {bDetail}
</button>
  );
}
