import React, { useState } from "react";
import logo from "../assets/portfolio-logo.png";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { navLinks } from "../constants/index";

const NavBar = () => {
  return (
    <nav className="mb-15 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <ul className="ml-3 sm:flex hidden justify-start items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`text-black cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="m-8 flex items-center justify-center gap-4 text-3xl">
        <a href="mailto:nick.l.dimartino@gmail.com" target="_blank">
          <MdEmail />
        </a>
        <a href="https://github.com/nickldimartino" target="_blank">
          <SiGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/nicholas-dimartino/"
          target="_blank"
        >
          <SiLinkedin />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
