import React from 'react'



export default function Skills() {
    
    const Skill = ({skill}:any) => {
        return (
        <div className='bg-[#E7E7E7] p-2 m-1 rounded-md'>
            <p className='text-sm'>{skill}</p>
        </div>
        )
    }

    return (
    <div className="bg-light text-dark h-72 lg:h-96 md:h-auto p-10 rounded-2xl w-full m-auto text-center flex flex-col items-center shadow-sm">
        <h2 className='font-bold text-xl'>Skills</h2>

        <span className='w-5 h-1 bg-dark my-2'></span>

        <div className='w-full flex flex-wrap justify-center'>
            <Skill skill={'HTML'} />
            <Skill skill={'CSS'} />
            <Skill skill={'Javascript'} />
            <Skill skill={'React.js'} />
            <Skill skill={'Next.js'} />
            <Skill skill={'PHP'} />
            <Skill skill={'Node.js'} />
            
        </div>
    </div>
  )
}
