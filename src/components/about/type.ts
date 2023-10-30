import { StaticImageData } from 'next/image';
export interface About{
    aboutTitle:string,
    aboutDetail:string,
    aboutSubTitle?:string,
    aboutLink:string,
    aboutImage:StaticImageData[];
}