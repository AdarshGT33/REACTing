import React from 'react'

function Button({bgColor, color, text, borderRadius, size}) {
  return (
    <button 
    type='button'
    style={{background: bgColor, color, borderRadius}}
    className={`text-${size}  p-3 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  )
}

export default Button