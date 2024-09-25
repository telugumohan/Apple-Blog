import React, { useRef } from "react";
import { products, specialistAndFindStore } from "../constants";
import SpecialistFindStore from "../components/SpecialistFindStore";
import StoreProduct from "../components/StoreProduct";
import { chevronRight } from "../assets/icons";

const Store = () => {
  return (
    <section className="flex flex-col w-full max-container xl:gap-10 items-center justify-center pt-8">
      <div className="flex justify-between items-start w-full max-xl:flex-col gap-10">
        <h1 className="text-4xl font-bold font-palanquin xl:max-w-xl w-full max-md:text-3xl max-md:leading-[32px]">
          <span className="inline-block text-black">Store. </span>
          <span className="text-slate-gray">
            The best way to buy the products you love.
          </span>
        </h1>
        <div className="flex flex-col items-center gap-4 justify-between">
          {specialistAndFindStore.map((obj) => (
            <SpecialistFindStore key={obj.title} obj={obj} />
          ))}
        </div>
      </div>
      <div className="w-full relative">
        <div className="w-full mt-16 overflow-x-scroll whitespace-nowrap no-scrollbar">
          <div className="flex items-center justify-start gap-10 w-full flex-nowrap">
            {products.map((product) => (
              <div key={product.href} className="min-w-[120px]">
                <StoreProduct product={product} />
              </div>
            ))}
          </div>
        </div>
        <div
          className={`flex justify-center items-center bg-slate-300 rounded-full absolute -right-[8%] top-[50%] cursor-pointer z-10 max-xl:hidden`}
        >
          <img src={chevronRight} alt="chevon right" width={56} height={56} />
        </div>
      </div>
    </section>
  );
};

export default Store;
