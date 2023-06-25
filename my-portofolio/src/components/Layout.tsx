import React from 'react'
import TopIcon from './TopIcon'

export default function Layout({children,className=''}:any) {
  return (
    <div className=' py-5 px-20 md:px-15 sm:px-10'>
        {children}

    </div>
  )
}
