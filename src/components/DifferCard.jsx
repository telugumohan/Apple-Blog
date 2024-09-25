import React from 'react'

const DifferCard = ({diff}) => {
  return (
    <div className='flex flex-col justify-start items-start gap-5 rounded-2xl shadow-lg hover:shadow-3xl bg-white px-7 py-6 w-[320px] h-[240px]'>
      <div>
        <img 
            src={diff.iconURL}
            alt="iconURL"
            width={32}
            height={32} />
      </div>
      <p className='max-md:text-xl max-md:leading-[28px] text-2xl font-semibold font-montserrat text-wrap'>
        <span className={`${diff.mainTextColor}`}>{diff.mainText}</span>
        <span className={`${diff.extraTextColor}`}>{diff.extraText}</span>
      </p>
    </div>
  )
}

export default DifferCard
