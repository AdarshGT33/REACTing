import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-green-950 rounded-tl-2xl rounded-tr-2xl'>
        <h1 className='text-[3.7vw] leading-[3.9vw]'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
        <div className='w-full border-t-[1px] border-green-300 mt-10 flex'>
            <div className='mt-5 w-1/3'>
                <h4 className='font-light'>What you can expect: </h4>
            </div>
            <div className='mt-5 w-2/3 flex justify-between'>
                <div className='w-1/2 '>
                    <h4 className='text-[1.7vw] font-thin'>
                        We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.
                    </h4>
                    <h4 className='mt-20 text-[1.7vw] font-thin'>
                        We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
                    </h4>
                </div>
                <div className='w-1/2 relative'>
                    <div className='absolute bottom-[15%] right-[25%]'>
                    <h4>S:</h4>
                    <h4>Instagram</h4>
                    <h4>Facebook</h4>
                    <h4>Behance</h4>
                    <h4>LinkedIn</h4>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full flex border-t-[1px] py-5 border-green-300 mt-10'>
            <div className='w-1/2'>
                <h1 className='text-5xl'>Our approach:</h1>
                <button className='flex items-center justify-center uppercase font-medium gap-5 rounded-full py-4 px-8 mt-7 border-[1px] bg-zinc-200 text-black'>
                    Read More
                    <div className='w-3 h-3 bg-black rounded-full'></div>
                </button>
            </div>
            <div className='w-1/2 bg-[url("https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg")] bg-cover h-[60vh] rounded-lg'></div>
        </div>
    </div>
  )
}

export default About