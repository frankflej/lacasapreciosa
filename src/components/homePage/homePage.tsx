"use client";
import { CgMenu } from 'react-icons/cg';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { background, negra } from '@/assets';

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
  <div>
    <CgMenu className='text-[2rem] md:hidden' onClick={() => setNavOpen(!navOpen)} />
  </div>

  <nav className={`flex md:flex-row flex-col gap-6 text-md ${navOpen || 'md:flex hidden'}`}>
    <a href='#' className='hover:underline'>DESTINATIONS</a>
    <a href='#' className='hover:underline'>HOTELS</a>
    <a href='#' className='hover:underline'>DINING</a>
    <a href='#' className='hover:underline'>MORE</a>
  </nav>
  <div className='flex items-center gap-4'>
    <a href='#' className='text-md hover:underline'>LOGIN</a>
    <Mybutton bDetail='BOOK A STAY' showIcon={false} className='bg-[#c07b50] px-4 py-2 rounded-lg'/>
  </div>
</header>
      
      {/* Hero Section */}
      <div className='h-screen flex flex-col'>
  <main className='text-center flex flex-col items-center justify-center flex-1'>
    <div className='flex flex-col items-center'>
      <div>
        <Image src={negra} alt='logo' className='w-[4.4rem] h-[4.4rem]'/>

      </div>
      <div>
        <p className='text-[1.3rem] font-medium'>La Perla Negra</p>
      </div>
    </div>

    <div className='mb-[1rem] mt-12 text-[2.5rem] font-semibold'>
          <p>
            The hotel you check-in to <br/> tune out 
          </p>
          </div>
  </main>

  {/* Booking Options */}
  <div className='flex justify-center items-end p-4 md:p-6'>
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
</div>
</div>
    </div>
  );
}