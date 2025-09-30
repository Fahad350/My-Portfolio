import React from "react";
import pic from "../../public/Profile.jpeg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen  container mx-auto px-12 md:px-20 my-20 "
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2  mt-14 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed!</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, i'm a</h1>
              {/* <span className="text-red-700 font-bold">Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>

            <p className="text-sm md:text-md text-justify mt-5">
              I'm a passionate web developer with 6+ months of hands-on
              experience in both front-end and back-end development, dedicated
              to creating dynamic, responsive, and user-friendly websites that
              exceed client expectations. Proficient in the MERN Stack (MongoDB,
              Express.Js, React.Js, Node.Js), I have successfully built various
              projects that showcase my ability to design and implement robust
              full-stack solutions. My back-end expertise includes working with
              Node.js, Express.js, MongoDB, Mongoose and Postman enabling me to
              develop efficient APIs and manage database with ease. I possess a
              strong understanding of Object-Oriented Programming (OOP) and Data
              Structures & Algorithms (DSA). Which allows me to write clean,
              scalable and maintainable code. Thrive in collaborative
              environments, I enjoy tackling complex challenges and committed to
              delivering high-quality projects. Always eager to learn and grow
              as a developer.
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 justify-between items-center">
              <div className="space-y-2 ">
                <h4 className="font-bold text-cyan-600 ">Available On</h4>
                <ul className="flex space-x-2">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/%20fahad-hashmi-959248248"
                      target="blank"
                    >
                      <FaLinkedin
                        className="hover:scale-150 duration-300 cursor-pointer hover:text-blue-800"
                        size={25}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Fahad350" target="blank">
                      <FaGithub
                        className="hover:text-red-700 hover:scale-150 duration-300 cursor-pointer"
                        size={25}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/" target="blank">
                      <FaFacebook
                        className="hover:text-blue-800 hover:scale-150 duration-300 cursor-pointer"
                        size={25}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="blank">
                      <FaInstagramSquare
                        className="hover:text-red-700 hover:scale-150 duration-300 cursor-pointer"
                        size={25}
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2 ">
                <h4 className="font-bold text-cyan-600">
                  Currently Working On
                </h4>
                <ul className="flex space-x-4 ">
                  <li>
                    <a href="https://www.mongodb.com/" target="blank">
                      <DiMongodb
                        className="hover:text-green-600 hover:scale-150 duration-300 cursor-pointer"
                        size={27}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://expressjs.com/" target="blank">
                      <SiExpress
                        className="hover:text-red-600 hover:scale-150 duration-300 cursor-pointer"
                        size={27}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://react.dev/" target="blank">
                      <FaReact
                        className="hover:text-blue-800 hover:scale-150 duration-300 cursor-pointer"
                        size={27}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://nodejs.org/en" target="blank">
                      <FaNodeJs
                        className="hover:text-green-600 hover:scale-150 duration-300 cursor-pointer"
                        size={27}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-45 md:mt-18 mt-8 order-1">
            <a href="https://github.com/Fahad350" target="blank">
              <img
                src={pic}
                className="rounded-full md:w-[400px] md:h-[400px] w-[280px] h-[280px] hover:scale-110 duration-300"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
