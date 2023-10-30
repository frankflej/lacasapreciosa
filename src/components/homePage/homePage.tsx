import {CgMenu} from 'react-icons/cg'
import Mybutton from '@/components/button/button'
import Image from "next/image";
import { lacasa,background } from '@/assets'
export default function Homepage() {
  return (
    <div className='h-screen flex flex-col gap-[20%] pt-[1.5rem] px-[2.8rem] bg-cover '
    style={{
        backgroundImage: `linear-gradient(to bottom,#0101018a,#0101018a), url(${background.src})`,
      }}>
      <header className='flex items-center justify-between'>
        <div>
          <CgMenu className='text-[2rem] ' />
        </div>

        <div className='flex flex-col items-center  justify-center'>
           <div>
            <Image src={lacasa} alt='logo' className='w-[4.4rem] h-[4.4rem]'/>
          </div>
          <div>
            <p className='text-[1.3rem] font-medium'>LaCasaPreciosa</p>
          </div>
        </div> 

        <Mybutton bDetail='Book' showIcon={false}/>

      </header>
      <main>
        <div className='text-center'>
          <div className='mb-[5rem] text-[2.5rem]'>
          <p>
            The hotel you check-in to <br/> tune out 
          </p>
          </div>

          <div className='flex justify-center'>
          <Mybutton bDetail='Book' showIcon={false}/>
          </div>
        </div>
      </main>
    </div>
  )
}
