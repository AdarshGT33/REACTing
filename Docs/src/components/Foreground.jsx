import React, { useRef } from 'react'
import Cards from './Cards'

function Foreground() {

  const ref = useRef(null);

  const data = [
    {
      desc: "Shri Krishna Govind Hare Murari He Nath Narayan Vasudeva, Ek Matra Swami Sakha Hamare, He Nath Narayan Vasudeva.",
      fileSize: "1MB",
      close: false,
      tag: {
        isOpen: true,
        desc: "Dowloading",
        color: "blue"
      }
    },
    {
      desc: "Shri Krishna Govind Hare Murari He Nath Narayan Vasudeva, Ek Matra Swami Sakha Hamare, He Nath Narayan Vasudeva.",
      fileSize: "1MB",
      close: false,
      tag: {
        isOpen: true,
        desc: "Dowload Complete",
        color: "green"
      }
    },
    {
      desc: "Shri Krishna Govind Hare Murari He Nath Narayan Vasudeva, Ek Matra Swami Sakha Hamare, He Nath Narayan Vasudeva.",
      fileSize: "1MB",
      close: false,
      tag: {
        isOpen: true,
        desc: "Dowload Complete",
        color: "green"
      }
    }
  ];
  return (
    <>
    <div ref={ref} className='fixed z-[3] top-0 left-0 p-5 w-full h-screen flex gap-5 flex-wrap'>
        {data.map((item, index) => (
          <Cards data={item} reference={ref} />
        ))}
    </div>
    </>
  )
}

export default Foreground