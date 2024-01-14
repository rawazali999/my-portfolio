"use client";
// components/Navbar.js
import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "./Theme/ThemeToggle";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full bg-slate-50 p-4 transition-all dark:bg-main ${
        scrolling ? "shadow-md" : ""
      }`}
    >
      <div className=" mx-2 flex items-center justify-between  md:justify-evenly">
        <Link href="/" className="text-2xl font-bold tracking-wider">
          Rawaz Ali
        </Link>
        <div className="hidden space-x-4 md:flex">
          <NavLink href="/#home">Home</NavLink>
          <NavLink href="/#about">About</NavLink>
          <NavLink href="/#skills">Skills</NavLink>
          <NavLink href="/#projects">Projects</NavLink>
          <NavLink href="/#contact">Contact</NavLink>
        </div>
        <ThemeToggle className={"hidden md:block"} />
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } fixed right-2 top-14 flex-col space-y-4 rounded-md  bg-white text-center  shadow-lg dark:bg-main `}
        >
          <NavLink href="/#home">Home</NavLink>
          <NavLink href="/#about">About</NavLink>
          <NavLink href="/#skills">Skills</NavLink>
          <NavLink href="/#projects">Projects</NavLink>
          <NavLink href="/#contact">Contact</NavLink>
        </div>

        <div className="flex p-1 md:hidden ">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 "
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16v2h-16v-2zm0 5h16v2h-16v-2zm0 5h16v2h-16v-2z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }) => (
  <Link
    href={href}
    className="px-4 py-2  transition-all hover:text-gray-300 hover:underline"
  >
    {children}
  </Link>
);

export default Navbar;
