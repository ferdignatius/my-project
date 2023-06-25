import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <div className="bg-gradient-to-r from-dark to-dark/80 text-light h-72 lg:h-96 md:h-auto p-10 rounded-2xl w-full m-auto text-center flex flex-col items-center shadow-sm ">
      <h1 className='text-xl font-bold mb-2'>Biography</h1>
      <p className='text-sm w-full tracking-wide leading-relaxed'>I from Tangerang, Banten, with a strong passion for becoming a <b>Software Engineer</b>. Currently pursuing my education at <b>Binus University</b>, I'm actively immersing himself in programming courses and projects to enhance my skills and knowledge.</p>
    </div>
  )
}
