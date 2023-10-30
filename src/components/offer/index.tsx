import Mybutton from "../button/button"
import { offerCollection } from "@/utils/offerCollection"
import { Offer } from "./type"

export default function Offer() {
  return (
    <div className="w-[100%] flex justify-center ">
       <div className="w-[72%]">
       <div className="text-center">
            Offer
        </div>
        <div className='flex  w-[100%]'>
            {
                offerCollection?.map((offer:Offer,key)=>(
                    <div className='relative w-[33.3%]' key={key}>
                <div className='w-[100%] h-[15rem] bg-cover'
                style={{
                    backgroundImage:`linear-gradient(to bottom,#0101018a,#0101018a), url(${offer.offerImage.src})`
                   }}
                   > 
                </div>
                <div className='w-[94%] bg-black p-8 absolute top-[13rem]'>
                    <div className='offerTitle'>
                        <h5>{offer.offerTitle}</h5>
                    </div>
                    <div>
                        <p className='offerTitle '>
                        {offer.offerDescription}
                         
                        </p>
                    </div>
                    <div className='offerTitle'>
                        <Mybutton bDetail={offer.offerBtnlink}/>
                    </div>
                </div>
            </div>
                ))
            }
        </div>
       </div>
    </div>
  )
}
