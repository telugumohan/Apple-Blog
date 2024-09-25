import React from 'react'
import LatestProductCard from '../components/LatestProductCard'
import { newMaciPad } from '../assets/images'

const SpecialStore = () => {
  return (
    <section className="flex flex-col items-start justify-center gap-6 w-full max-container mt-8">
    <h2 className="max-md:text-2xl text-3xl leading-[32px] font-bold font-palanquin w-full">
      <span className="inline-block text-black">
      Special stores.  {" "}
      </span>
      <span className="text-slate-gray">
      {" "}
       Exclusive savings for students and educators.
      </span>
    </h2>
    <div className="w-full overflow-x-scroll whitespace-nowrap no-scrollbar ">
    <div className='flex items-start justify-start gap-4 mt-2 flex-nowrap'>
      <div className='max-sm:min-w-[312px] max-md:min-w-[340px] max-lg:min-w-[362px] lg:min-w-[428px] h-[520px]'>
        <LatestProductCard 
          offer={{
            type: "EDUCATION",
            imgURL: newMaciPad,
            title:"Buy a new Mac or iPad with education savings.1",
            info:"",
            textColor: "text-black"
          }} />
      </div>
    </div>
    </div>
  </section>
  )
}

export default SpecialStore
