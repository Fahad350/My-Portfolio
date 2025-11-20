import React from "react";
import { motion } from "framer-motion";
import pics from "../../public/vu.png";

function About() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      name="About"
      className="bg-[url('/about2.jpg')] bg-cover bg-center bg-fixed text-gray-800"
    >
      <motion.div
        className="max-w-screen-xl mx-auto px-6 md:px-16 py-16 backdrop-blur-sm bg-white/70 rounded-2xl shadow-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} // <-- animate EVERY time in view
        transition={{ duration: 0.8 }}
        variants={fadeInUp}
      >
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-blue-600"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h1>

        {/* Intro Section */}
        <motion.p
          className="text-lg text-justify text-gray-700 leading-relaxed max-w-3xl mx-auto"
          variants={fadeInUp}
          transition={{ duration: 1 }}
        >
          Hello 👋, I'm a passionate{" "}
          <span className="font-semibold">Web Developer</span> with a strong
          focus on the <span className="text-blue-500">MERN stack</span>. With a
          background in Computer Science, I strive to create impactful and
          visually stunning software solutions that leave a lasting impression.
        </motion.p>

        {/* Education Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 md:gap-90 gap-15 mt-12 items-center"
          variants={fadeInUp}
          transition={{ duration: 1.2 }}
        >
          <div className="space-y-3 text-justify">
            <h2 className="text-2xl font-bold text-blue-600 text-center md:mr-25 sm:mr-0">
              Education
            </h2>
            <h3 className="font-semibold">
              Virtual University of Pakistan{" "}
              <span className="text-gray-600">(2019 - 2023)</span>
            </h3>
            <p className="text-gray-700">
              Bachelor of Science in Computer Science (BSCS)
            </p>
            <p className="text-gray-700">
              CGPA: <span className="font-semibold">3.55</span>
            </p>
          </div>

          <div className="flex justify-center">
            <a href="https://www.vu.edu.pk/" target="_blank" rel="noreferrer">
              <motion.img
                src={pics}
                className="rounded-full shadow-lg w-36 h-36 md:w-54 md:h-54 hover:scale-110 transition-transform duration-300"
                alt="Virtual University Logo"
                variants={fadeInUp}
                transition={{ duration: 1.5 }}
              />
            </a>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="mt-12"
          variants={fadeInUp}
          transition={{ duration: 1.4 }}
        >
          <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">
            Skills & Expertise
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-justify">
            <li>
              Proficient in JavaScript, React, Node.js, Express, and MongoDB,
              with hands-on experience building scalable and efficient
              full-stack applications.
            </li>
            <li>
              Experienced with Git, REST APIs, Tailwind CSS, and Firebase,
              ensuring smooth version control, seamless integrations, and modern
              UI/UX development.
            </li>
            <li>
              Strong grasp of design principles and responsive layouts, enabling
              the creation of visually appealing, user-friendly, and
              mobile-first interfaces.
            </li>
            <li>
              Excellent problem-solving and debugging skills, with the ability
              to identify issues quickly and implement effective, long-term
              solutions.
            </li>
            <li>
              Effective communicator and collaborative team player, capable of
              working across diverse teams to deliver projects on time and with
              high quality.
            </li>
          </ul>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          className="mt-12"
          variants={fadeInUp}
          transition={{ duration: 1.6 }}
        >
          <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">
            Mission Statement
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            My mission is to leverage my skills and creativity to deliver
            <span className="font-semibold text-blue-500">
              {" "}
              innovative web solutions{" "}
            </span>
            that exceed client expectations and contribute positively to the
            digital landscape. I’m committed to continuous learning, always
            seeking new challenges and opportunities to expand my horizons.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;
