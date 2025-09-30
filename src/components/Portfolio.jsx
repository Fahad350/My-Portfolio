import React from "react";

import note from "../../public/NoteKeeper.png";

import fyp from "../../public/fyp.png";
import restaurant from "../../public/Resturant.png";
import hospital from "../../public/Hospital-App.png";
import book from "../../public/BookStore.png";
import gym from "../../public/Gym-App.png";

function Portfolio() {
  const cardItem = [
    {
      id: 1,
      logo: hospital,
      name: "PulseCare",
      title: " Hospital Management Sytem",
      detail: "CRUD Application in Mern Stack with Admin Pannel",
      link: "https://github.com/Fahad350/HospitalApp",
      link1: "https://www.google.com/",
    },
    {
      id: 2,
      logo: book,
      name: "BookStore",
      title: "Book Store Application ",
      detail: "Mern Stack Application with Authentication and Authorization",
      link: "https://github.com/Fahad350/bookstore",
      link1: "https://www.google.com/",
    },
    {
      id: 3,
      logo: gym,
      name: "Edge Fitness Club",
      title: "Gym Application ",
      detail: "Mern Stack Application with Authentication and Authorization",
      link: "https://github.com/Fahad350/Gym-Web",
      link1: "https://www.google.com/",
    },
    {
      id: 4,
      logo: restaurant,
      name: "The Golden Fork",
      title: " Restaurant Application",
      detail: "Mern Stack Web Application With Reservation Feature",
      link: "https://github.com/Fahad350/Restaurant",
      link1: "https://www.google.com/",
    },
    {
      id: 5,
      logo: fyp,
      name: "FYP (EEMIS)",
      title: " Elementory Education Mangement System ",
      detail: "CRUD Application in Php and Mysql",
      link: "https://github.com/Fahad350/FYP-in-php/blob/main/4%20Final%20Deliverable/bc190402608/EEMIS1-min.gif",
      link1: "https://www.google.com/",
    },
    {
      id: 6,
      logo: note,
      name: "Notes",
      title: " Note Keeping App in MERN",
      detail: "In this app we used CRUD Operations and States Manage",
      link: "https://github.com/Fahad350/NoteKeepingApp",
      link1: "https://www.google.com/",
    },
  ];
  return (
    <div
      name="Portfolio"
      className="bg-[url('/portfolio1.png')] bg-no-repeat bg-center bg-cover text-white "
    >
      <div className="max-w-screen-2xl container mx-auto px-12 md:px-20 my-0">
        <br />
        <h1 className="font-bold text-4xl text-green-500 text-center">
          Portfolio
        </h1>
        <br />
        <span className="block text-2xl underline text-white font-semibold text-center">
          Featured Porjects
        </span>
        <br />

        <div className="grid grid-cols-1 md:grid-cols-3 space-x-4 space-y-3 mt-4">
          {cardItem.map(({ id, logo, name, title, detail, link, link1 }) => (
            <div
              key={id}
              className="bg-blue-950  md:w-[340px] md:h-[350px] rounded-xl p-4 shadow-xl cursor-pointer hover:scale-110 duration-300"
            >
              <img
                src={logo}
                alt={name}
                className="w-85 h-35 object-contain mb-4 block mx-auto "
              />
              <div>
                <div className="font-bold text-lg text-center">{name}</div>
                <div className="text-center">{title}</div>
                <p className="text-sm text-gray-400 text-center">{detail}</p>
              </div>

              <div className="mt-4 space-x-2 flex justify-center">
                <a
                  key={id}
                  href={link1}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-1 rounded cursor-pointer">
                    Visit Website
                  </button>
                </a>
                <a
                  key={id}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-green-700 hover:bg-green-500 text-white px-4 py-1 rounded cursor-pointer">
                    Source Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <br />
    </div>
  );
}

export default Portfolio;
