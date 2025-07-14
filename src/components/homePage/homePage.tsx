"use client";
import { CgClose, CgMenu } from 'react-icons/cg';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { negra, backgroundImages} from '@/assets';
import { SparklesCore } from '@/components/ui/sparkles';
import Link from 'next/link';
import { ResponsiveBackgroundImage } from '@/components/ui/ResponsiveBackgroundImage';
import BorderMagic from '@/components/button/button';
import { TextAnimate } from "@/components/magicui/text-animate";
const Mybutton = dynamic(() => import('@/components/button/button'), { ssr: false });

export default function Landingpage() {
  const [navOpen, setNavOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);


  // Handle clicks outside the nav menu
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node) && navOpen) {
        setNavOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navOpen]);

  return (
    <div className='relative h-screen font-serif text-white overflow-hidden'>
      {/* Responsive Background Image */}
      <ResponsiveBackgroundImage
        mobileImage={backgroundImages.mobile}
        tabletImage={backgroundImages.tablet}
        desktopImage={backgroundImages.desktop}
        alt="La Perla Negra Background"
        priority={true}
        enableSlideshow={false}
        slideInterval={4000} // Change image every 4 seconds
      />
      
      {/* Overlay Layer - You can customize the opacity and colors */}
      <div className='absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-black/40 to-black/20'></div>
      
      {/* Content Layer */}
      <div className='relative z-20 h-screen flex flex-col justify-between md:px-[3rem] px-[1rem] py-[1.5rem]'>
        {/* Header */}
        <header className='flex items-center justify-between'>
          <div className='flex items-center gap-[6rem]'>
            <CgMenu className='text-[2rem] md:hidden cursor-pointer' onClick={() => setNavOpen(!navOpen)} />
            <div>
              <Image src={negra} alt='negra' className='w-[5rem] h-[5rem] hidden md:block' width={200} height={200}/>
            </div>
          </div>

        </header>
        
        {/* Hero Section */}
        <div className='h-screen flex flex-col'>
          <main className='text-center flex flex-col items-center justify-center flex-1'>
            <div className='flex flex-col items-center gap-6'>
              <div className="relative w-full h-[25rem] flex flex-col items-center justify-center overflow-hidden rounded-md">
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
                  <p className='text-[4rem] md:text-[7rem] font-bold kalnia-font '>
                    <TextAnimate animation="blurInUp" by="character">La Perla Negra</TextAnimate></p>
                  <div className='flex items-center gap-2'>
                     
                    <p className='text-[1.1rem] md:text-[1.5rem]  '> <TextAnimate animation="blurInUp" by="character" once>≿━━༺</TextAnimate></p>
                    <p className='text-[1.1rem] md:text-[1.5rem]  '>  <p><TextAnimate animation="blurInUp" by="character" once>Where Tranquility Meets </TextAnimate></p> <p><TextAnimate animation="blurInUp" by="character" once>Endless Beauty</TextAnimate></p></p>
                    <p className='text-[1.1rem] md:text-[1.5rem]  '> <TextAnimate animation="blurInUp" by="character" once>≿━━༺</TextAnimate></p>
                  </div>
                    <div className='flex items-center gap-4 text-[0.8rem] pt-7 md:pt-[2rem]'>
                 <BorderMagic buttonDetail='BOOK A STAY' href='/booking'/>
          </div>
                </div>
              </div>
            </div>
          </main>
        </div>

        {/* Overlay when menu is open */}
        {navOpen && (
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300" 
            onClick={() => setNavOpen(false)}
          />
        )}

        {/* Mobile Navigation Menu */}
        <div 
          ref={navRef}
          className={`fixed top-0 left-0 h-full bg-[#000000ad] text-white p-6 w-[70%] z-50 transform transition-transform duration-300 ease-in-out ${navOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}
        >
          <nav className={`flex flex-col text-[0.8rem] gap-8`}>
            <div className='flex items-center justify-end gap-4 mb-4'>
              <CgClose className='text-[2rem] cursor-pointer' onClick={() => setNavOpen(false)} />
            </div>
            <Link href='/' className='hover:underline transition-all duration-300'>OVERVIEW</Link>
            <Link href='/room' className='hover:underline transition-all duration-300'>ROOMS & SUITES</Link>
            <Link href='/dinning' className='hover:underline transition-all duration-300'>DINING</Link>
            <Link href='/experience' className='hover:underline transition-all duration-150'>EXPERIENCES</Link>
            <Link href='/gallery' className='hover:underline transition-all duration-150'>GALLERY</Link>
            <Link href='/contact' className='hover:underline transition-all duration-150'>CONTACT</Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

