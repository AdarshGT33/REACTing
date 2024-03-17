import React from 'react'

function DropdownItems({children, onClick}) {
  return (
    <div onClick={onClick} className='w-full p-1 rounded-lg cursor-pointer hover:bg-sky-200'>{children}</div>
  )
}

export default DropdownItems