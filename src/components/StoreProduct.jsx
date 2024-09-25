import React from 'react'

const StoreProduct = ({product}) => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 cursor-pointer'>
      <div className='min-w-30'>
        <img 
            src={product.imgURL}
            alt={product.name}
            height={120}
            width={120} />
      </div>
      <p className='font-medium text-md cursor-pointer'>{product.name}</p>
    </div>
  )
}

export default StoreProduct
