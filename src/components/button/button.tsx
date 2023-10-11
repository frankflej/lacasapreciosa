import React from "react";

interface Btn {
  bDetail: string;
}

export default function Mybutton({ bDetail }: Btn) {
  return (
    <div className='flex items-center justify-center'> 
      <button className="mx-4 text-[30px] text-slate-500">{bDetail}</button>
    </div>
  );
}
