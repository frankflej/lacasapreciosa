import Mybutton from "../button/button"

interface intro{
    introTitle:string,
    introDetails:string,
    introBtn:string
}
export default function Introduction({introTitle,introDetails,introBtn}:intro) {
  return (
    <div className="text-center my-[6rem] flex justify-center w-full ">
        <div className="w-[70%]">
        <div className="my-[3rem] text-[2.3rem]">
            <p>{introTitle}</p>
        </div>
        <div className="mb-[3rem]">
            <p>{introDetails}</p>
        </div>
        <div className="mb-[3rem]">
            <Mybutton bDetail={introBtn}/>
        </div>
        </div>
    </div>
  )
}
