import React from "react";

const ProductDetailsCard = ({ product }) => {
  return (
    <div className="bg-white py-10 px-8 flex flex-col shadow-lg hover:shadow-3xl cursor-pointer rounded-2xl h-[520px]">
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={product.imgURL}
          alt={product.name}
          className="object-contain rounded-2xl w-full h-full"
        />
      </div>
      <div className="flex flex-col justify-start items-start w-full mt-12">
          <p className="text-red-600 text-[10px] font-bold capitalize font-montserrat">
            {product.type}
          </p>
          <p className="text-lg font-medium text-wrap mt-1">{product.name}</p>
          <p className="text-slate-gray mt-6">{product.priceText}</p>
        </div>
    </div>
  );
};

export default ProductDetailsCard;
