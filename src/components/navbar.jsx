import React, { useState } from "react";
import pic from "../../public/Profile.jpeg";
import { FiMenu } from "react-icons/fi";
import { IoCloseCircle } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const menuItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Experience",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto px-12 me:px-20 h-18 shadow-md fixed top-0 left-0 right-0 bg-black text-white z-40">
        <div className="flex justify-between items-center h-18 ">
          <div className="flex space-x-3 ">
            <img
              src={pic}
              className="h-12 w-12 rounded-full hover:scale-110 duration-200 cursor-pointer"
              alt=""
            />
            <a href="https://github.com/Fahad350" target="blank">
              <h1 className="font-semibold cursor-pointer text-xl hover:text-green-500 hover:scale-110 duration-300">
                Fahad Hashmi
              </h1>

              <p className="text-sm hover:text-blue-500 hover:scale-110 duration-300 ">
                Web Devloper
              </p>
            </a>
          </div>
          <div>
            <ul className="hidden md:flex space-x-8">
              {menuItems.map(({ id, text }) => (
                <li
                  className="hover:text-green-500 hover:scale-125 duration-300 cursor-pointer"
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div
              className="md:hidden hover:text-green-500"
              onClick={() => setMenu(!menu)}
            >
              {menu ? <IoCloseCircle size={24} /> : <FiMenu size={24} />}
            </div>
          </div>
        </div>
      </div>
      {menu && (
        <div>
          <ul className="md:hidden flex flex-col h-screen fixed top-0 left-0 text-white bg-black z-50 items-center justify-center space-y-4 text-xl">
            {menuItems.map(({ id, text }) => (
              <li
                className="hover:text-green-500 cursor-pointer font-semibold"
                key={id}
              >
                <Link
                  onClick={() => setMenu(false)}
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
