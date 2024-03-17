import React from 'react'

function Background() {
  return (
    <>
    <div className='fixed z-[2] w-full h-screen'>
    <div className='absolute w-full py-5 font-semibold flex justify-center text-zinc-500'>Documents.</div>
    <h1 className='absolute text-9xl left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] text-zinc-950 '>Docs.</h1>
    </div>
    </>
  )
}

export default Background