"use client"
import React from 'react'
import { MdLocationOn } from "react-icons/md";

export default function HomePage() {
  return (
    <>
        <div className="bg-dark p-10 h-screen md:p-10 sm:p-5 rounded-2xl w-full text-center flex flex-col items-center justify-center shadow-sm">
        <h1 className='mb-5 text-7xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-light/40 to-light '>Hi! I'm Ferdinand</h1>
        <p className='text-base font-medium mb-2 flex items-center text-light/90'><MdLocationOn size={25}/>Banten, Indonesia</p>
        <p className='text-sm text-light/75'>I'm currently at BINUS University, where I'm learning experiences around finding and using new technology
        </p>
        </div>
    </>
  )
}
