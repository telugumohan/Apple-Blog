import React from 'react'
import LatestProductCard from '../components/LatestProductCard'
import { allMusic } from '../assets/images'
import { accessories, earAccs } from '../constants'
import ProductDetailsCard from '../components/ProductDetailsCard'

const LoudAndClear = () => {
  return (
    <section className="flex flex-col items-start justify-center gap-6 w-full max-container mt-8">
      <h2 className="max-md:text-2xl text-3xl leading-[32px] font-bold font-palanquin w-full">
        <span className="inline-block text-black">
        Loud and clear.{" "}
        </span>
        <span className="text-slate-gray">
        {" "}
        Unparalleled choices for rich, high-quality sound.
        </span>
      </h2>
      <div className="w-full overflow-x-scroll whitespace-nowrap no-scrollbar ">
      <div className='flex items-start justify-start gap-4 mt-2 flex-nowrap'>
        <div className='max-sm:min-w-[312px] max-md:min-w-[340px] max-lg:min-w-[362px] lg:min-w-[428px] h-[520px]'>
          <LatestProductCard 
            offer={{
              imgURL:allMusic,
              title:"Get 3 months of Apple Music free.",
              info:"Included with the purchase of selected Apple devices.⁺",
              textColor: "text-black"
            }} />
        </div>
        {earAccs.map((product) => (
          <div key={product.name} className="min-w-[320px] h-[528px]  bg-gray-100 rounded-2xl">
            <ProductDetailsCard product={product} />
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}

export default LoudAndClear
