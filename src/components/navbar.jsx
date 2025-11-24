import React, { useState } from "react";
import pic from "../../public/Profile.jpeg";
import { FiMenu } from "react-icons/fi";
import { IoCloseCircle } from "react-icons/io5";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const menuItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact" },
  ];

  const navbarVariant = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const menuItemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const mobileMenuVariant = {
    hidden: { x: "-100%" },
    visible: { x: 0, transition: { type: "spring", stiffness: 120 } },
    exit: { x: "-100%", transition: { type: "spring", stiffness: 120 } },
  };

  return (
    <>
      {/* Navbar */}
      <motion.div
        className="w-full bg-[url('/nav1.avif')] bg-cover bg-center px-12 md:px-20 h-18 shadow-md fixed top-0 left-0 right-0 
                   backdrop-blur-2xl bg-white/10 border-t border-white/20 text-black z-40  "
        initial="hidden"
        animate="visible"
        variants={navbarVariant}
      >
        <div className="flex justify-between items-center h-18">
          {/* Logo + Text */}
          <div className="flex space-x-3">
            <img
              src={pic}
              className="h-12 w-12 rounded-full hover:scale-110 duration-200 cursor-pointer"
              alt=""
            />
            <a
              href="https://github.com/Fahad350"
              target="_blank"
              rel="noreferrer"
            >
              <h1 className="font-semibold cursor-pointer text-xl hover:text-green-500 hover:scale-110 duration-300">
                Fahad Hashmi
              </h1>
              <p className="text-sm hover:text-blue-500 hover:scale-110 duration-300">
                Web Developer
              </p>
            </a>
          </div>

          {/* Desktop Menu */}
          <div>
            <motion.ul
              className="hidden md:flex space-x-8"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {menuItems.map(({ id, text }) => (
                <motion.li
                  key={id}
                  className="hover:text-green-500 hover:scale-125 duration-300 cursor-pointer"
                  variants={menuItemVariant}
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
                </motion.li>
              ))}
            </motion.ul>

            {/* Mobile Menu Button */}
            <div
              className="md:hidden hover:text-green-500 cursor-pointer"
              onClick={() => setMenu(!menu)}
            >
              {menu ? <IoCloseCircle size={24} /> : <FiMenu size={24} />}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menu && (
          <motion.ul
            className="md:hidden flex flex-col h-screen fixed top-0 left-0 w-64 px-6 py-12
                        backdrop-blur-md bg-white/60 text-black
 z-50 items-start space-y-6 text-xl"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariant}
          >
            {menuItems.map(({ id, text }) => (
              <motion.li
                key={id}
                className="hover:text-green-500 cursor-pointer font-semibold"
                variants={menuItemVariant}
              >
                <Link
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                  onClick={() => setMenu(false)} // auto-close
                >
                  {text}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
