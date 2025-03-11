import React from "react";
import { BsArrowRight } from 'react-icons/bs';
import { ButtonsCard } from '@/components/ui/buttons'

interface Btn {
  bDetail: string;
  showIcon: boolean;
  className?: string;
  bgColor?: boolean
}

// export default function Mybutton({ bDetail, showIcon, className }: Btn) {
//   return (
//     <button
//       className={`flex items-center gap-2 px-3 py-2 text-white bg-[#c07b50] rounded-md hover:bg-[#a36945] active:bg-[#8a573b] transition-all duration-150 ${className}`}
//     >
//       {bDetail}
//       {showIcon && <BsArrowRight className='text-lg' />}
//     </button>
//   );
// }
export default function BorderMagic({buttonDetail}: {buttonDetail: string}) {
const buttons = [
 {
    name: "Border Magic",
    description: "Border Magic button for your website",
    showDot: false,
    component: (
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[transparent] px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          {buttonDetail}
        </span>
      </button>
    ),
  },]
  return (
    <ButtonsCard>
      {buttons.map((button) => (
        <button key={button.name}>{button.component}</button>
      ))}
    </ButtonsCard>
  );
}
