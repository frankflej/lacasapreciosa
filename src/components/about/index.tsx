"use client"
import React, { useState } from 'react';
import Mybutton from '../button/button'
import { background } from '@/assets'
import {BsArrowLeft,BsArrowRight} from 'react-icons/bs'
import { allAbouts } from '@/utils/aboutCollection'


export default function About() {
    const [backgroundIndices, setBackgroundIndices] = useState(allAbouts.map(() => 0));

    const handleArrowClick = (direction:any, index:any) => {
      const newIndices = [...backgroundIndices];
      if (direction === 'left') {
        newIndices[index] = (newIndices[index] - 1 + allAbouts[index].aboutImage.length) % allAbouts[index].aboutImage.length;
      } else {
        newIndices[index] = (newIndices[index] + 1) % allAbouts[index].aboutImage.length;
      }
      setBackgroundIndices(newIndices);
    };
    
  return (
    <div>
       {
        allAbouts.map((about,index)=>(
            <div className={`w-[100%] flex align-center text-txt-color ${index%2==0?'justify-end':'justify-start'} h-[100vh]`} key={index}>
            <div className='bg-secondary-color  relative h-[85%] w-[65%]'>
                 <div className={`absolute  transition ease-in-out delay-150 duration-500  ${index%2==0?'left-[-54%]':'right-[-53.5%]'} top-[12%] w-[75%] bg-slate-800 h-[80%] bg-cover`}
                  style={{
                    backgroundImage: `linear-gradient(to bottom,#0101018a,#0101018a), url(${
                        about.aboutImage[backgroundIndices[index]].src})`,
                   }}>
         <div className={`flex w-[100%] h-[100%] ${index%2==0?'justify-end':'justify-start'} items-end`}>
             <div className='flex gap-[0.1rem]'>
             <div className='flex items-center justify-center bg-[rgb(255,255,255)] w-[2rem] h-[2rem]'>
                 <BsArrowLeft className='text-[#4fb4be] text-[1.5rem]' onClick={() => handleArrowClick('left', index)}/>
             </div>
             <div className='flex items-center justify-center bg-[#fff] w-[2rem] h-[2rem]' data-right={index} >
                 <BsArrowRight className='text-[#4fb4be] text-[1.5rem]' onClick={() => handleArrowClick('right', index)} />
             </div>
             </div>
        </div>
                 </div>
                 <div className='w-[100%] h-[90%] flex  items-center justify-center '>
                     <div className='w-[50%]'>
                     <div id='aboutTitle' className='text-[2rem] pb-3' >
                 <h3>{about.aboutTitle}</h3>
                 </div>
                 <div id='aboutSubTitle' className=''>
                 <h5>{about.aboutSubTitle}</h5>
                 </div>
                 <div className='text-[17px] pb-6' id='aboutDetail' >
                     <p>
                     {about.aboutDetail}
                     </p>
                 </div>
                 <div>
                     <Mybutton bDetail={'Explore more'} showIcon={true} bgColor={true}/>
                 </div>
                     </div>
                 </div>
            </div>
         </div>
        ))
       }
    </div>
  )
}
