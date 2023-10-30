import Mybutton from "../button/button"
import { offerCollection } from "@/utils/offerCollection"
import { Offer } from "./type"

export default function Offer() {
  return (
    <div className="w-[100%] mb-[20rem] flex justify-center text-txt-color">
       <div className="w-[65%]">
       <div className="text-center ">
            Offer
        </div>
        <div className='flex  bg-main-color w-[100%]'>
            {
                offerCollection?.map((offer:Offer,key)=>(
                    <div className='relative bg-main-color w-[33.3%]' key={key}>
                <div className='w-[100%] h-[16rem] bg-cover'
                style={{
                    backgroundImage:`linear-gradient(to bottom,#0101018a,#0101018a), url(${offer.offerImage.src})`
                   }}
                   > 
                </div>
                <div className='w-[90%] bg-main-color p-7 border absolute top-[14.5rem]'>
                    <div className='offerTitle text-[19px] mb-[1rem]'>
                        <h3>{offer.offerTitle}</h3>
                    </div>
                    <div>
                        <p className='offerTitle text-[16.5px] mb-[1rem]'>
                        {offer.offerDescription}
                        </p>
                    </div>
                    <div className='offerTitle flex justify-center'>
                        <Mybutton bDetail={offer.offerBtnlink} showIcon={true}/>
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
