import React from "react";
import logo from "../assets/kodprog-logo-2-light.png";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-black text-gray-400 pt-16 pb-8 px-6 border-t border-blue-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="flex flex-col gap-2">
          <img src={logo} alt="KODPROG" className="h-[115px] w-auto self-start" />
          <p className="text-sm text-gray-500">
            {t.footer.tagline}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-cyan-400 uppercase text-sm font-semibold tracking-wide">
            {t.footer.servicesHeading}
          </h4>
          {t.services.items.map((service) => (
            <a
              key={service.title}
              href="#services"
              className="text-sm hover:text-cyan-400 transition-colors"
            >
              {service.title}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-cyan-400 uppercase text-sm font-semibold tracking-wide">
            {t.footer.agencyHeading}
          </h4>
          <a href="#about" className="text-sm hover:text-cyan-400 transition-colors">
            {t.about.eyebrow}
          </a>
          <a href="#vision" className="text-sm hover:text-cyan-400 transition-colors">
            {t.vision.title}
          </a>
          <a href="#contact" className="text-sm hover:text-cyan-400 transition-colors">
            {t.contact.title}
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-cyan-400 uppercase text-sm font-semibold tracking-wide">
            {t.footer.contactHeading}
          </h4>
          <a
            href="mailto:info@kodprog.com"
            className="text-sm hover:text-cyan-400 transition-colors"
          >
            info@kodprog.com
          </a>
          <div className="flex gap-4 mt-1">
            <a
              href="https://www.linkedin.com/in/wadlydugue"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-cyan-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 11.001-4.124 2.062 2.062 0 010 4.124zM7.114 20.452H3.56V9h3.554v11.452z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/kodprog_it"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-cyan-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 3.75H7.5a3.75 3.75 0 00-3.75 3.75v9a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75v-9a3.75 3.75 0 00-3.75-3.75z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM16.5 7.5h.008v.008h-.008V7.5z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-blue-900/60 text-sm text-center">
        © {year} KODPROG. {t.footer.rights}
      </div>
    </footer>
  );
};

export default Footer;
