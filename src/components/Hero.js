import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiTailwindcss, SiDocker, SiKubernetes } from "react-icons/si";

const techStack = [
  { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
  { icon: <FaReact className="text-blue-400" />, name: "React" },
  { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
  { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
  { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
  { icon: <SiMongodb className="text-green-400" />, name: "MongoDB" },
  { icon: <SiPostgresql className="text-blue-300" />, name: "PostgreSQL" },
  { icon: <FaDatabase className="text-gray-400" />, name: "Databases" },
  { icon: <SiTailwindcss className="text-blue-400" />, name: "Tailwind CSS" },
  { icon: <SiDocker className="text-blue-600" />, name: "Docker" },
  { icon: <SiKubernetes className="text-blue-400" />, name: "Kubernetes" },
];

const Hero = () => {
  return (
    <section
      id="about"
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 to-purple-700 text-center text-white"
    >
      {/* Animated Heading */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="text-yellow-400">Ujjwal Tiwari</span>
      </motion.h1>

      {/* Animated Typing Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-lg md:text-xl mt-4 max-w-2xl"
      >
        <TypeAnimation
          sequence={[
            "A passionate full-stack developer...",
            2000,
            "Building modern web applications...",
            2000,
            "Creating scalable backend solutions...",
            2000,
            "Crafting beautiful UI/UX experiences...",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </motion.div>

      {/* Scrolling Tech Stack Icons */}
      <div className="mt-8 overflow-hidden w-full max-w-4xl">
        <h3 className="text-xl font-semibold mb-4">Technologies I Know</h3>
        <motion.div
          className="flex space-x-6 w-max animate-scroll"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          {techStack.map((tech, index) => (
            <div key={index} className="flex flex-col items-center mx-4 text-3xl">
              {tech.icon}
              <p className="text-sm mt-2">{tech.name}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* CTA Buttons */}
      <motion.div
        className="mt-6 flex space-x-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-yellow-400 text-gray-900 rounded-lg shadow-lg font-bold hover:bg-yellow-300 transition duration-300"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border-2 border-white rounded-lg font-bold hover:bg-white hover:text-blue-600 transition duration-300"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
