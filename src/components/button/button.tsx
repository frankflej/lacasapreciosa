import React from "react";
import { ButtonsCard } from '@/components/ui/buttons'



export default function BorderMagic({buttonDetail, className}: {buttonDetail: string, className?: string}) {
const buttons = [
  {
    name: "Shimmer",
    description: "Shimmer button for your website",
    showDot: false,
    component: (
      <button className={`inline-flex py-2  px-2 md:px-6 md:py-3  animate-shimmer items-center justify-center rounded-md bg-[linear-gradient(110deg,rgba(255,255,255,0.1),45%,rgba(255,255,255,0.5),55%,rgba(255,255,255,0.1))] hover:bg-[linear-gradient(110deg,rgba(255,255,255,0.3),45%,rgba(255,255,255,0.7),55%,rgba(255,255,255,0.3))] bg-[length:200%_100%] font-medium text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${className}`}>
        {buttonDetail}
      </button>
    ),
  },
]
  return (
    <ButtonsCard>
      {buttons.map((button) => (
        <button key={button.name}>{button.component}</button>
      ))}
    </ButtonsCard>
  );
}