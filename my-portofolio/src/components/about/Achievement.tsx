"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Chess from '../../../public/images/achievement-removebg-preview.png' 
import {BsDashLg} from 'react-icons/bs'
import { FcBullish } from "react-icons/fc";
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'


export default function Achievement() {
    const slides = [
        {
            title : 'Experience',
            desc : 'All Is About How I Started' 
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
    <div className="bg-gradient-to-bl from-dark to-dark/90 rounded-2xl w-full text-center h-72  text-light shadow-sm">
        <div className='items-center justify-center flex flex-col w-full h-full'>
        {/* <div className='w-full h-full'>
            <Image src={Chess} alt='' className='m-auto w-3/4 h-full object-cover object-left opacity-50 '/>
        </div> */}
            {currentIndex == 0 ? < FcBullish size={50} /> : null}
            <h2 className='text-xl font-bold'>
                {slides[currentIndex].title}
            </h2>
            <p className='text-light/75 text-sm mt-2'>
                {slides[currentIndex].desc}
            </p>

        {/* toogle */}
        <div className='w-1/4 md:w-full h-1/2 md:h-1/3 absolute overflow-hidden z-10 flex'>
            <div className='w-1/2 h-full cursor-left'onClick={prevSlide}></div>
            <div className='w-1/2 h-full' onClick={nextSlide}></div>
        </div>

        {/* Dots */}
        <div className='absolute flex translate-y-24 justify-center p-1 cursor-pointer'>
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
    </div>
  )
}
