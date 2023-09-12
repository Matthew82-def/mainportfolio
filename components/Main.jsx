import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1580px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-cyan-600">
            Together we can build a creative world!
          </p>
          <h1 className="py-1 text-grey-700">
            Hello, I'm <span className="text-[#0D6BBE]">Matt</span>
          </h1>
          <h1 className="py-1 text-grey-700">A FrontEnd Web Developer</h1>
          <p className="py-1 text-gray-600 sm:max-w-[70%] m-auto">
            As a web developer with over two years of hands-on experience in
            HTML, JavaScript, React, and Express.JS, I am always willing to
            learn new tricks to design, develop, and maintain websites tailored
            for both clients and researchers. My passion is in troubleshooting,
            debugging, and analyzing website issues, and I am known for my
            ability to provide innovative ideas and best practices to enhance
            website security.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-1">
            <a
              href="https://www.linkedin.com/in/matthew-herrera-806bb696/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-blue-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/Matthew82-def/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-blue-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <a
              href="mailto:matt.rg.herrera@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-blue-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </a>
            <a
              href="https://resume.io/r/Fnz818CHy"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-blue-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
