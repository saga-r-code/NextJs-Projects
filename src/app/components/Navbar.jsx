"use client"
import Link from "next/link";
import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { IoSettingsSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi"; // Add menu icons

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDropDown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isDropdownOpen) setIsDropdownOpen(false);
  };

  return (
    <div className="fixed left-0 top-0 z-50 md:h-screen">
      {/* Mobile Menu Button */}
      <button
        onClick={handleMobileMenu}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-blue-950 text-white"
      >
        {isMobileMenuOpen ? (
          <HiX className="text-2xl" />
        ) : (
          <HiMenu className="text-2xl" />
        )}
      </button>

      <nav
        className={`
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
        transition-transform duration-300
        fixed left-0 top-0
        h-screen w-screen md:w-20
        bg-gradient-to-b from-blue-950 to-blue-900
        md:flex md:flex-col
      `}
      >
        <div className="flex flex-col items-center justify-center gap-10 h-[80%] pt-16 md:pt-0">
          <Link
            href="/"
            className="flex flex-col items-center group p-3 transition-all duration-300"
          >
            <FaHome className="text-4xl text-white group-hover:scale-110 group-hover:text-blue-300 transition-all" />
          </Link>

          <div className="relative group" onClick={handleDropDown}>
            <div className="flex flex-col items-center p-3 transition-all duration-300 cursor-pointer">
              <GrProjects className="text-3xl text-white group-hover:scale-110 group-hover:text-blue-300 transition-all" />
            </div>

            {/* Dropdown Menu */}
            <div
              className={`
              ${isDropdownOpen ? "flex" : "hidden"}
              md:absolute md:left-20 md:top-0
              relative left-0 top-2
              w-full md:w-auto
            `}
            >
              <div className="bg-blue-900 rounded-xl min-w-[250px] shadow-lg w-full md:w-auto">
                <Link
                  href="/Projects/QuizApp"
                  className="block px-4 py-2 my-2 tracking-wide text-start  border-b text-gray-300 hover:scale-105 hover:underline hover:text-white"
                >
                  Quiz App
                </Link>
                <Link
                  href="/Projects/AgeCalculator"
                  className="block px-4 py-2 my-2 tracking-wide text-start  border-b text-gray-300 hover:scale-105 hover:underline hover:text-white"
                >
                  Age Calculator
                </Link>
                <Link
                  href="/Projects/WheatherApp"
                  className="block px-4 py-2 my-2 tracking-wide text-start   text-gray-300 hover:scale-105 hover:underline hover:text-white"
                >
                   Wheather App
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/"
            className="flex flex-col items-center group p-3 transition-all duration-300"
          >
            <IoSettingsSharp className="text-4xl text-white group-hover:scale-110 group-hover:text-blue-300 transition-all" />
          </Link>

          <Link
            href="/"
            className="flex flex-col items-center group p-3 transition-all duration-300"
          >
            <FaUser className="text-3xl text-white group-hover:scale-110 group-hover:text-blue-300 transition-all" />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
