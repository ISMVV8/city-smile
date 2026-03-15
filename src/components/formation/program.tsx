"use client";

import { useState } from "react";

const modules = [
  {
    title: "Module 1 — Introduction au blanchiment dentaire",
    duration: "2h",
    content: [
      "Histoire et évolution des techniques de blanchiment",
      "Anatomie dentaire et structure de l'émail",
      "Les différents types de coloration dentaire",
      "Cadre réglementaire et obligations légales",
    ],
  },
  {
    title: "Module 2 — Les produits et équipements",
    duration: "3h",
    content: [
      "Les gels de blanchiment : composition et concentrations",
      "La technologie LED : fonctionnement et avantages",
      "Choix et entretien du matériel professionnel",
      "Normes d'hygiène et de sécurité",
    ],
  },
  {
    title: "Module 3 — Protocole de traitement",
    duration: "4h",
    content: [
      "Consultation et évaluation du patient",
      "Prise de teinte et documentation photographique",
      "Le protocole étape par étape",
      "Gestion des sensibilités et contre-indications",
      "Conseils post-traitement et suivi client",
    ],
  },
  {
    title: "Module 4 — Pratique supervisée",
    duration: "4h",
    content: [
      "Mise en situation réelle sur modèles",
      "Maîtrise du geste technique",
      "Gestion du temps et du confort client",
      "Feedback et corrections personnalisées",
    ],
  },
  {
    title: "Module 5 — Lancer votre activité",
    duration: "2h",
    content: [
      "Création de votre business plan",
      "Stratégie marketing et acquisition clients",
      "Tarification et gestion financière",
      "Présence en ligne et réseaux sociaux",
    ],
  },
];

export default function Program() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="programme" className="scroll-mt-16 bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            Programme détaillé
          </p>
          <h2 className="mt-4 font-[var(--font-accent)] text-3xl font-bold text-foreground sm:text-4xl">
            15 heures de formation intensive
          </h2>
          <p className="mt-4 text-muted">
            Un programme structuré mêlant théorie et pratique pour une maîtrise
            complète.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {modules.map((mod, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-border bg-white card-shadow transition-all duration-300 hover:border-accent/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-foreground">{mod.title}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-accent">{mod.duration}</span>
                  <svg
                    className={`h-5 w-5 shrink-0 text-accent transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  openIndex === i
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <ul className="space-y-2 px-6 pb-5">
                    {mod.content.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted"
                      >
                        <svg
                          className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
