import {MdOutlineMailOutline,} from 'react-icons/md'
import { FiPhone } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import Image from "next/image";
import {  casaBlue} from '@/assets'
import Emailregistration from '@/components/emailSubcription'
export default function Footer() {
  return (
    <div className="bg-[#eee] p-[2rem] pb-[1rem] text-[#686a6e]">
        <div className="flex justify-between items-start pb-[0.8rem] text-[#122339] border-b-[0.1rem] border-[#122339]">
        <div className='flex flex-col items-center  justify-center'>
           <div>
            <Image src={casaBlue} alt='logo' className='w-[4.4rem] h-[4.4rem]'/>
          </div>
          <div>
            <p className='text-[1.3rem] font-medium'>LaCasaPreciosa</p>
          </div>
        </div> 
          <div>

            <div>
              <h1 className='text-[1.3rem] pb-[0.6rem]'>Our contact</h1>
            </div>

            <div className="flex justify-start gap-[0.4rem] pb-[0.4rem] items-center">
              <div>
              <MdOutlineMailOutline className='text-[1.3rem] text-[#686a6e]'/>
              </div>
              <div className='text-[#686a6e]'>
              <p>lacasapresciosa@gmail.com</p>
              </div>
            </div>

            <div className="flex justify-start gap-[0.4rem] pb-[0.4rem] items-center">
              <div>
              <FiPhone className='text-[1.3rem] text-[#686a6e]'/>
              </div>
              <div className='text-[#686a6e]'>
              <p>+250 78 53 10 691</p>
              </div>
            </div>

            <div className="flex justify-start gap-[0.4rem] pb-[0.4rem] items-center">
              <div>
              <SlLocationPin className='text-[1.3rem] text-[#122339]'/>
              </div>
              <div className='text-[#686a6e]'>
              <p>lacasapresciosa@gmail.com</p>
              </div>
            </div>
          
          </div>

          <div>

            <div>
              <h1 className='text-[1.3rem] pb-[0.6rem]'>Navigation</h1>
            </div>

            <div className="flex justify-start items-center">
              <div className='text-[#686a6e]'>
              <p>Rooms & Suites</p>
              </div>
            </div>

            <div className="flex justify-start items-center">
              <div className='text-[#686a6e]'>
              <p>Restaurants & Bars</p>
              </div>
            </div>

            <div className="flex justify-start items-center">
              <div className='text-[#686a6e]'>
              <p>Spa & Fitness</p>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <div className='text-[#686a6e]'>
              <p>Families</p>
              </div>
            </div>
          
          </div>
          <div>
          <Emailregistration/>
          </div>
        </div>
        <div className='flex justify-start pt-[1rem] text-[#122339] text-[0.6rem]'>
          <p>© COPYRIGHT 2023. ALL RIGHTS RESERVED</p>
        </div>
    </div>
  )
}
