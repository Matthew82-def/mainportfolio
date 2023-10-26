import React from "react";
import Image from "next/image";

import saraLogo from "../public/assets/projects/saraLogo.png";
import webpage from "../public/assets/projects/webpage.png";
import tictactoe from "../public/assets/projects/tictactoe.png";
import avernixLogo from "../public/assets/projects/avernix.png";
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
            title="NonproAdco"
            backgroundImg={saraLogo}
            projectUrl="/nonpro"
            tech="NEXT.JS, TAILWIND.CSS, API Integration"
          />
          <ProjectItem
            title="Avernix"
            backgroundImg={avernixLogo}
            projectUrl="/avernix"
            tech="NEXT.JS, TAILWIND.CSS, API Integration"
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
