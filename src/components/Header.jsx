import React, { useState } from "react";
import logo from "../assets/kodprog-logo-2-light.png";
import ParticlesBackground from "./config/ParticlesBackground";
import { useLanguage } from "../context/LanguageContext";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-banner-bg bg-cover bg-center border-b-[1px] border-b-blue-600">
      <div className="absolute inset-0 z-0">
        <ParticlesBackground className="w-full h-24 md:h-28" id="tsparticles-header" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-white flex justify-between items-center">
        <div>
          <img src={logo} alt="KODPROG" className="h-20 md:h-24 w-auto" />
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <div className="flex items-center border border-cyan-400 rounded-full overflow-hidden text-xs font-semibold uppercase z-[60]">
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`px-2 py-0.5 text-[11px] transition-colors ${lang === "en" ? "bg-cyan-400 text-black" : "text-cyan-400 hover:bg-cyan-400/10"}`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("fr")}
              className={`px-2 py-0.5 text-[11px] transition-colors ${lang === "fr" ? "bg-cyan-400 text-black" : "text-cyan-400 hover:bg-cyan-400/10"}`}
            >
              FR
            </button>
          </div>

          {/* Burger button - visible only on mobile */}
          <button
            className={`burger-btn flex flex-col gap-[5px] cursor-pointer bg-transparent border-none p-1 z-[60] ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={t.nav.toggleMenu}
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Nav menu - inline on desktop, slide-in panel on mobile */}
        <div
          className={`flex flex-col md:flex-row items-center gap-8 fixed top-0 right-0 h-screen w-[70%] md:static md:h-auto md:w-auto bg-black/95 md:bg-transparent pt-20 md:pt-0 z-50 transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } md:translate-x-0`}
        >
          <ul className="flex gap-6 text-sm uppercase font-semibold flex-col md:flex-row items-center">
            <li><a href="#home" onClick={handleLinkClick}>{t.nav.home}</a></li>
            <li><a href="#about" onClick={handleLinkClick}>{t.nav.about}</a></li>
            <li><a href="#vision" onClick={handleLinkClick}>{t.nav.vision}</a></li>
            <li><a href="#services" onClick={handleLinkClick}>{t.nav.services}</a></li>
            <li><a href="#contact" onClick={handleLinkClick}>{t.nav.contact}</a></li>
          </ul>

          <div className="hidden md:flex items-center border border-cyan-400 rounded-full overflow-hidden text-sm font-semibold uppercase">
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`px-2 py-0.5 text-[11px] transition-colors ${lang === "en" ? "bg-cyan-400 text-black" : "text-cyan-400 hover:bg-cyan-400/10"}`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("fr")}
              className={`px-2 py-0.5 text-[11px] transition-colors ${lang === "fr" ? "bg-cyan-400 text-black" : "text-cyan-400 hover:bg-cyan-400/10"}`}
            >
              FR
            </button>
          </div>

          <div>
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="inline-block bg-green-600 hover:bg-green-500 transition-colors py-1 px-6 rounded-xl text-base uppercase font-semibold"
            >
              {t.nav.sendEmail}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
