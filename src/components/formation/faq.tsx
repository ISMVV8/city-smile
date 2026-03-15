"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Faut-il un diplôme pour suivre la formation ?",
    answer:
      "Non, aucun diplôme préalable n'est requis. La formation est ouverte à tous. Nous vous formons de zéro aux techniques professionnelles de blanchiment dentaire.",
  },
  {
    question: "La certification est-elle reconnue ?",
    answer:
      "Oui, vous recevez un certificat de compétences attestant de votre maîtrise des techniques de blanchiment dentaire esthétique. Ce certificat vous permet d'exercer légalement cette activité.",
  },
  {
    question: "Quel matériel dois-je acheter pour démarrer ?",
    answer:
      "Nous vous fournissons une liste complète du matériel nécessaire et nos recommandations de fournisseurs. Le budget de départ est d'environ 1 500€ à 3 000€ pour un kit complet professionnel.",
  },
  {
    question: "Y a-t-il un accompagnement après la formation ?",
    answer:
      "Oui, vous accédez à notre groupe alumni privé pour échanger avec d'autres professionnels formés par City Smile. Nous offrons également un accompagnement post-formation pour vous aider à lancer votre activité.",
  },
];

export default function FormationFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="bg-section-alt py-24 lg:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            FAQ Formation
          </p>
          <h2 className="mt-4 font-[var(--font-accent)] text-3xl font-bold text-foreground sm:text-4xl">
            Questions sur la formation
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-border bg-white card-shadow transition-all duration-300 hover:border-accent/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="pr-4 font-semibold text-foreground">{faq.question}</span>
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
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  openIndex === i
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-sm leading-relaxed text-muted">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
