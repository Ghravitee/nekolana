import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { RiTwitterXFill } from "react-icons/ri";
import { BiLogoTelegram } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className='flex justify-between items-center gap-4'>
        <Link href="/">
            <Image
            src="/Nekolana-logo.PNG"
            width={70}
            height={70}
            alt='Nekolana'
            className='rounded-full border-2 border-[#BE4DF7]'
            />
        </Link>
        <div className='flex gap-8'>
        <Link href=" https://t.me/nekolanasol" className="flex justify-center items-center">
          <BiLogoTelegram className='text-4xl text-[#BE4DF7]'/>
        </Link>
        <Link href="https://x.com/nekolana_sol" className="flex justify-center items-center">
          <RiTwitterXFill className='text-4xl text-[#BE4DF7]'/>
        </Link>
        </div>
    </div>
  )
}

export default Navbar