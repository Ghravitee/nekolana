"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import ClipboardJS from "clipboard";
import Link from 'next/link';
import { IoCopyOutline, IoCopySharp } from "react-icons/io5";
const Hero = () => {
    useEffect(() => {
        const clipboard = new ClipboardJS(".copy");
    
        return () => clipboard.destroy();
      }, []);
  return (
    <div className='flex flex-col justify-center items-center gap-8'>
      <h1 className='text-6xl md:text-[7rem] upercase londrina font-bold'>$Neko</h1>
      <p className='text-black text-3xl protest text-center'>the anime cat on solana</p>
      <Image 
      src="/Nekolana-hero.PNG"
      alt='Nekolana'
      width={300}
      height={300}
      className='border-4 border-black rounded-[4rem] md:w-[30rem] md:h-[30rem]'
      />

    
    <Link href="https://jup.ag/swap" className="dangle bg-black text-white text-3xl py-2 px-4 md:py-4 md:px-8 rounded-lg protest">
        BUY NOW
      </Link>

      <div className="flex">
      <p
        id="copy"
        className="text-black text-center text-2xl font-extrabold protest break-all"
      >
        CA: 0x000000000000000000000
      </p>
      <div className="p-2">
      <IoCopySharp
      data-clipboard-target="#copy"	
      className="copy"
      size={25}
      color='#FFFFFF'
      />
        
        
      </div>
    </div>
   
    </div>
  )
}

export default Hero