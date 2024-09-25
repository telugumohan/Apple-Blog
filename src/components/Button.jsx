import React from 'react'

const Button = ({label}) => {
  return (
    <button className='flex justify-center items-center bg-transparent border-slate-gray border text-slate-gray px-6 py-2 rounded-full text-sm text-nowrap'>
        {label}
    </button>
  )
}

export default Button
