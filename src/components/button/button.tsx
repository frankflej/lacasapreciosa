import React from "react";

interface Btn {
  bDetail: string;
}

export default function Mybutton({ bDetail }: Btn) {
  return (
    <div> 
      <button className='relative text-[13.5px] rounded-[0.2rem] border-white border-[2.5px] px-[2.5rem] uppercase py-[0.7rem] cursor hover:bg-[#0101019b] duration-[0.5s]'>
        {bDetail}
      </button>
    </div>
  );
}
