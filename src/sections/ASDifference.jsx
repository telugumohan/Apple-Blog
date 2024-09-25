import React from "react";
import { differences } from "../constants";
import DifferCard from "../components/DifferCard";

const ASDifference = () => {
  return (
    <section className="flex flex-col items-start justify-center gap-4 w-full max-container mt-8">
      <h2 className="max-md:text-2xl text-3xl leading-[32px] font-bold font-palanquin w-full">
        <span className="inline-block text-black">
          The Apple Store difference.{" "}
        </span>
        <span className="text-slate-gray">
          {" "}
          Even more reasons to shop with us.
        </span>
      </h2>
      <div className="w-full overflow-x-scroll whitespace-nowrap no-scrollbar ">
        <div className="flex items-start justify-start gap-4 mt-2 flex-nowrap">
          {differences.map((diff) => (
            <div key={diff.mainText} className="m-1 rounded-2xl">
              <DifferCard diff={diff} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ASDifference;
