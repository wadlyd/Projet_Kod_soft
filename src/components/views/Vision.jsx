import React from "react";

const pillars = [
  {
    title: "Accessibilité",
    description:
      "Rendre l'expertise technique et data accessible aux PME et indépendants, pas seulement aux grands groupes.",
  },
  {
    title: "Transparence",
    description:
      "Un accompagnement clair, sans jargon inutile ni coûts cachés, à chaque étape du projet.",
  },
  {
    title: "Long terme",
    description:
      "Construire des relations durables avec nos clients, au-delà de la simple livraison d'un projet.",
  },
];

const Vision = () => {
  return (
    <section
      id="vision"
      className="w-full bg-black text-white py-24 px-6 border-b-[1px] border-b-blue-600"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
          Notre vision
        </h2>
        <p className="text-xl md:text-2xl font-bold text-cyan-400">
          Une expertise exigeante, accessible à toutes les entreprises
        </p>
        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
          Nous pensons que la rigueur technique et l'exploitation
          intelligente de la donnée ne devraient pas être réservées aux
          grandes structures. Notre vision : proposer un accompagnement de
          haut niveau, porté par une organisation légère, pour que chaque
          entreprise puisse construire des outils solides et piloter ses
          décisions par la donnée.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-gray-950 border border-blue-900"
          >
            <h4 className="text-xl font-bold text-cyan-400">
              {pillar.title}
            </h4>
            <p className="text-gray-400 leading-relaxed">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Vision;
