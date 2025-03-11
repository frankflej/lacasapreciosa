"use client";
import { CgMenu } from 'react-icons/cg';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { background, negra } from '@/assets';
import { SparklesCore } from '@/components/ui/sparkles';
import BorderMagic from '@/components/button/button';

const Mybutton = dynamic(() => import('@/components/button/button'), { ssr: false });

export default function Landingpage() {
  const [bgUrl, setBgUrl] = useState('');
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    setBgUrl(background.src);
  }, []);

  return (
    <div 
      className='h-screen flex flex-col justify-between px-[3rem] py-[1.5rem] bg-cover font-serif text-white'
      style={{ backgroundImage: bgUrl ? `linear-gradient(to bottom,#0101018a,#0101018a), url(${bgUrl})` : 'none' }}
    >
      {/* Header */}
      <header className='flex items-center justify-between'>
  <div className='flex items-center gap-[6rem]'>
    <CgMenu className='text-[2rem] md:hidden' onClick={() => setNavOpen(!navOpen)} />
      <div>
     <Image src={negra} alt='negra' className='w-[5rem] h-[5rem] hidden md:block'/>
</div>
  <nav className={`flex md:flex-row flex-col text-[0.8rem] gap-8 ${navOpen || 'md:flex hidden'}`}>
    <a href='#' className='hover:underline transition-all duration-300'>DESTINATIONS</a>
    <a href='#' className='hover:underline transition-all duration-300'>HOTELS</a>
    <a href='#' className='hover:underline transition-all duration-300'>DINING</a>
    <a href='#' className='hover:underline transition-all duration-150'>MORE</a>
  </nav>
  </div>


  <div className='flex items-center gap-4 text-[0.8rem]'>
    <a href='#' className=' hover:underline'>LOGIN</a>
    <BorderMagic buttonDetail='BOOK A STAY'/>
  
  </div>
</header>
      
      {/* Hero Section */}
      <div className='h-screen flex flex-col'>
  <main className='text-center flex flex-col items-center justify-center flex-1'>
    <div className='flex flex-col items-center gap-6'>
      
      
        <div className="relative w-full h-[20rem] flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className='flex flex-col items-center gap-2'>
         <p className='text-[5.5rem] font-bold kalnia-font'>La Perla Negra</p>
         <div className='flex items-center gap-2'>
          <p className='text-xs md:text-[1.5rem] mr-2 '>≿━━━━༺</p>
          <p className='text-xs md:text-[1.5rem]  '>Where Tranquility Meets Endless Beauty</p>
          <p className='text-xs md:text-[1.5rem] ml-2 '>≿━━━━༺</p>
         </div>
      </div>
    </div>
    </div>

  </main>

  {/* Booking Options */}
  {/* Charite dont delete we are going to use this when payment is implemented*/}
  {/* <div className='flex justify-center items-end p-4 md:p-6'>
  <div className='flex flex-wrap gap-4 bg-white text-black p-4 rounded-lg md:flex-nowrap'>
    <select className='p-2 border rounded-md w-full md:w-auto'>
      <option>Dates</option>
    </select>
    <select className='p-2 border rounded-md w-full md:w-auto'>
      <option>Rooms</option>
    </select>
    <select className='p-2 border rounded-md w-full md:w-auto'>
      <option>Adult/Children</option>
    </select>
    <Mybutton bDetail='BOOK A STAY' showIcon={false} className='bg-[#c07b50] px-4 py-2 rounded-lg w-full md:w-auto'/>
  </div>
</div> */}
</div>
    </div>
  );
}

