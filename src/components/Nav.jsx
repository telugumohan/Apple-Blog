import React from "react";
import { apple } from "../assets/images/index";
import { navLinks } from "../constants";
import { cart, menu, search } from "../assets/icons";

const Nav = () => {
  return (
    <header className="absolute w-full max-container">
      <nav className="flex max-lg:justify-between px-8 justify-center items-center gap-8 p-4">
        <img src={apple} alt="apple png" width={16} height={16} />
        <ul className="flex justify-center items-center gap-8 max-lg:hidden">
          {navLinks.map((navLink) => (
            <li
              key={navLink.label}
              className="text-[12px] text-gray-600 font-montserrat "
            >
              <a href={navLink.href}>{navLink.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center gap-8">
          <img
            src={search}
            alt="search"
            height={20}
            width={20}
            className="cursor-pointer"
          />
          <img
            src={cart}
            alt="search"
            height={20}
            width={20}
            className="cursor-pointer"
          />
          <img
            src={menu}
            alt="search"
            height={20}
            width={20}
            className="hidden max-lg:block cursor-pointer"
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
