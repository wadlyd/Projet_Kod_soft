import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const Vision = () => {
  const { t } = useLanguage();

  return (
    <section
      id="vision"
      className="w-full bg-black text-white py-24 px-6 border-b-[1px] border-b-blue-600"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
          {t.vision.title}
        </h2>
        <p className="text-xl md:text-2xl font-bold text-cyan-400">
          {t.vision.tagline}
        </p>
        <p className="text-gray-400 text-lg leading-relaxed text-justify max-w-2xl">
          {t.vision.paragraph}
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {t.vision.pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-gray-950 border border-blue-900"
          >
            <h4 className="text-xl font-bold text-cyan-400">
              {pillar.title}
            </h4>
            <p className="text-gray-400 leading-relaxed text-justify">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Vision;
