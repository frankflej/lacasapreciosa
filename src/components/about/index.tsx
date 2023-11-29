import React from 'react'
import Mybutton from '../button/button'
import { background } from '@/assets'
import {BsArrowLeft,BsArrowRight} from 'react-icons/bs'
import { allAbouts } from '@/utils/aboutCollection'

export default function About() {
  return (
    <div>
       {
        allAbouts.map((about,index)=>(
            <div className={`w-[100%] flex align-center text-txt-color ${index%2==0?'justify-end':'justify-start'} h-[100vh]`} key={index}>
            <div className='bg-secondary-color  relative h-[85%] w-[65%]'>
                 <div className={`absolute ${index%2==0?'left-[-54%]':'right-[-53.5%]'} top-[12%] w-[75%] bg-slate-800 h-[80%] bg-cover`}
                  style={{
                     backgroundImage: `linear-gradient(to bottom,#0101018a,#0101018a), url(${background.src})`,
                   }}>
        <div className={`flex w-[100%] h-[100%] ${index%2==0?'justify-end':'justify-start'} items-end`}>
             <div className='flex gap-[0.1rem]'>
             <div className='flex items-center justify-center bg-[#fff] w-[5rem] h-[5rem]'>
                 <BsArrowLeft className='text-[#4fb4be] text-[2.8rem]'/>
             </div>
             <div className='flex items-center justify-center bg-[#fff] w-[5rem] h-[5rem]'>
                 <BsArrowRight className='text-[#4fb4be] text-[2.8rem]'/>
             </div>
             </div>
        </div>
                 </div>
                 <div className='w-[100%] h-[90%] flex  items-center justify-center '>
                     <div className='w-[50%]'>
                     <div id='aboutTitle' className='text-[2rem] pb-3'>
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

        {/* <div className='w-[100%] flex align-center justify-start h-[100vh]'>

           <div className='bg-slate-500 relative h-[85%] w-[65%]'>
    <div className='absolute right-[-53.5%] top-[12%] w-[75%] bg-slate-800 h-[80%] bg-cover'
    style={{
        backgroundImage: `linear-gradient(to bottom,#0101018a,#0101018a), url(${background.src})`,
      }}>
       <div className='flex w-[100%] h-[100%] justify-start items-end'>
            <div className='flex gap-[0.1rem]'>
            <div className='flex items-center justify-center bg-slate-300 w-[5rem] h-[5rem]'>
                <BsArrowLeft className='text-[2rem]'/>
            </div>
            <div className='flex items-center justify-center bg-slate-300 w-[5rem] h-[5rem]'>
                <BsArrowRight className='text-[2rem]'/>
            </div>
            </div>
       </div>
    </div>
    <div className='w-[100%] h-[90%] flex  items-center justify-center '>
        <div className='w-[50%]'>
        <div id='aboutTitle'>
    <h4>Rooms & Suites</h4>
    </div>
    <div id='aboutSubTitle'>
    <h5>Stylish rooms and suites on Londons South Bank</h5>
    </div>
    <div className='' id='aboutDetail'>
        <p>
        Perfect for all occasions, our range of contemporary rooms,
        suites and penthouses offer the perfect base from which to explore London.
        Whether you are here for an overnight stay, a city break, or a family
        staycation, we have something to suit.
        </p>
    </div>
    <div>
        <Mybutton bDetail='EXPLORE MORE'/>
    </div>
        </div>
    </div>
    

</div>
        </div> */}
    </div>
  )
}
