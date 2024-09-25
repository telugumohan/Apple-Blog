import React from "react";
import Button from "../components/Button";
import { footerLeagalLinks, footerLinks, footerTexts } from "../constants";
import { apple } from "../assets/images";
import { chevronRight } from "../assets/icons";
import Dropdown from "../components/DropDown";
import FooterLinksComponent from "../components/FooterLinksComponent";
import FooterComponent from "../components/FooterLinksComponent";

const Footer = () => {
  return (
    <section className="flex flex-col justify-center items-start w-full max-container pb-[100px]">
      <h2 className="max-md:text-2xl leading-[32px] text-3xl font-bold font-palanquin w-full">
        Quick Links
      </h2>
      <div className="flex justify-start items-center gap-2 mt-6 mb-12 overflow-x-scroll w-full whitespace-nowrap no-scrollbar">
        {["Order Status", "Shopping Help", "Your Saves"].map((btn) => (
          <Button key={btn} label={btn} />
        ))}
      </div>
      <div className="flex flex-col w-full xl:px-[120px] gap-3">
        {footerTexts.map((footerText) => (
          <p
            key={footerText}
            className="text-[12px] leading-4 font-montserrat text-slate-gray"
          >
            {footerText}
          </p>
        ))}
        <hr className="border-slate-300 my-1" />
        <div className="flex justify-start items-center my-1">
          <img src={apple} alt="apple logo" width={24} height={24} />
          <img
            src={chevronRight}
            alt="chevron right icon"
            height={24}
            width={24}
          />
          <p className="text-[12px] leading-4 font-palanquin text-slate-gray">
            Apple Store Online
          </p>
        </div>
        <div className="hidden max-lg:block">
        <FooterLinksComponent footerLinks={footerLinks}/>
        </div>
        <div className="flex lg:flex-wrap items-start gap-4 flex-col  lg:h-[360px] mt-2 max-lg:hidden">
          {footerLinks.map((footerLink) => (
            <div key={footerLink.title} className="max-lg:w-full max-lg:border-b border-slate-gray max-lg:py-1 border-collapse">
              <div
                className="flex flex-col gap-3 items-start "
              >
                 <h6 className="text-[12px] leading-4 font-palanquin text-black font-medium">
                  {footerLink.title}
                </h6>
                <ul className="flex flex-col items-start gap-3">
                  {footerLink.items.map((item) => (
                    <li
                      key={item.href}
                      className="text-[12px] leading-4 font-montserrat text-slate-gray cursor-pointer hover:underline hover:text-black"
                    >
                      <a href={item.href}>{item.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <p className="text-[12px] leading-4 font-montserrat text-slate-gray mt-3">
          More ways to shop:{" "}
          <span className="text-blue-500 underline cursor-pointer">
            Find an Apple Store
          </span>{" "}
          or{" "}
          <span className="text-blue-500 underline cursor-pointer">
            other retailer
          </span>{" "}
          near you. Or call 000800 040 1966.
        </p>
        <hr className="border-slate-300 my-1" />
        <div className="flex max-lg:flex-col-reverse max-lg:items-start justify-between items-center w-full gap-4">
          <div className="flex-1 flex max-lg:flex-col max-lg:items-start lg:gap-10 gap-2 items-center">
            <p className="text-[12px] leading-4 font-montserrat text-slate-gray">
              Copyright &copy; 2023 Apple Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              {footerLeagalLinks.map((legalItem) => (
                <span
                  key={legalItem.href}
                  className="text-[12px] leading-4 font-montserrat text-slate-gray flex gap-2"
                >
                  <a
                    href={legalItem.href}
                    className="text-[12px] leading-4 font-montserrat text-slate-gray cursor-pointer hover:underline hover:text-black"
                  >
                    {legalItem.label}
                  </a>{" "}
                  |
                </span>
              ))}
            </div>
          </div>
          <a
            href="#india"
            className="text-[12px] leading-4 font-montserrat text-slate-gray cursor-pointer hover:underline"
          >
            India
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
