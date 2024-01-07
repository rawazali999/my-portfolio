"use client";
// components/Navbar.js
import { useState, useEffect } from "react";
import Link from "next/link";

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
      className={`fixed top-0 w-full bg-main p-4 text-white transition-all ${
        scrolling ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-2 flex items-center justify-between ">
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
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } fixed right-2 top-14 flex-col space-y-4  rounded-md bg-main text-center shadow-lg `}
        >
          <NavLink href="/#home">Home</NavLink>
          <NavLink href="/#about">About</NavLink>
          <NavLink href="/#skills">Skills</NavLink>
          <NavLink href="/#projects">Projects</NavLink>
          <NavLink href="/#contact">Contact</NavLink>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="block text-3xl focus:outline-none md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16v2h-16v-2zm0 5h16v2h-16v-2zm0 5h16v2h-16v-2z" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }) => (
  <Link
    href={href}
    className="px-4 py-2 text-gray-100 transition-all hover:text-gray-300"
  >
    {children}
  </Link>
);

export default Navbar;
