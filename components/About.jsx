import React from "react";
import Link from "next/link";
import Image from "next/image";
import officeImg from "../public/assets/office.png";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5335a5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-blue-600">Coding to be a better developer</p>

          <p className="py-2 text-black-600">
            Having a good understanding of website design principles and user
            experience, I have been a great asset in ensuring optimal website
            compatibility across different platforms and browsers. I am now
            seeking to leverage these skills in a challenging role to help your
            organization achieve its digital objectives.
          </p>

          <p className="py-2 text-black-600">
            My goal is to create websites that not only meet the client goals
            but also provide a seamless user experience, ensuring a positive
            engagement for all users, whether they are customers seeking
            information or researchers contributing to your organization’s
            mission.
          </p>
          <Link href="https://github.com/Matthew82-def" target="_blank">
            <p className="py-2 text-red-600 underline cursor-pointer">
              Here are some of my projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-blue-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={officeImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
