import React from 'react'

const SpecialistFindStore = ({obj}) => {
  return (
    <div className='flex items-center justify-center gap-1'>
      <div className='flex items-center justify-center rounded-full w-11 h-11'>
        <img 
            src={obj.imgURL}
            alt={obj.title}
            width={28}
            height={28} />
      </div>
      <div className='flex flex-col gap-[2px]'>
        <p className='text-md'>{obj.title}</p>
        <a 
            href={obj.href}
            className='flex gap-2 items-center hover:underline underline-offset-2'>
                <p className='text-md text-blue-500'>{obj.linkText}</p>
                <img src={obj.iconURL} alt="icon" width={12} height={12} color='#3b82f6' />
        </a>
      </div>
    </div>
  )
}

export default SpecialistFindStore
