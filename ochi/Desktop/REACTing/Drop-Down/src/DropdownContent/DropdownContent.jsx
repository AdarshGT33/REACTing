import React from 'react'

function DropdownContent({children, open}) {
  return (
    <div className={`Dropd flex items-center justify-center bg-white rounded-lg shadow-xl flex-col overflow-y-scroll overflow-x-hidden max-h-80 p-1 mt-1 opacity-0 -translate-y-[5%] transition ease-in-out delay-125 pointer-events-none ${open ? 'opacity-100 translate-y-0 pointer-events-auto' : null} `}>
        {children}
    </div>
  )
}

export default DropdownContent