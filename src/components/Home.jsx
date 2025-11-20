import React from "react";
import { motion } from "framer-motion";
import pic from "../../public/Profile.jpeg";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagramSquare,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { ReactTyped } from "react-typed";

function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      name="Home"
      className="max-w-screen overflow-x-hidden mx-auto px-4 md:px-20 my-20"
    >
      <div className="flex flex-col md:flex-row flex-wrap items-center">
        <motion.div
          className="md:w-1/2 mt-14 space-y-2 order-2 md:order-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xl">Welcome In My Feed!</span>
          <div className="flex flex-wrap space-x-1 text-2xl md:text-4xl">
            <h1>Hello, I'm a</h1>
            <ReactTyped
              className="text-red-700 font-bold"
              strings={["Developer", "Programmer", "Coder"]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
            />
          </div>

          <p className="text-sm md:text-md text-justify mt-5">
            I'm a passionate web developer with 6+ months of hands-on experience
            in both front-end and back-end development, dedicated to creating
            dynamic, responsive, and user-friendly websites that exceed client
            expectations. Proficient in the MERN Stack (MongoDB, Express.Js,
            React.Js, Node.Js), I have successfully built various projects that
            showcase my ability to design and implement robust full-stack
            solutions. My back-end expertise includes working with Node.js,
            Express.js, MongoDB, Mongoose and Postman enabling me to develop
            efficient APIs and manage database with ease. I possess a strong
            understanding of Object-Oriented Programming (OOP) and Data
            Structures & Algorithms (DSA). Which allows me to write clean,
            scalable and maintainable code. Thrive in collaborative
            environments, I enjoy tackling complex challenges and committed to
            delivering high-quality projects. Always eager to learn and grow as
            a developer.
          </p>

          {/* Social Media Icons */}
          <motion.div
            className="flex flex-col md:flex-row flex-wrap space-y-6 md:space-y-0 justify-between items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInUp}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="space-y-2">
              <h4 className="font-bold text-cyan-600 ml-3">Available On</h4>
              <ul className="flex flex-wrap space-x-2">
                <li>
                  <a
                    href="https://www.linkedin.com/in/%20fahad-hashmi-959248248"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin
                      className="hover:scale-150 duration-300 cursor-pointer hover:text-blue-800"
                      size={25}
                    />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Fahad350" target="_blank">
                    <FaGithub
                      className="hover:text-red-700 hover:scale-150 duration-300 cursor-pointer"
                      size={25}
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/" target="_blank">
                    <FaFacebook
                      className="hover:text-blue-800 hover:scale-150 duration-300 cursor-pointer"
                      size={25}
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank">
                    <FaInstagramSquare
                      className="hover:text-red-700 hover:scale-150 duration-300 cursor-pointer"
                      size={25}
                    />
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-cyan-600">Currently Working On</h4>
              <ul className="flex flex-wrap space-x-4">
                <li>
                  <a href="https://www.mongodb.com/" target="_blank">
                    <DiMongodb
                      className="hover:text-green-600 hover:scale-150 duration-300 cursor-pointer"
                      size={27}
                    />
                  </a>
                </li>
                <li>
                  <a href="https://expressjs.com/" target="_blank">
                    <SiExpress
                      className="hover:text-red-600 hover:scale-150 duration-300 cursor-pointer"
                      size={27}
                    />
                  </a>
                </li>
                <li>
                  <a href="https://react.dev/" target="_blank">
                    <FaReact
                      className="hover:text-blue-800 hover:scale-150 duration-300 cursor-pointer"
                      size={27}
                    />
                  </a>
                </li>
                <li>
                  <a href="https://nodejs.org/en" target="_blank">
                    <FaNodeJs
                      className="hover:text-green-600 hover:scale-150 duration-300 cursor-pointer"
                      size={27}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="md:w-1/2 mt-8 order-1 md:order-2 flex justify-center"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1 }}
        >
          <a href="https://github.com/Fahad350" target="_blank">
            <img
              src={pic}
              className="rounded-full md:w-[400px] md:h-[400px] w-[280px] h-[280px] hover:scale-110 duration-300"
              alt=""
            />
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
