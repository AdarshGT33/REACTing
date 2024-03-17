import { useState } from 'react'

function App() {
  const [color, setColor] = useState("pink");

  return (
    <>
      <div className='w-full h-screen'
      style={{backgroundColor:color}}
      >
        <div className='fixed flex flex-wrap justify-center left-12 inset-y-9 py-5'>
          <div className=' w-20 flex flex-wrap items-center justify-center bg-white p-2 rounded-lg'>
            <button  onClick={() => setColor("#14532d")} className= ' w-full h-14 px-3 py-2 rounded-full bg-green-900 text-white'>Green</button>
            <button onClick={() => setColor("#ef4444")} className='h-16 px-4 py-1 rounded-full bg-red-500 text-white'>Red</button>
            <button onClick={() => setColor("#8b5cf6")} className='h-16 px-3 py-2 rounded-full bg-violet-500 text-white'>Violet</button>
            <button onClick={() => setColor("#06b6d4")} className=' w-full h-16 px-3 py-2 rounded-full bg-cyan-500 text-white'>Cyan</button>
            <button onClick={() => setColor("#84cc16")} className=' w-full h-16 px-3 py-2 rounded-full bg-lime-500 text-white'>Lime</button>
            <button onClick={() => setColor("#7dd3fc")} className=' w-full h-16 px-3 py-2 rounded-full bg-sky-300 text-white'>Sky</button>
            <button onClick={() => setColor("#eab308")} className='h-16 px-3 py-2 rounded-full bg-yellow-500 text-white'>Yellow</button>
            <button onClick={() => setColor("#f97316")} className='h-16 px-3 py-2 rounded-full bg-orange-500 text-white'>Orange</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
