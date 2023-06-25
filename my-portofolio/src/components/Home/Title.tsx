"use client"
import next from 'next/types'
import React, {useState} from 'react'
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
import { motion } from "framer-motion"
import { URL } from 'url'
import { BsDashLg } from 'react-icons/bs'



export default function Title() {
    const slides = [
        {
            title : 'BINUSIAN 2027',
            desc : 'Computer Science Student Of BINUS University' 
        },
        {
            title : 'Coming Soon...',
        },
    ]
    
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }
    
    const nextSlide = () => {    
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    const goToSlide = (x:any) => {
        setCurrentIndex(x)
    }

    return (
    <div className="bg-gradient-to-br from-primary to-dark text-light h-72 p-10 rounded-2xl w-full m-auto text-center flex flex-col items-center justify-center shadow-sm">
        <motion.h1
        className='text-lg font-bold'>{
            slides[currentIndex].title
        }</motion.h1>
        <p className='mt-2 text-sm text-light/80 overflow-hidden'>{slides[currentIndex].desc}</p>

        {/* toogle */}
        <div className='w-1/4 md:w-full h-1/2 md:h-1/3 absolute overflow-hidden z-10 flex'>
            <div className="w-1/2 h-full " onClick={prevSlide}></div>
            <div className='w-1/2 h-full cur'  onClick={nextSlide}></div>
        </div>

        {/* Dots */}
        <div className='flex translate-y-24 absolute justify-center py-4 cursor-pointer'>
            {
                slides.map((slide,slideIndex) => (
                    <div key={slideIndex} onClick={() => {
                        goToSlide(slideIndex)
                    }}>{ 
                        currentIndex === slideIndex? <BsDashLg size={30} className='text-light' /> : <BsDashLg size={30} className='text-light/50'  /> 
                    }
                    </div>
                ))
            }
        </div>
        </div>
  )
}
