"use client"
import React from 'react'
import Link from 'next/link';
import { FaInstagram, FaFacebookSquare, FaLinkedin, FaGithub } from "react-icons/fa";
import {GrMail} from 'react-icons/gr'

export default function Works() {
  return (
    <>
        <div className="bg-light p-10 rounded-2xl w-full text-center text-dark items-center justify-center flex flex-col shadow-sm" id='works'>
          <h1 className='text-sm mb-2 font-medium bg-primary text-light p-1'>Works</h1>
          <h2 className='text-base text-dark/75'>My Lastest Works</h2>
        </div>
    </>
  )
}
