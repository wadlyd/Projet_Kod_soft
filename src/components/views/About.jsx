import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const valueStyles = [
  { symbol: "○", symbolColor: "text-red-400" },
  { symbol: "□", symbolColor: "text-pink-400" },
  { symbol: "△", symbolColor: "text-green-400" },
];

const About = () => {
  const { t } = useLanguage();
  const values = t.about.values.map((value, index) => ({
    ...value,
    ...valueStyles[index],
  }));

  return (
    <section
      id="about"
      className="relative w-full bg-black text-white py-24 px-6 border-b-[1px] border-b-blue-600 overflow-hidden"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute -top-10 -left-10 text-[10rem] md:text-[16rem] leading-none font-bold text-red-400 opacity-10"
      >
        ○
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-1/3 -right-16 text-[10rem] md:text-[18rem] leading-none font-bold text-pink-400 opacity-10 rotate-12"
      >
        □
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute -bottom-16 left-1/4 text-[10rem] md:text-[16rem] leading-none font-bold text-green-400 opacity-10"
      >
        △
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-6 right-1/4 text-[10rem] md:text-[16rem] leading-none font-bold text-blue-400 opacity-10 -rotate-6"
      >
        +
      </span>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-14">
        <div className="flex flex-col items-center gap-4 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
            {t.about.eyebrow}
          </h2>
          <p className="text-xl md:text-2xl font-bold text-cyan-400">
            {t.about.tagline}
          </p>
          <p className="text-gray-300 text-lg leading-relaxed text-justify max-w-2xl">
            {t.about.paragraph1}
          </p>
          <p className="text-gray-400 leading-relaxed text-justify max-w-2xl">
            {t.about.paragraph2}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="flex flex-col gap-3 p-6 rounded-2xl bg-gray-950 border border-blue-900"
            >
              <h4 className="text-xl font-bold text-cyan-400 flex items-center gap-2">
                <span className={`${value.symbolColor} text-2xl leading-none`}>
                  {value.symbol}
                </span>
                {value.title}
              </h4>
              <p className="text-gray-400 leading-relaxed text-justify">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
