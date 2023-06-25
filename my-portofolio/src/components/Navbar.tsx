'use client'

import React, {useState} from 'react'
import Link from 'next/link'
import {MdMenu, MdClose} from 'react-icons/md'



export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const CustomLink = ({link,text,className=''}:any) => {
    return(
      <li className={`p-2 mx-3 font-medium text-base hover:text-primary duration-300 ${className}`}>
        <Link href={link}>
          {text}
        </Link>
      </li>
    )
  }

  return (
    <nav className='flex justify-center md:justify-end w-full absolute top-7 '>
        <ul className='flex justify-around bg-[#e7e7e7] w-3/4 text-dark z-[99] rounded-full p-3 md:hidden'>
            <CustomLink link={'/'} text={'Home'} className='text-primary'/>
            <CustomLink link={'#about'} text={'About'}/>
            <CustomLink link={'#works'} text={'Works'}/>
            <CustomLink link={'#contact'} text={'Contact'}/>
        </ul>
        <div className='md:flex hidden fixed right-28 sm:right-14 rounded-full z-50' onClick={handleClick}>
          {
            isOpen ?
            <MdClose className='text-3xl transition-all duration-300 ease-out w-14 h-14 bg-[#e7e7e7] rounded-full p-3'/> :
            <MdMenu className='text-3xl bg-[#e7e7e7] rounded-full p-3 w-14 h-14'/> 
          }
        </div>

        {
          isOpen ?
            <ul className='flex flex-col items-center justify-around bg-[#e7e7e7]/75 sm:w-1/2 w-1/4 transition-[width] fixed top-24 right-24 sm:right-14 text-dark z-[99] rounded-2xl p-3'>
              <CustomLink link={'/'} text={'Home'}/>
              <CustomLink link={'#about'} text={'About'}/>
              <CustomLink link={'#works'} text={'Works'}/>
              <CustomLink link={'#contact'} text={'Contact'}/>
            </ul> : null
        }
    </nav>
  )
}
