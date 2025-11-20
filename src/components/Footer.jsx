import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagramSquare,
} from "react-icons/fa";

function Footer() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const socialLinks = [
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/%20fahad-hashmi-959248248",
      color: "hover:text-blue-800",
    },
    {
      icon: FaGithub,
      link: "https://github.com/Fahad350",
      color: "hover:text-red-700",
    },
    {
      icon: FaFacebook,
      link: "https://www.facebook.com/",
      color: "hover:text-blue-800",
    },
    {
      icon: FaInstagramSquare,
      link: "https://www.instagram.com/",
      color: "hover:text-red-700",
    },
  ];

  return (
    <div name="Footer" className="bg-black text-center py-8 overflow-x-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-20">
        {/* Footer Heading */}
        <motion.h1
          className="font-bold text-3xl text-blue-400"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          Contact Platforms
        </motion.h1>

        {/* Social Icons */}
        <motion.ul
          className="flex flex-wrap justify-center items-center mt-6 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {socialLinks.map((item, index) => (
            <motion.li
              key={index}
              className="cursor-pointer"
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
            >
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <item.icon
                  size={25}
                  className={`text-white hover:scale-150 duration-300 ${item.color}`}
                />
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Contact Info */}
        <motion.div
          className="text-white flex flex-col md:flex-row items-center justify-center gap-4 cursor-pointer hover:text-green-400 mt-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center gap-2">
            <h3>Contact :</h3>
            <span>+92 303-0220 875</span>
          </div>

          <div className="flex items-center gap-2">
            <h3>Email :</h3>
            <a
              href="mailto:fahadhashmi350@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>fahadhashmi350@gmail.com</span>
            </a>
          </div>
        </motion.div>

        <hr className="text-gray-50 shadow-2xl my-4" />

        {/* Copyright */}
        <motion.div
          className="text-red-500 hover:text-white cursor-pointer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p>2025 All &copy; Rights Reserved By Fahad Hashmi</p>
        </motion.div>
      </div>
    </div>
  );
}

export default Footer;
