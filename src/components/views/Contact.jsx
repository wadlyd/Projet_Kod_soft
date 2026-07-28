import React, { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xlgqavvy";

const Contact = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="w-full bg-gray-950 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col items-center gap-4 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
            Contact
          </h2>
          <p className="text-xl md:text-2xl font-bold text-cyan-400">
            Discutons de votre projet
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              step: "1",
              title: "Échange",
              description:
                "Un premier échange pour comprendre votre besoin, vos contraintes et vos objectifs.",
            },
            {
              step: "2",
              title: "Proposition",
              description:
                "Une proposition détaillant le périmètre, l'approche technique et les délais.",
            },
            {
              step: "3",
              title: "Réalisation",
              description:
                "Développement, livraison et suivi jusqu'à la mise en production.",
            },
          ].map((s) => (
            <div
              key={s.step}
              className="flex flex-col items-center text-center gap-2"
            >
              <span className="text-3xl font-bold text-cyan-400">
                {s.step}
              </span>
              <h4 className="font-bold">{s.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Nom"
              required
              className="bg-black/40 border border-blue-900 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="bg-black/40 border border-blue-900 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
            />
            <textarea
              name="message"
              placeholder="Votre message"
              rows={5}
              required
              className="bg-black/40 border border-blue-900 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 resize-none"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-green-600 hover:bg-green-500 transition-colors py-3 px-6 rounded-xl text-base uppercase font-semibold disabled:opacity-50"
            >
              {status === "sending" ? "Envoi..." : "Envoyer le message"}
            </button>
            {status === "success" && (
              <p className="text-cyan-400">Message envoyé, merci !</p>
            )}
            {status === "error" && (
              <p className="text-red-400">
                Une erreur est survenue. Réessayez ou écrivez-nous directement
                par email.
              </p>
            )}
          </form>

          <div className="flex flex-col gap-6 justify-center">
            <a
              href="mailto:kodprogit@gmail.com"
              className="flex items-center gap-3 text-lg hover:text-cyan-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              kodprogit@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/wadlydugue"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lg hover:text-cyan-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 11.001-4.124 2.062 2.062 0 010 4.124zM7.114 20.452H3.56V9h3.554v11.452z" />
              </svg>
              linkedin.com/in/wadlydugue
            </a>
            <a
              href="https://www.instagram.com/kodprog_it"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lg hover:text-cyan-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
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
              instagram.com/kodprog_it
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
