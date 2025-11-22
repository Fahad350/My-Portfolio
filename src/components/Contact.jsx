import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_613wv8h", "template_sfias16", form.current, {
        publicKey: "9HLD08dPo-vzBSF-G",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Sent Your Message!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      name="Contact"
      className="bg-[url('/about.jpg')] bg-cover bg-center text-center"
    >
      <div className="max-w-screen-2xl container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 my-0">
        <br />
        <motion.h1
          className="font-bold text-4xl text-blue-400"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          Contact Form
        </motion.h1>
        <br />

        <div className="flex items-center justify-center">
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="text-white bg-cyan-800 max-w-md w-full text-justify rounded-xl p-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInUp}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="font-bold text-2xl text-black text-center mb-5">
              Send Your Message
            </h1>

            <label className="block text-left">Full Name</label>
            <input
              className="bg-white text-black rounded h-10 w-full px-2"
              type="text"
              placeholder="Your Name"
              name="user_name"
            />
            <br />
            <br />

            <label className="block text-left">Email Address</label>
            <input
              className="bg-white text-black rounded h-10 w-full px-2"
              type="email"
              placeholder="Your Email"
              name="user_email"
            />
            <br />
            <br />

            <label className="block text-left">Message</label>
            <textarea
              className="bg-white text-black rounded h-24 w-full px-2"
              placeholder="Your Message"
              name="message"
            />
            <button className="bg-black hover:bg-green-500 text-white px-4 py-2 rounded cursor-pointer w-full mt-5">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Contact;
