import React from "react";
import Image from "next/image";
import chatapp from "../public/assets/projects/chatapp.png";
import drumkit from "../public/assets/projects/drumkit.png";
import webpage from "../public/assets/projects/webpage.png";
import tictactoe from "../public/assets/projects/tictactoe.png";
// import Link from "next/link";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Chat App"
            backgroundImg={chatapp}
            projectUrl="/chat"
            tech="React JS"
          />
          <ProjectItem
            title="Drum Kit"
            backgroundImg={drumkit}
            projectUrl="/drumkit"
            tech="HTML, CSS, JAVASCRIPT"
          />
          <ProjectItem
            title="Webpage"
            backgroundImg={webpage}
            projectUrl="/webpage"
            tech="HTML, CSS, JAVASCRIPT"
          />
          <ProjectItem
            title="Tic Tac Toe"
            backgroundImg={tictactoe}
            projectUrl="/tictactoe"
            tech="HTML, CSS, JAVASCRIPT"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
