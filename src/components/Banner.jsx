import React from "react";
import BannerIllustration from "./BannerIllustration";

const Banner = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 pt-16 pb-10">
      <div className="flex flex-col gap-6 max-w-2xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight md:whitespace-nowrap">
          <span className="text-white">
            Penser. Construire.
          </span>{" "}
          <span className="text-cyan-400">
            Partager.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 leading-relaxed text-justify">
          KODPROG conçoit vos applications sur mesure, structure vos données
          et met en place des pipelines fiables - un accompagnement complet,
          du développement à l'exploitation en production.
        </p>

        <div className="flex flex-row gap-3 sm:gap-4 pt-4">
          <a
            href="#contact"
            className="flex-1 sm:flex-none flex items-center justify-center text-center bg-cyan-400 hover:bg-cyan-300 transition-colors text-black px-3 sm:px-6 py-3 text-xs sm:text-base font-bold uppercase rounded-full"
          >
            Discuter de votre projet
          </a>
          <a
            href="#services"
            className="flex-1 sm:flex-none flex items-center justify-center text-center border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-colors px-3 sm:px-6 py-3 text-xs sm:text-base font-bold uppercase rounded-full"
          >
            Découvrir nos services
          </a>
        </div>
      </div>

      <div className="flex flex-1 justify-center mt-8 lg:mt-0">
        <BannerIllustration />
      </div>
    </div>
  );
};

export default Banner;
