import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div className='w-full py-20 rounded-tl-2xl rounded-tr-2xl bg-green-300'>
        <div className='border-t-2 border-b-2 border-black gap-10 overflow-hidden whitespace-nowrap flex'>
            <h1  className='text-black text-[23vw] -mb-1 -mt-9 leading-none tracking-tighter font-semibold  uppercase'>we are ochi</h1>
            <h1  className='text-black text-[23vw] -mb-1 -mt-9 leading-none tracking-tighter font-semibold  uppercase'>we are ochi</h1>
        </div>
    </div>
  )
}

export default Marquee