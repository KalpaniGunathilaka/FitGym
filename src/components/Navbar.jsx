import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.jpg";

const Navbar = ({ dark, setDark }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full transition shadow-md backdrop-blur-md bg-white/80 dark:bg-black/70">

      <div className="flex items-center justify-between px-8 py-4 mx-auto max-w-7xl">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img src={logo} className="h-12 rounded-full shadow-md" />
          <h1 className="text-xl font-bold text-yellow-500">
            FitGym
          </h1>
        </div>

        {/* DESKTOP MENU */}
        <div className="items-center hidden gap-8 font-medium md:flex">

          <a href="#" className="relative group">
            <span className="dark:text-white">Home</span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all group-hover:w-full"></span>
          </a>

          <a href="#about" className="relative group">
            <span className="dark:text-white">About</span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all group-hover:w-full"></span>
          </a>

          <a href="#services" className="relative group">
            <span className="dark:text-white">Services</span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all group-hover:w-full"></span>
          </a>

          <a href="#contact" className="relative group">
            <span className="dark:text-white">Contact</span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all group-hover:w-full"></span>
          </a>

          {/* 🌙 DARK MODE TOGGLE WITH EMOJI */}
          <button
            onClick={() => setDark(!dark)}
            className="flex items-center gap-2 px-4 py-1 text-black transition-all duration-300 bg-yellow-500 rounded-lg hover:bg-yellow-600 hover:scale-105"
          >
            <span className="text-lg">
              {dark ? "☀️" : "🌙"}
            </span>
            <span>
              {dark ? "Light" : "Dark"}
            </span>
          </button>

        </div>

        {/* MOBILE MENU ICON */}
        <div className="text-2xl cursor-pointer md:hidden dark:text-white">
          {menuOpen ? (
            <FaTimes onClick={() => setMenuOpen(false)} />
          ) : (
            <FaBars onClick={() => setMenuOpen(true)} />
          )}
        </div>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="px-8 pb-6 space-y-4 transition-all bg-white md:hidden dark:bg-black">

          <a href="#" onClick={()=>setMenuOpen(false)} className="block dark:text-white">Home</a>
          <a href="#about" onClick={()=>setMenuOpen(false)} className="block dark:text-white">About</a>
          <a href="#services" onClick={()=>setMenuOpen(false)} className="block dark:text-white">Services</a>
          <a href="#contact" onClick={()=>setMenuOpen(false)} className="block dark:text-white">Contact</a>

          <button
            onClick={() => setDark(!dark)}
            className="flex items-center justify-center w-full gap-2 px-4 py-2 transition-all duration-300 bg-yellow-500 rounded hover:bg-yellow-600"
          >
            {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>

        </div>
      )}

    </nav>
  );
};

export default Navbar;