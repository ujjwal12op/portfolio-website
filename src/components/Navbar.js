import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full top-0 shadow-md backdrop-blur-md bg-opacity-80">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Ujjwal Tiwari</h1>
        <ul className="flex space-x-6">
          <li>
            <a href="#about" className="hover:text-gray-400">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-400">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
