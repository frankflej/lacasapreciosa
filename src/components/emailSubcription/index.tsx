'use client'
import { useForm, SubmitHandler } from "react-hook-form"
import {BsArrowRight} from 'react-icons/bs'

type Inputs = {
    registerEmail: string
}

export default function Emailregistration() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log('data',data)

 
  return (
    <div>
        <div className="mb-[0.8rem]">
            <h1>
            Sign up for our newsletter to receive<br/> special offers, & events.
            </h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} >
           
                <div  className="bg-[#ffff] flex justify-between items-center rounded-lg px-[0.3rem]">
                <div >
                <input {...register("registerEmail")} placeholder="Your email address" className="bg-slate-[800]  focus:outline-none py-[0.4rem] px-[0.6rem]"/>
                </div>

                <div>
                <button type="submit">
                <BsArrowRight className="text-[1.9rem] text-[#4fb4be] pt-[0.3rem]"/>
                </button>
                </div>
                </div>
                {errors.registerEmail && <span>This field is required</span>}
            
        </form>
    </div>
  )
}