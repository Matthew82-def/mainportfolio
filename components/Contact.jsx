import React, { useState } from "react";
import Image from "next/image";
import connect from "../public/assets/connect.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
    phoneNumber: "",
  });

  const [formSuccess, setFormSuccess] = useState(false);
  const [formSuccessMessage, setFormSuccessMessage] = useState("");

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const submitForm = (e) => {
    // We don't want the page to refresh
    e.preventDefault();

    const formURL = e.target.action;
    const data = new FormData();

    // Turn our formData state into data we can use with a form submission
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    // POST the data to the URL of the form
    fetch(formURL, {
      method: "POST",
      body: data,
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setFormData({
          name: "",
          email: "",
          message: "",
          subject: "",
          phoneNumber: "",
        });

        setFormSuccess(true);
        setFormSuccessMessage(data.message);
      });
  };
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
              {formSuccess ? (
                <div>{formSuccessMessage}</div>
              ) : (
                <form
                  action="https://api.avernix.com/api/mail/form?mailToken=t7L4BvkB7"
                  method="post"
                  onSubmit={submitForm}
                >
                  <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2" for="name">
                        Name
                      </label>
                      <input
                        className="border-2 rounded-lg p-3 flex border-blue-300"
                        onChange={handleInput}
                        value={formData.name}
                        name="name"
                        type="text"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        className="uppercase text-sm py-2"
                        for="phoneNumber"
                      >
                        Phone Number
                      </label>
                      <input
                        className="border-2 rounded-lg p-3 flex border-blue-300"
                        onChange={handleInput}
                        value={formData.phoneNumber}
                        name="phoneNumber"
                        type="text"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2" for="email">
                      Email
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-blue-300"
                      onChange={handleInput}
                      value={formData.email}
                      name="email"
                      type="email"
                      required
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2" for="subject">
                      Subject
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-blue-300"
                      onChange={handleInput}
                      value={formData.subject}
                      name="subject"
                      type="text"
                      required
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2" for="message">
                      Message
                    </label>
                    <textarea
                      className="border-2 rounded-lg p-3 border-blue-300"
                      onChange={handleInput}
                      value={formData.message}
                      rows="20"
                      name="message"
                      required
                    ></textarea>
                  </div>
                  <button className="w-full p-4 text-blue-100 mt-4">
                    Send Message
                  </button>
                </form>
              )}
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
