import React from "react";
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
    {
      id: 1,
      logo: nodejs,
      name: "Node JS",
      link: "https://nodejs.org",
    },
    {
      id: 2,
      logo: expressjs,
      name: "Express JS",
      link: "https://expressjs.com",
    },
    {
      id: 3,
      logo: reactjs,
      name: "React JS",
      link: "https://reactjs.org",
    },
    {
      id: 4,
      logo: mongodb,
      name: "Mongo DB",
      link: "https://www.mongodb.com",
    },
    {
      id: 5,
      logo: sql,
      name: "Mysql",
      link: "https://www.mysql.com",
    },
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
    {
      id: 8,
      logo: redux,
      name: "Redux",
      link: "https://redux.js.org",
    },
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

  return (
    <div name="Experience">
      <div className="max-w-screen-2xl container mx-auto px-12 md:px-20 my-0 ">
        <br />

        <h1 className="font-bold text-4xl text-blue-400 text-center">
          Experience
        </h1>
        <br />
        <span className="block text-2xl font-semibold text-center  ">
          I have a solid experiance in these technologies
        </span>
        <br />

        <div className="grid grid-cols-2 md:grid-cols-6 space-x-5 space-y-3 mt-4">
          {cardItem.map(({ id, logo, name, link }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white md:w-[160px] md:h-[160px] w-[120px] h-[120px]  md:space-x-1 sm:space-x-2.5 rounded-full px-10 md:py-2 shadow-xl cursor-pointer hover:scale-110 duration-300 flex flex-col items-center justify-center text-center"
            >
              <img
                src={logo}
                alt={name}
                className="w-20 h-20 object-contain mb-2"
              />
              <div className="font-bold">{name}</div>
            </a>
          ))}
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}

export default Experience;
