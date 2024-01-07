import React from "react";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaGithub,
  FaLaravel,
  FaPhp,
  FaJava,
} from "react-icons/fa";
import {
  SiTypescript,
  SiRedux,
  SiMysql,
  SiMongodb,
  SiBootstrap,
  SiTailwindcss,
  SiMui,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export default function Skills() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, level: 90 },
    { name: "CSS3", icon: <FaCss3 />, level: 85 },
    { name: "JavaScript (ES6+)", icon: <FaJs />, level: 80 },
    { name: "React.js", icon: <FaReact />, level: 75 },
    { name: "Next.js", icon: <TbBrandNextjs />, level: 60 },
    { name: "TypeScript", icon: <SiTypescript />, level: 40 },
    { name: "Redux.js", icon: <SiRedux />, level: 50 },
    { name: "Node.js", icon: <FaNodeJs />, level: 75 },
    { name: "MySql", icon: <SiMysql />, level: 80 },
    { name: "Git", icon: <FaGit />, level: 75 },
    { name: "GitHub", icon: <FaGithub />, level: 75 },
    { name: "TailwindCSS", icon: <SiTailwindcss />, level: 80 },
    { name: "Bootstrap", icon: <SiBootstrap />, level: 50 },
    { name: "MaterialUi", icon: <SiMui />, level: 60 },
    { name: "Php", icon: <FaPhp />, level: 40 },
    { name: "Java", icon: <FaJava />, level: 50 },
    { name: "Laravel", icon: <FaLaravel />, level: 40 },
    { name: "Mongodb", icon: <SiMongodb />, level: 50 },
  ];

  return (
    <section className="mb-10 mt-20  pt-20">
      <h2 id="skills" className="mb-6 text-center text-4xl tracking-wider">
        Skills
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {skills.map(({ name, icon, level }) => (
          <div key={name} className="rounded-xl border  p-6 shadow-md">
            <div className="mb-2 flex items-center">
              <div className="mr-2 text-2xl">{icon}</div>
              <h3 className="text-lg font-semibold">{name}</h3>
            </div>
            <div className="relative pt-1">
              <div className="mb-2 flex items-center justify-between">
                <div>
                  <span className="inline-block rounded-full bg-blue-200 px-2 py-1 text-xs font-semibold uppercase text-blue-800">
                    Skill Level
                  </span>
                </div>
                <div className="text-right">
                  <span className="inline-block text-xs font-semibold text-blue-500">
                    {level}%
                  </span>
                </div>
              </div>
              <div className="mb-4 flex h-2 overflow-hidden">
                <div
                  style={{ width: `${level}%` }}
                  className="flex flex-col justify-center whitespace-nowrap bg-blue-500 text-white shadow-md"
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
