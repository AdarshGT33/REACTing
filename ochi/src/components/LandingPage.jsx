import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='structure mt-36  px-12'>
        {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
            return (
            <div className='masker'>
                <div className='w-fit flex items-baseline'>
                    {index === 1 && (<div className='w-[8.9vw] h-[5.7vw] rounded-md mr-[1vw] bg-green-300'></div>)}
                    <h1 className='uppercase font-medium  text-[8vw] tracking-tighter leading-[6.7vw] '>
                        {item}
                    </h1>
                </div>
            </div>
            );
        })}
        </div>
        <div className='border-t-[1px] border-zinc-200 mt-28 flex items-center  justify-between py-5 px-5 '>
            {["For public and private companies", "From the first pitch to IPO"].map((item,index) => 
            (<p className='text-md leading-none tracking-tighter'>
                {item}
            </p>
        ))}
        <div className='start'>
            <div className='border-[1px] border-zinc-100 uppercase font-light text-sm py-2 px-3 rounded-full'>Start the project</div>
        </div>
        <div className='w-9 h-9 border-[1px] border-zinc-100 rounded-full px-2 py-2 flex items-center justify-center'>
            <MdOutlineArrowOutward />
        </div>
        </div>
    </div>
  )
}

export default LandingPage