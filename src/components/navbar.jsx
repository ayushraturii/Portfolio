import { useState } from "react";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  return (
    <nav className=" w-full z-50 ">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-3xl font-bold italic text-white tracking-wide">
          AR
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-lg text-white">
          {["Home", "About", "Technologies", "Projects", "Contact"].map(
            (item, index) => (
              <motion.a
                key={index}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer hover:text-gray-400 transition duration-300"
              >
                {item}
              </motion.a>
            )
          )}
        </div>

        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex items-center space-x-4 text-xl text-white">
          <motion.a
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/ayushraturi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/ayushraturii"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.95 }}
            href="https://leetcode.com/u/ayushraturi/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400"
          >
            <SiLeetcode />
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-gradient-to-b from-gray-900 to-black py-4 space-y-4 shadow-lg">
          {["Home", "About", "Technologies", "Projects", "Contact"].map(
            (item, index) => (
              <motion.a
                key={index}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-lg text-white cursor-pointer hover:text-gray-400 transition duration-300"
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {item}
              </motion.a>
            )
          )}
          {/* Social Icons in Mobile Menu */}
          <div className="flex space-x-6 text-xl text-white mt-4">
            <motion.a
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/ayushraturi"
              className="hover:text-blue-400"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/ayushraturii"
              className="hover:text-gray-400"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.95 }}
              href="https://leetcode.com/u/ayushraturi/"
              className="hover:text-yellow-400"
            >
              <SiLeetcode />
            </motion.a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
