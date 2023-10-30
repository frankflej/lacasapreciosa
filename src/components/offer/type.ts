import { StaticImageData } from "next/image"

export interface Offer{
    offerImage:StaticImageData,
    offerTitle:string,
    offerDescription:string,
    offerBtnlink:string
}