import React from 'react'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";


function DropdownBtn({children, open, toggle}) {
  return (
    <div onClick={toggle} className={`flex items-center rounded-lg w-fit shadow-xl bg-white p-2 cursor-pointer ${open ? 'border-2 border-cyan-400' : null}`}>
        {children}
        <span className='flex items-center justify-center ml-1 mt-1'>{open ? <FaChevronUp/> : <FaChevronDown />}</span>
    </div>
  )
}

export default DropdownBtn