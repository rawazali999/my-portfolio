"use client";
// components/Navbar.js
import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

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
      className={`fixed text-white  top-0 w-full p-4 transition-all ${
        scrolling ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-evenly">
        <Link href="/" className="text-2xl font-bold tracking-wider">
          Rawaz Ali
        </Link>
        <div className="flex space-x-4">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/#about">About</NavLink>
          <NavLink href="/#skills">Skills</NavLink>
          <NavLink href="/#projects">Projects</NavLink>
          <NavLink href="/#contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }) => (
  <Link
    href={href}
    className="text-gray-100 hover:text-gray-300 py-2 px-4 transition-all"
  >
    {children}
  </Link>
);

export default Navbar;
