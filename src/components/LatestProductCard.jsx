import React from "react";

const LatestProductCard = ({ offer }) => {
  return (
    <div className=" relative flex justify-center items-center shadow-lg cursor-pointer hover:shadow-3xl rounded-2xl bg-primary bg-card bg-cover bg-center w-full h-full">
      <img
        src={offer.imgURL}
        alt={offer.title}
        className="object-cover rounded-2xl w-full h-full"
      />
      <div className="absolute px-6 py-8 flex flex-col gap-2 items-start justify-start w-full top-0 left-0 cursor-pointer">
        {offer.type !== "" && (
          <p
            className={`text-[12px] font-montserrat ${
              offer.textColor === "white" ? "text-white" : "text-gray-500"
            } w-full text-wrap `}
          >
            {offer.type}
          </p>
        )}
        <h4
          className={`max-md:text-2xl text-3xl leading-[32px] font-palanquin font-bold ${
            offer.textColor === "white" ? "text-white" : "text-black"
          }  w-full text-wrap`}
        >
          {offer.title}
        </h4>
        {offer.subtitle !== "" && (
          <p
            className={`max-md:text-[18px] max-md:leading-5 text-xl ${
              offer.textColor === "white" ? "text-white" : "text-black"
            } font-montserrat font-semibold w-full text-wrap`}
          >
            {offer.subtitle}
          </p>
        )}
        {offer.info !== "" && (
          <p
            className={`max-md:text-[14px] max-md:leading-[18px] ${
              offer.textColor === "white" ? "text-white" : "text-slate-gray"
            } font-montserrat w-full text-wrap mt-2`}
          >
            {offer.info}
          </p>
        )}
        {offer.priceText !== "" && <p
          className={`text-lg ${
            offer.textColor === "white" ? "text-white" : "text-slate-gray"
          } font-montserrat mt-2 w-full text-wrap`}
        >
          {offer.priceText}
        </p>}
      </div>
    </div>
  );
};

export default LatestProductCard;
