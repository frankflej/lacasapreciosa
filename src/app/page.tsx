import {CgMenu} from 'react-icons/cg'
import Mybutton from '@/components/button/button'
import Image from 'next/image'
import { lacasa } from '@/assets'
export default function Hello() {
  return (
    <>
      <header className='flex items-center justify-between'>
        <div>
          <CgMenu/>
        </div>

        <div className='flex flex-col items-center justify-center'>
           <div>
            <Image src={lacasa} alt='logo' className='w-[3rem] h-[3rem]'/>
          </div>
          <div>
            <p className='text-[35px]'>LaCasaPreciosa</p>
          </div>
        </div> 

        <Mybutton bDetail='Book'/>

      </header>
    </>
  )
}
