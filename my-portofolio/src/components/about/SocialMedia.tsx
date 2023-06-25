"use client"
import React from 'react'
import Link from 'next/link';
import { FaInstagram, FaFacebookSquare, FaLinkedin, FaGithub } from "react-icons/fa";
import {GrMail} from 'react-icons/gr'

export default function SocialMedia() {
  return (
    <>
        {/* <div className='w-1/2 md:w-full lg:hidden md:flex'>
        <Image src={''} alt='' className='w-full h-auto'/>
        </div> */}
        <div className="bg-light p-10 rounded-2xl w-full text-center text-dark items-center justify-center flex flex-col shadow-sm" id='about'>
          <h1 className='text-sm mb-2 font-medium bg-primary text-light p-1'>About Me</h1>
          <h2 className='text-base font-bold '>Ferdinand Ignatius Surya</h2>
            <div className=' flex justify-center mt-1'>
              <Link 
              href="mailto:ferdignatius@gmail.com" 
              target='_blank' 
              className='p-1 m-2'><GrMail size={25}className='social-icon hover:text-primary duration-500 text-lg text-dark'/></Link>
              <Link 
              href="https://www.instagram.com/ferdignatius/" 
              target='_blank' 
              className='p-1 m-2'><FaInstagram size={25}className='social-icon hover:text-primary duration-500 text-lg text-dark'/></Link>
              <Link 
              href="https://www.facebook.com/ferdignatius" 
              className='p-1 m-2' target='_blank'><FaFacebookSquare size={25} className='social-icon hover:text-primary duration-500 text-lg text-dark'/></Link>
              <Link href="https://www.linkedin.com/in/ferdinand-ignatius-surya/" className='p-1 m-2' target='_blank'><FaLinkedin size={25} className='social-icon hover:text-primary duration-500 text-lg text-dark'/></Link>
              <Link href="https://github.com/Ferdignatius/" className='p-1 m-2' target='_blank'><FaGithub size={25}className='social-icon hover:text-primary duration-500 text-lg text-dark '/></Link>
            </div>
        </div>
    </>
  )
}
