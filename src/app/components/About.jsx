import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto flex w-full flex-col items-center md:w-4/5"
    >
      <h2 className="my-6 text-center text-2xl tracking-wider md:text-4xl">
        About{" "}
      </h2>
      <div className="flex flex-col items-center md:flex-row">
        <Image
          className="w-1/2 rounded-md shadow-md md:w-1/3  md:self-start lg:w-1/4"
          src="/images/rawaz.jpg"
          width={200}
          height={200}
          alt="profile picture"
        />
        <div className="mx-2 my-4 w-full px-2 md:my-0 md:w-3/4">
          <h2 className="text-center text-2xl md:text-start md:text-3xl">
            Rawaz Ali{" "}
          </h2>
          <h3 className="text-center text-lg text-gray-500 md:text-start md:text-xl">
            Front End Developer - Software Engineer
          </h3>
          <p className="text-md mt-6  p-3 text-justify leading-9">
            I&apos;m a front-end web developer and software engineer graduated
            from Salahaddin University - Erbil. I have serious passion for front
            end development, creating intuitive, dynamic user experiences and
            also I&apos;m interested in back-end development and I&apos;m
            learning it. I&apos;m a fast learner and I&apos;m always looking for
            new challenges and opportunities to learn new technologies.
          </p>
        </div>
      </div>
    </section>
  );
}
