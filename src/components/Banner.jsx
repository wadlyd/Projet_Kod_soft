import React from "react";
import BannerIllustration from "./BannerIllustration";

const Banner = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 pt-16 pb-10">
      <div className="flex flex-col gap-6 max-w-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          <span className="text-white">
            Vos projets logiciels, menés à terme.
          </span>{" "}
          <span className="text-cyan-400">
            Vos données, enfin exploitables.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
          KODPROG conçoit vos applications sur mesure, structure vos données
          et met en place des pipelines fiables — un accompagnement complet,
          du développement à l'exploitation en production.
        </p>

        <div className="flex flex-wrap gap-4 mt-2">
          <a
            href="#contact"
            className="bg-cyan-400 hover:bg-cyan-300 transition-colors text-black px-6 py-3 text-base font-bold uppercase rounded-full"
          >
            Discuter de votre projet
          </a>
          <a
            href="#services"
            className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-colors px-6 py-3 text-base font-bold uppercase rounded-full"
          >
            Découvrir nos services
          </a>
        </div>
      </div>

      <div className="hidden md:flex flex-1 justify-center">
        <BannerIllustration />
      </div>
    </div>
  );
};

export default Banner;
