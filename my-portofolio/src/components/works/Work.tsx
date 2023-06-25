import React from 'react'
import Image from 'next/image'
import portofolio from '../../../public/images/portofolio.png'
import Link from 'next/link'
import {FaGithub} from 'react-icons/fa'

export default function Work() {

  const Project = ({type, link, githubLink, image, title, desc}:any) => {
    return(
      <>
        <div className="bg-light p-10 rounded-2xl w-full text-center text-dark items-center justify-center flex lg:flex-col shadow-sm overflow-hidden" >
        <div className='w-1/2 lg:w-full overflow-hidden rounded-3xl'>
          <Link href={link} target='_blank' >
              <Image src={image} alt={title} className='rounded-3xl w-full h-auto cursor-pointer hover:scale-110 duration-300'/>
          </Link>
        </div>
        
        <div className='flex flex-col justify-between items-start lg:items-center w-1/2 lg:w-full pl-6 lg:p-0'>
          <span className='text-sm text-light bg-dark p-1 font-medium md:text-sm'>{type}</span>

          <Link href={link} target='_blank' >
              <h2 className='text-4xl md:text-2xl text-dark font-bold hover:underline my-2'>{title}</h2>
          </Link>
          <p className='font-medium text-sm md:text-sm'>{desc}</p>

            <div className='flex text-sm items-center mt-5'>
                <Link href={githubLink} className='text-4xl md:text-3xl hover:text-dark/75 duration-300'><FaGithub/></Link>
                <Link href={link} target='_blank' className='md:text-sm ml-5 bg-dark text-light dark:bg-light dark:text-dark py-2 px-4 font-semibold rounded-md  border hover:drop-shadow-sm border-dark dark:border-light duration-300 group hover:bg-light hover:text-dark dark:hover:bg-dark dark:hover:text-light'>Visit Site</Link>
            </div>
        </div>
      </div>
      </>
    )
  }

  return (
    <>
    <div className='col-span-full'>
      <Project
       type={'Portfolio'}
       link={'/'}
       githubLink={'/'}
       image={portofolio}
       title={'Ferdinand Portfolio Website'}
       desc={'Unique Portfolio Website, develope by Ferdinand use Next.js'}
      />
    </div>
    <div className='col-span-full'>
      <Project
       type={'Portfolio'}
       link={'/'}
       githubLink={'/'}
       image={portofolio}
       title={'Ferdinand Portfolio Website'}
       desc={'Unique Portfolio Website, develope by Ferdinand use Next.js'}
      />
    </div>
    </>
  )
}
