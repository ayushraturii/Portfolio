import logo from "../assets/signature.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import React from "react";
import { Link } from "react-scroll";
import {motion} from 'motion/react'

const Navbar = () => {
  return (
    <nav className="flex mb-20 items-center justify-between py-6">
      <div className="flex shrink-0 items-center">
        <div class="text-4xl font-extrabold text-beige-900 italic tracking-wide">
          AR
        </div>
        
      </div>
      <div className="flex items-center gap-4 text-2xl italic tracking-tight mx-auto">
          
          <motion.a 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
           href="#home" smooth={true} duration={500} className="cursor-pointer ">Home</motion.a>
          <motion.a 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="#about" smooth={true} duration={500} className="cursor-pointer ">About</motion.a>
          <motion.a 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="#tech" smooth={true} duration={500} className="cursor-pointer ">Technologies</motion.a>
          <motion.a 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="#proj" smooth={true} duration={500} className="cursor-pointer ">Projects</motion.a>
          <motion.a 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="#contact" smooth={true} duration={500} className="cursor-pointer ">Contact</motion.a>
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <motion.a
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.95 }}
         href="https://www.linkedin.com/in/ayushraturi">
          <FaLinkedin />
        </motion.a>
        <motion.a 
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.95 }}
        href="https://github.com/ayushraturii">
          <FaGithub />
        </motion.a>
        
        <motion.a 
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.95 }}
        href="https://leetcode.com/u/ayushraturi/">
          <SiLeetcode />
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
