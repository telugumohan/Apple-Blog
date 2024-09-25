import React from 'react'
import LatestProductCard from '../components/LatestProductCard'
import { exAllAccs, preAccs } from '../assets/images'
import { accessories } from '../constants'
import ProductDetailsCard from '../components/ProductDetailsCard'

const Accessories = () => {
  return (
    <section className="flex flex-col items-start justify-center gap-4 w-full max-container mt-8">
      <h2 className="max-md:text-2xl text-3xl leading-[32px] font-bold font-palanquin w-full">
        <span className="inline-block text-black">
        Accessories.{" "}
        </span>
        <span className="text-slate-gray">
        {" "}
        Essentials that pair perfectly with your favourite devices.
        </span>
      </h2>
      <div className="w-full overflow-x-scroll whitespace-nowrap no-scrollbar ">
      <div className='flex items-start justify-start gap-4 mt-2 flex-nowrap'>
        <div className='max-sm:min-w-[312px] max-md:min-w-[340px] max-lg:min-w-[362px] lg:min-w-[428px] h-[520px]'>
          <LatestProductCard 
            offer={{
              imgURL:preAccs,
              title:"In with the new.",
              info:"Your favourite accessories. Now available in bold new colours and with innovative new features.",
              textColor: "text-black"
            }} />
        </div>
        {accessories.map((product) => (
          <div key={product.name} className="min-w-[320px] h-[528px]  bg-gray-100 rounded-2xl">
            <ProductDetailsCard product={product} />
          </div>
        ))}
        <div className='max-sm:min-w-[312px] max-md:min-w-[340px] max-lg:min-w-[362px] lg:min-w-[428px] h-[520px]'>
          <LatestProductCard 
              offer={{
                imgURL:exAllAccs,
                title:"Explore all accessories.",
                textColor: "text-black"
              }} />
        </div>
      </div>
      </div>
    </section>
  )
}

export default Accessories
