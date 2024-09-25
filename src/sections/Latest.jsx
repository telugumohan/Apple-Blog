import React from "react";
import { latestProducts } from "../constants";
import LatestProductCard from "../components/LatestProductCard";

const Latest = () => {
  return (
    <section className="flex flex-col items-start justify-center gap-10 w-full max-container mt-8">
      <h2 className="max-md:text-2xl text-3xl leading-[32px] font-bold font-palanquin w-full">
        <span className="inline-block text-black">The latest. </span>
        <span className="text-slate-gray">
          {" "}
          Take a look at what’s new right now.
        </span>
      </h2>
      <div className="w-full overflow-x-scroll whitespace-nowrap no-scrollbar">
      <div className='flex items-start justify-start sm:gap-6 gap-4  flex-nowrap'>
        {latestProducts.map((offer) => (
          <div key={offer.title} className="max-sm:min-w-[312px] max-md:min-w-[340px] max-lg:min-w-[362px] lg:min-w-[400px]">
            <LatestProductCard offer={offer} />
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Latest;
