import React from "react";
import { motion } from "framer-motion";
import nodejs from "../../public/node.png";
import expressjs from "../../public/express.png";
import reactjs from "../../public/react.jpg";
import mongodb from "../../public/mongo.png";
import sql from "../../public/sql.png";
import redux from "../../public/redux.png";
import html from "../../public/html.png";
import css from "../../public/css.png";
import javascript from "../../public/js.png";
import bootstrap from "../../public/bootstrap.png";
import tailwind from "../../public/tailwind.png";
import api from "../../public/api.png";

function Experience() {
  const cardItem = [
    { id: 1, logo: nodejs, name: "Node JS", link: "https://nodejs.org" },
    {
      id: 2,
      logo: expressjs,
      name: "Express JS",
      link: "https://expressjs.com",
    },
    { id: 3, logo: reactjs, name: "React JS", link: "https://reactjs.org" },
    { id: 4, logo: mongodb, name: "Mongo DB", link: "https://www.mongodb.com" },
    { id: 5, logo: sql, name: "Mysql", link: "https://www.mysql.com" },
    {
      id: 6,
      logo: tailwind,
      name: "Tailwind CSS",
      link: "https://tailwindcss.com",
    },
    {
      id: 7,
      logo: javascript,
      name: "JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    { id: 8, logo: redux, name: "Redux", link: "https://redux.js.org" },
    {
      id: 9,
      logo: html,
      name: "HTML",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      id: 10,
      logo: css,
      name: "CSS",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      id: 11,
      logo: bootstrap,
      name: "Bootstrap",
      link: "https://getbootstrap.com",
    },
    {
      id: 12,
      logo: api,
      name: "Rest API",
      link: "https://www.redhat.com/en/topics/api/what-is-a-rest-api",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div name="Experience">
      <div className="max-w-screen-2xl container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 my-0">
        <br />
        <motion.h1
          className="font-bold text-4xl text-blue-400 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          Experience
        </motion.h1>
        <br />
        <motion.span
          className="block text-2xl font-semibold text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
          transition={{ duration: 1 }}
        >
          I have solid experience in these technologies
        </motion.span>
        <br />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-4 justify-items-center">
          {cardItem.map(({ id, logo, name, link }, index) => (
            <motion.a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full shadow-xl cursor-pointer hover:scale-110 duration-300 
                         flex flex-col items-center justify-center text-center 
                         w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 p-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img
                src={logo}
                alt={name}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 mb-2 object-contain"
              />
              <div className="font-bold text-base sm:text-lg md:text-lg">
                {name}
              </div>
            </motion.a>
          ))}
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}

export default Experience;
