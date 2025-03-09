import {CgMenu} from 'react-icons/cg'
import Mybutton from '@/components/button/button'
import Image from "next/image";
import { lacasa,background } from '@/assets'
export default function Homepage() {
  return (
    <div className='h-screen flex flex-col gap-[20%] pt-[1.5rem] px-[2.8rem] bg-cover font-sans'
    style={{
        backgroundImage: `linear-gradient(to bottom,#0101018a,#0101018a), url(${background.src})`,
      }}>
      
      <header className='flex items-center justify-between relative'>
        <div>
          <CgMenu className='text-[2rem] ' />
        </div>

        <div className='absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center'>
          <div>
            <Image src={lacasa} alt='logo' className='w-[4.4rem] h-[4.4rem]'/>
          </div>
          <div>
            <p className='text-[1.3rem] font-medium'>La Perla Negra</p>
          </div>
        </div>
        
        <div className='flex gap-[1rem]'>
          <Mybutton bDetail='Book'/>
          <Mybutton bDetail='Login' />
        </div>
      </header>
      <main>
        <div className='text-center'>
          <div className='mb-[5rem] text-[2.5rem] font-semibold'>
          <p>
            Where Tranquility Meets <br/> Endless Beauty
          </p>
          </div>

          <div className='flex justify-center gap-[1rem]'>
          <Mybutton bDetail='Book' />
        
          </div>
        </div>
      </main>
    </div>
  )
}
