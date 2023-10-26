import Image from "next/image";
import React from "react";
import avernixLogo from "../public/assets/projects/avernix.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const avernix = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={avernixLogo}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Company Webpage</h2>
          <h3>Next.JS / Tailwind.CSS / API Integration</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          Avernix Technologies is at the forefront of technological innovation. Our team is dedicated to staying updated with the latest industry trends and incorporating cutting-edge solutions into our services. This dedication to innovation ensures that your projects benefit from the most advanced and effective technologies available.
          </p>
       
          <a
            href="https://avernix.com/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-blue-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next.js
              </p>
              <p className="text-blue-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind.CSS
              </p>
              <p className="text-blue-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> API Integration
              </p>
             
              {/* <p className="text-blue-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Express
              </p>
              <p className="text-blue-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next JS
              </p>
              <p className="text-blue-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> API Routes
              </p> */}
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default avernix;
