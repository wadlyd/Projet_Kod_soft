import React, { useState } from "react";

const services = [
  {
    title: "Développement sur mesure",
    description:
      "Applications web et logiciels métiers conçus spécifiquement pour vos processus, de la conception à la mise en production.",
    items: [
      "Applications web (React, Node.js)",
      "Outils internes et logiciels métier",
      "Intégrations API et automatisations",
      "Maintenance et évolution continue",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
    ),
  },
  {
    title: "Data Analyst",
    description:
      "Analyse de vos données pour révéler des tendances, construire des tableaux de bord et éclairer vos décisions business.",
    items: [
      "Nettoyage et structuration des données",
      "Tableaux de bord et reporting automatisé",
      "Analyse exploratoire et détection de tendances",
      "Recommandations actionnables pour la décision",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    ),
  },
  {
    title: "Pipelines de données",
    description:
      "Développement et exploitation de pipelines de données robustes : ingestion, transformation et automatisation à l'échelle.",
    items: [
      "Ingestion (API, fichiers, bases de données)",
      "Transformation et orchestration (ETL/ELT)",
      "Automatisation et monitoring des flux",
      "Exploitation et maintenance en production",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 6.375c0 2.07-3.694 3.75-8.25 3.75S3.75 8.445 3.75 6.375m16.5 0c0-2.07-3.694-3.75-8.25-3.75S3.75 4.305 3.75 6.375m16.5 0v11.25c0 2.07-3.694 3.75-8.25 3.75s-8.25-1.68-8.25-3.75V6.375m16.5 3.75v3.75m-16.5-3.75v3.75m16.5 0v3.75c0 2.07-3.694 3.75-8.25 3.75s-8.25-1.68-8.25-3.75v-3.75m16.5 0c0 2.07-3.694 3.75-8.25 3.75s-8.25-1.68-8.25-3.75"
        />
      </svg>
    ),
  },
  {
    title: "Marketing Digital",
    description:
      "Une visibilité en ligne cohérente avec votre marque, pour attirer et convertir les bons prospects.",
    items: [
      "Référencement naturel (SEO)",
      "Gestion des réseaux sociaux",
      "Campagnes publicitaires ciblées",
      "Analyse de performance et reporting",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c2.849.717 5.661 1.72 8.36 2.98a23.85 23.85 0 004.413-3.015.75.75 0 000-1.194 23.85 23.85 0 00-4.413-3.014 45.13 45.13 0 00-8.36 2.98m8.36 3.234v-6.234m0 6.234a45.09 45.09 0 018.36 3.234m-8.36-9.468a45.09 45.09 0 008.36-3.234m-11.5 12.702c-1.665 0-3.146-.865-3.958-2.176M3 9.75c0 3.313 2.688 6 6 6"
        />
      </svg>
    ),
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  return (
    <section
      id="services"
      className="w-full bg-gray-950 text-white py-24 px-6 border-b-[1px] border-b-blue-600"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col items-center gap-4 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
            Nos services
          </h2>
          <p className="text-xl md:text-2xl font-bold text-cyan-400">
            Une offre structurée autour de quatre expertises
          </p>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
            Développement, analyse de données, pipelines et marketing
            digital : ces expertises sont mobilisables séparément ou
            conjointement, selon l'avancement et les besoins de votre
            projet.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {services.map((service, index) => (
              <button
                key={service.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`px-6 py-3 text-sm font-semibold uppercase rounded-full transition-colors ${
                  index === activeIndex
                    ? "bg-cyan-400 text-black"
                    : "border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>

        <div
          key={activeService.title}
          className="max-w-2xl mx-auto w-full flex flex-col gap-4 p-8 rounded-2xl bg-black/40 border border-cyan-400"
        >
          <div className="text-cyan-400">{activeService.icon}</div>
          <h4 className="text-xl font-bold">{activeService.title}</h4>
          <p className="text-gray-400 leading-relaxed">
            {activeService.description}
          </p>
          <ul className="flex flex-col gap-2 mt-2 pt-4 border-t border-blue-900/60">
            {activeService.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-gray-300"
              >
                <span className="text-cyan-400 mt-1">▹</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
