import React, { useState } from "react";
import { navLinks } from "../Details/InfoDetails";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [navShow, setNavShow] = useState(false);

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div className="">
        <h1 className="text-4xl font-signature ml-5">Amit Mali</h1>
      </div>
      <ul className="hidden md:flex">
        {navLinks.map(({ id, link,path }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium taxt-gray-500 hover:scale-105 duration-200"
          >
            <NavLink to={path} smooth duration={500}>
              {link}
            </NavLink>
          </li>
        ))}
      </ul>

      <div onClick={() => setNavShow(!navShow)} className="cursor-pointer pr-4 z-50 text-gray-500 md:hidden">

        {navShow ?<FaTimes size={30} /> :<FaBars size={30} /> }
        

      </div>

      { navShow &&  <ul className="flex flex-col justify-center items-baseline absolute top-5 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {navLinks.map(({ id, link, path }) => (
            <li
              key={id}
              className="px-10 cursor-pointer capitalize py-4 text-4xl"
              // onClick={(id) => alert(id)}
              onClick={() => setNavShow(!navShow)}
            >
              <NavLink to={path} smooth duration={500} >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
       
      }
    </div>
  );
};

export default Navbar;
