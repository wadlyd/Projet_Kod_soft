import React, { useState } from "react";
import logo from "../assets/kodprog-logo-2-light.png";
import ParticlesBackground from "./config/ParticlesBackground";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-banner-bg bg-cover bg-center border-b-[1px] border-b-blue-600 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ParticlesBackground className="w-full h-24 md:h-28" id="tsparticles-header" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-white flex justify-between items-center">
        <div>
          <img src={logo} alt="KODPROG" className="h-20 md:h-24 w-auto" />
        </div>

        {/* Burger button - visible only on mobile */}
        <button
          className={`burger-btn md:hidden flex flex-col gap-[5px] cursor-pointer bg-transparent border-none p-1 z-[60] ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Nav menu - inline on desktop, slide-in panel on mobile */}
        <div
          className={`flex flex-col md:flex-row items-center gap-8 fixed top-0 right-0 h-screen w-[70%] md:static md:h-auto md:w-auto bg-black/95 md:bg-transparent pt-20 md:pt-0 z-50 transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } md:translate-x-0`}
        >
          <ul className="flex gap-6 text-sm uppercase font-semibold flex-col md:flex-row items-center">
            <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
            <li><a href="#about" onClick={handleLinkClick}>About</a></li>
            <li><a href="#vision" onClick={handleLinkClick}>Vision</a></li>
            <li><a href="#services" onClick={handleLinkClick}>Services+</a></li>
            <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
          </ul>
          <div>
            <a
              href="mailto:kodprogit@gmail.com"
              className="inline-block bg-green-600 hover:bg-green-500 transition-colors py-1 px-6 rounded-xl text-base uppercase font-semibold"
            >
              Send me an Email
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
