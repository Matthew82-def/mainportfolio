import React from "react";
import Image from "next/image";
import connect from "../public/assets/connect.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="text-xl tracking-widest uppercase text-[#5335a5]">
          Contact
        </p>
        <h2 className="py-4">Lets Connect</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-blue-400 rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={connect}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Matt Herrera</h2>
                <p>FrontEnd Developer</p>
                <p className="py-4">I'm here for freelance or full-time.</p>
              </div>
              <p className="uppercase pt-8">Please contact me</p>
              <div className="flex items-center justify-between py-4">
                <div>
                  <div className="rounded-full shadow-lg shadow-blue-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a
                      href="https://www.linkedin.com/in/matthew-herrera-806bb696/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-blue-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a
                      href="https://github.com/Matthew82-def/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-blue-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a
                      href="mailto:matt.rg.herrera@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiOutlineMail />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-blue-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right  */}

          <div className="col-span-3 w-full h-full shadow-xl shadow-blue-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-blue-300"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-blue-300"
                      type="text"
                    />
                  </div>
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-blue-300"
                    type="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-blue-300"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-blue-300"
                    rows="20"
                    name="message"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-blue-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-blue-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5335a5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
