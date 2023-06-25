import React from 'react'
import {RiSendPlaneFill} from 'react-icons/ri'

export default function ContactForm() {
  const Input = ({type, className='',placeholder}:any) => {
    return (
      <label className='col-span-3 md:col-span-6'>
        
        <input type={type} placeholder={placeholder} className={`${className} mb-1 w-full p-2 border border-[#dadada]  rounded-lg`} />
      </label>
    )
  }

  return (
    <div className="bg-light text-dark h-96 md:h-auto p-10 rounded-2xl w-full m-auto text-center flex flex-col justify-center shadow-sm">
        <div className='w-full'>
          <h1 className='text-2xl text-dark font-bold mb-3'>Let's Talk!</h1>
          <form action="" method="post" className='grid grid-cols-6 gap-2'>
            <Input type='text' placeholder='Name'/>
            <Input type='email' placeholder='Email'/>
            <textarea name="" id="" placeholder='How may I help you?' rows={5} className='w-full p-2 border border-[#dadada] col-span-6 rounded-lg'/>

            <button type="submit" className='p-2 bg-dark text-light col-span-1 sm:col-span-3 flex font-medium items-center justify-center rounded-lg'>Send!<RiSendPlaneFill size={20}/></button>
          </form>
        </div>
    </div>
  )
}

