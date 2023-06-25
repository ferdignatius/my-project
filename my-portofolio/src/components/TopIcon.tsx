import React from 'react'
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
import Link from 'next/link'

export default function TopIcon() {
  return (
    <Link href={'/'} className='p-3 fixed bg-white rounded-full bottom-0 right-0 -translate-x-3/4 -translate-y-3/4 shadow-xl z-50 '>
        <AiOutlineLeft size={40} className='rotate-90'/>
    </Link>
  )
}
