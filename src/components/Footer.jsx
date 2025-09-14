import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <div name="Footer" className="bg-black text-center">
      <div className="max-w-screen-2xl container mx-auto px-12 md:px-20 my-0">
        <br />

        <h1 className="font-bold text-3xl text-blue-400">Contact Plateforms</h1>
      </div>
      {/* footer */}
      <br />

      <div>
        <ul className="flex space-x-2 itmes-center justify-center">
          <li>
            <a
              href="https://www.linkedin.com/in/%20fahad-hashmi-959248248"
              target="blank"
            >
              <FaLinkedin
                className=" cursor-pointer text-2xl hover:scale-150 duration-300 text-white hover:text-blue-800"
                size={25}
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/Fahad350" target="blank">
              <FaGithub
                className="hover:text-red-700 text-2xl hover:scale-150 duration-300 text-white cursor-pointer"
                size={25}
              />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/" target="blank">
              <FaFacebook
                className="hover:text-blue-800 text-2xl hover:scale-150 duration-300 text-white cursor-pointer"
                size={25}
              />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="blank">
              <FaInstagramSquare
                className="hover:text-red-700 text-2xl hover:scale-150 duration-300 text-white cursor-pointer"
                size={25}
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="text-white flex itmes-center justify-center space-x-4 cursor-pointer hover:text-green-400 mt-3 mb-2">
        <h3>Contact :</h3>

        <span>+92 303-0220 875</span>
      </div>
      <div className="text-white flex itmes-center justify-center space-x-4 cursor-pointer  hover:text-green-400">
        <h3>Email :</h3>
        <a href="mailto:fahadhashmi350@gmail.com" target="blank">
          <span>fahadhashmi350@gmail.com</span>
        </a>
      </div>
      <br />
      <hr className="text-gray-50 shadow-2xl mb-2" />

      <div className="text-red-500 hover:text-white cursor-pointer">
        <p> 2025 All &copy; Rights Reserved By Fahad Hashmi </p>
      </div>

      <hr className="text-gray-50 shadow-2xl mt-2" />
    </div>
  );
}

export default Footer;
