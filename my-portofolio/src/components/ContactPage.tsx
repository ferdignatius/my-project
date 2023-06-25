import React from 'react'
import Link from 'next/link'
import { FaInstagram, FaFacebookSquare, FaLinkedin, FaGithub } from "react-icons/fa";
import {GrMail} from 'react-icons/gr'

export default function ContactPage() {
  return (
    <div className="bg-gradient-to-tr from-dark to-primary text-light h-96 md:h-auto p-10 rounded-2xl w-full m-auto text-center flex flex-col items-center justify-center shadow-sm" id='contact'>
        <div>
          <p>Tell Me Your Ideas, And Turn It To Masterpiece</p>
          
          <div className=' flex justify-center mt-1'>
              <Link 
              href="mailto:ferdignatius@gmail.com" 
              target='_blank' 
              className='p-1 m-2'><GrMail size={25}className='social-icon hover:text-primary duration-500 text-lg text-light'/></Link>
              <Link 
              href="https://www.instagram.com/ferdignatius/" 
              target='_blank' 
              className='p-1 m-2'><FaInstagram size={25}className='social-icon hover:text-primary duration-500 text-lg text-light'/></Link>
              <Link 
              href="https://www.facebook.com/ferdignatius" 
              className='p-1 m-2' target='_blank'><FaFacebookSquare size={25} className='social-icon hover:text-primary duration-500 text-lg text-light'/></Link>
              <Link href="https://www.linkedin.com/in/ferdinand-ignatius-surya/" className='p-1 m-2' target='_blank'><FaLinkedin size={25} className='social-icon hover:text-primary duration-500 text-lg text-light'/></Link>
              <Link href="https://github.com/Ferdignatius/" className='p-1 m-2' target='_blank'><FaGithub size={25}className='social-icon hover:text-primary duration-500 text-lg text-light '/></Link>
            </div>
        </div>
    </div>
  )
}
