"use client";

import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  HelpCircle,
  ChevronDown,
  Sparkles,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  Shield,
  Smile,
  Timer,
  AlertCircle,
  CalendarCheck,
} from "lucide-react";

const faqs = [
  {
    question: "Le blanchiment dentaire est-il douloureux ?",
    answer:
      "Non, notre procédé est totalement indolore. Nous utilisons un gel professionnel doux combiné à la technologie LED qui n'agresse pas l'émail. Certains clients peuvent ressentir une légère sensibilité temporaire, qui disparaît en quelques heures.",
    icon: Shield,
    color: "from-emerald-500 to-teal-500",
    lightBg: "bg-emerald-50",
    tag: "Sécurité",
  },
  {
    question: "Combien de temps durent les résultats ?",
    answer:
      "Les résultats durent en moyenne 6 à 12 mois, selon votre hygiène bucco-dentaire et vos habitudes alimentaires. Le kit d'entretien fourni avec nos formules Premium et VIP vous aide à prolonger les résultats.",
    icon: Timer,
    color: "from-sky-500 to-cyan-400",
    lightBg: "bg-sky-50",
    tag: "Durabilité",
  },
  {
    question: "Le blanchiment abîme-t-il l'émail des dents ?",
    answer:
      "Non. Notre technologie LED et nos gels professionnels sont conçus pour être sans danger pour l'émail dentaire. Le procédé agit uniquement sur les pigments de coloration sans altérer la structure de la dent.",
    icon: Shield,
    color: "from-violet-500 to-purple-500",
    lightBg: "bg-violet-50",
    tag: "Sécurité",
  },
  {
    question: "Combien de teintes puis-je gagner ?",
    answer:
      "En moyenne, nos clients gagnent entre 5 et 9 teintes de blancheur dès la première séance. Le résultat dépend de la teinte initiale et de la formule choisie. La formule VIP offre les résultats les plus spectaculaires.",
    icon: Sparkles,
    color: "from-amber-500 to-orange-500",
    lightBg: "bg-amber-50",
    tag: "Résultats",
  },
  {
    question: "Y a-t-il des contre-indications ?",
    answer:
      "Le blanchiment est déconseillé aux femmes enceintes ou allaitantes, aux mineurs de moins de 18 ans, et aux personnes portant des appareils dentaires. Une consultation préalable gratuite nous permet de vérifier votre éligibilité.",
    icon: AlertCircle,
    color: "from-rose-500 to-pink-500",
    lightBg: "bg-rose-50",
    tag: "Santé",
  },
  {
    question: "Comment prendre rendez-vous ?",
    answer:
      "Vous pouvez réserver directement via notre formulaire en ligne, par téléphone au +32 2 123 45 67, ou par email à contact@citysmile.be. Nous vous confirmerons votre créneau sous 24h.",
    icon: CalendarCheck,
    color: "from-sky-500 to-blue-500",
    lightBg: "bg-sky-50",
    tag: "Pratique",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
    <section id="faq" className="relative scroll-mt-16 overflow-hidden bg-white py-28 lg:py-36">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Background */}
      <div className="absolute -right-64 top-1/4 h-[500px] w-[500px] rounded-full bg-sky-50/60 blur-3xl" />
      <div className="absolute -left-64 bottom-1/4 h-[400px] w-[400px] rounded-full bg-violet-50/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <Badge
            variant="outline"
            className="mb-6 gap-2 rounded-full border-sky-200 bg-sky-50 px-4 py-2 text-sky-600"
          >
            <HelpCircle className="h-3.5 w-3.5" />
            FAQ
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Vos{" "}
            <span className="bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">
              questions
            </span>
            , nos réponses
          </h2>
          <p className="mt-5 text-lg text-gray-500">
            Tout ce que vous devez savoir sur le blanchiment dentaire chez City
            Smile.
          </p>
        </div>

        {/* FAQ + Contact sidebar */}
        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          {/* FAQ accordion */}
          <div className="space-y-3 lg:col-span-2">
            {faqs.map((faq, i) => {
              const Icon = faq.icon;
              const isOpen = openIndex === i;

              return (
                <Card
                  key={i}
                  className={`overflow-hidden border-0 transition-all duration-500 ${
                    isOpen
                      ? "shadow-xl ring-2 ring-sky-200"
                      : "shadow-sm ring-1 ring-gray-100 hover:shadow-md hover:ring-sky-100"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center gap-4 p-5 text-left sm:p-6"
                  >
                    {/* Icon */}
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${faq.color} shadow-sm transition-transform duration-300 ${
                        isOpen ? "scale-110" : ""
                      }`}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </div>

                    {/* Question + tag */}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3
                          className={`text-base font-bold transition-colors sm:text-lg ${
                            isOpen ? "text-sky-600" : "text-gray-900"
                          }`}
                        >
                          {faq.question}
                        </h3>
                      </div>
                      <Badge
                        className={`mt-1 border-0 px-2 py-0 text-[10px] font-semibold uppercase tracking-wider ${faq.lightBg} text-gray-500`}
                      >
                        {faq.tag}
                      </Badge>
                    </div>

                    {/* Chevron */}
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "bg-sky-100 text-sky-600 rotate-180"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-all duration-500 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-gray-100 px-5 pb-6 pt-4 sm:px-6 sm:pl-[4.75rem]">
                        <p className="text-sm leading-relaxed text-gray-500 sm:text-base sm:leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Contact sidebar */}
          <div className="space-y-4">
            {/* Still have questions card */}
            <Card className="overflow-hidden border-0 bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl">
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <Smile className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">
                  Encore des questions ?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  Notre équipe est disponible pour répondre à toutes vos
                  questions. N&apos;hésitez pas à nous contacter.
                </p>
                <Link
                  href="#reservation"
                  className="mt-5 flex h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-400 text-sm font-bold text-white shadow-lg shadow-sky-500/25 transition-all hover:shadow-xl hover:brightness-110"
                >
                  <MessageCircle className="h-4 w-4" />
                  Nous contacter
                </Link>
              </CardContent>
            </Card>

            {/* Contact info cards */}
            <Card className="border-0 shadow-sm ring-1 ring-gray-100">
              <CardContent className="space-y-4 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50">
                    <Phone className="h-4 w-4 text-sky-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Téléphone</p>
                    <p className="text-sm font-bold text-gray-900">
                      +32 2 123 45 67
                    </p>
                  </div>
                </div>
                <div className="border-t border-dashed border-gray-100" />
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50">
                    <Mail className="h-4 w-4 text-violet-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Email</p>
                    <p className="text-sm font-bold text-gray-900">
                      contact@citysmile.be
                    </p>
                  </div>
                </div>
                <div className="border-t border-dashed border-gray-100" />
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">
                    <Clock className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Horaires</p>
                    <p className="text-sm font-bold text-gray-900">
                      Lun — Sam : 9h — 19h
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick stat */}
            <div className="rounded-2xl bg-gradient-to-r from-sky-50 to-cyan-50 p-5 text-center ring-1 ring-sky-100">
              <p className="text-3xl font-extrabold text-gray-900">
                &lt;24h
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Temps de réponse moyen
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
