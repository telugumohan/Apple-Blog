import React from 'react'
import { experiences } from '../constants'
import LatestProductCard from '../components/LatestProductCard'

const AppleExperience = () => {
  return (
    <section className="flex flex-col items-start justify-center gap-6 w-full max-container mt-8">
      <h2 className="max-md:text-2xl text-3xl leading-[32px] font-bold font-palanquin w-full">
        <span className="inline-block text-black">The Apple experience. </span>
        <span className="text-slate-gray">
          {" "}
          Do even more with Apple products and services. 
        </span>
      </h2>
      <div className="w-full overflow-x-scroll whitespace-nowrap no-scrollbar ">
      <div className='flex items-start justify-start gap-4 mt-2 flex-nowrap'>
        {experiences.map((ex) => (
          <div key={ex.title} className="max-sm:min-w-[312px] max-md:min-w-[340px] max-lg:min-w-[362px] lg:min-w-[428px] h-[520px]">
            <LatestProductCard offer={ex} />
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}

export default AppleExperience
