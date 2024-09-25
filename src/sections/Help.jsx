import React from 'react'
import { helps } from '../constants'
import LatestProductCard from '../components/LatestProductCard'

const Help = () => {
  return (
    <section className="flex flex-col items-start justify-center gap-10 w-full max-container mt-8">
      <h2 className="max-md:text-2xl text-3xl leading-[32px] font-bold font-palanquin w-full">
        <span className="inline-block text-black">Help is here. </span>
        <span className="text-slate-gray">
          {" "}
          Whenever and however you need it.
        </span>
      </h2>
      <div className="w-full overflow-x-scroll whitespace-nowrap no-scrollbar ">
      <div className='flex items-start justify-start gap-4 flex-nowrap'>
        {helps.map((help) => (
          <div key={help.title} className="max-sm:min-w-[312px] max-md:min-w-[340px] max-lg:min-w-[362px] lg:min-w-[428px] h-[520px]">
            <LatestProductCard offer={help} />
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}

export default Help
