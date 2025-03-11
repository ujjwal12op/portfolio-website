import React from "react";
import { motion } from "framer-motion";

// Sample projects data with GitHub and Live Demo links
const projects = [
  {
    title: "Restaurant Landing Page",
    description: "A modern UI/UX design converted into a landing page of a restaurant!",
    githubLink: "https://github.com/ujjwal12op/Restaurant-Landing-Page-",
    liveDemo: "https://663371108469fcb55c5eec00--zesty-cascaron-52deab.netlify.app/",
  },
  {
    title: "Real Time Chat Application",
    description: "A real-time chat app just like WhatsApp!",
    githubLink: "https://github.com/ujjwal12op/chat-app",
    liveDemo: "https://chat-app-placementproject.onrender.com/login",
  },
  {
    title: "Youtube Clone",
    description: "Build a real clone of youtube platform.",
    githubLink: "https://github.com/ujjwal12op/youtube-clone",
    liveDemo: "https://66336497cfe16ba9ac2f7ecd--superb-scone-b25133.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-900 to-black text-white"
    >
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 px-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col justify-between h-full"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>

              {/* Buttons - Positioned at the bottom consistently */}
              <div className="mt-6 flex justify-center space-x-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-700 text-white rounded-lg font-bold hover:bg-gray-600 transition duration-300"
                >
                  GitHub
                </a>

                <a
                  href={project.liveDemo || "#"}
                  target={project.liveDemo ? "_blank" : ""}
                  rel="noopener noreferrer"
                  className={`px-4 py-2 rounded-lg font-bold transition duration-300 ${
                    project.liveDemo
                      ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
                      : "bg-gray-500 text-gray-300 cursor-not-allowed"
                  }`}
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
