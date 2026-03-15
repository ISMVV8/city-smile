"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  MessageCircle,
  Heart,
} from "lucide-react";

const testimonials = [
  {
    name: "Sophie M.",
    age: 28,
    rating: 5,
    text: "Incroyable ! J'ai gagné 7 teintes en une seule séance. L'équipe est professionnelle et le cadre est magnifique. Mon sourire n'a jamais été aussi beau. Je recommande à 100% !",
    service: "Premium",
    teintes: 7,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    emoji: "✨",
    date: "Il y a 2 semaines",
  },
  {
    name: "Karim B.",
    age: 34,
    rating: 5,
    text: "Je suis venu pour le blanchiment express avant mon mariage. Résultat bluffant en seulement 30 minutes. Toute ma famille a remarqué la différence. Merci City Smile !",
    service: "Express",
    teintes: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    emoji: "💍",
    date: "Il y a 1 mois",
  },
  {
    name: "Julie D.",
    age: 31,
    rating: 5,
    text: "Expérience VIP du début à la fin. Le suivi personnalisé pendant 30 jours est un vrai plus. Mes dents n'ont jamais été aussi blanches et le résultat tient parfaitement.",
    service: "VIP",
    teintes: 9,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    emoji: "👑",
    date: "Il y a 3 semaines",
  },
  {
    name: "Thomas L.",
    age: 42,
    rating: 5,
    text: "Très sceptique au départ, je suis maintenant conquis. Aucune douleur, un résultat naturel et l'équipe est vraiment aux petits soins. J'aurais dû venir plus tôt !",
    service: "Premium",
    teintes: 6,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    emoji: "💪",
    date: "Il y a 1 semaine",
  },
  {
    name: "Amira K.",
    age: 26,
    rating: 5,
    text: "J'avais essayé plein de produits en pharmacie sans résultat. Ici, en une séance, j'ai vu la différence. Le rapport qualité-prix est imbattable. Je reviendrai pour la formule VIP !",
    service: "Express",
    teintes: 4,
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
    emoji: "🌟",
    date: "Il y a 5 jours",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4 fill-amber-400 text-amber-400"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const goTo = useCallback(
    (index: number, dir: "left" | "right") => {
      setDirection(dir);
      setActiveIndex(index);
    },
    []
  );

  const goNext = useCallback(() => {
    goTo((activeIndex + 1) % testimonials.length, "right");
  }, [activeIndex, goTo]);

  const goPrev = useCallback(() => {
    goTo(
      (activeIndex - 1 + testimonials.length) % testimonials.length,
      "left"
    );
  }, [activeIndex, goTo]);

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, goNext]);

  const active = testimonials[activeIndex];
  const serviceColor =
    active.service === "VIP"
      ? "bg-violet-100 text-violet-700"
      : active.service === "Premium"
      ? "bg-sky-100 text-sky-700"
      : "bg-emerald-100 text-emerald-700";

  return (
    <section
      id="avis"
      className="relative scroll-mt-16 overflow-hidden bg-[#f8fafb] py-28 lg:py-36"
    >
      {/* Background */}
      <div className="absolute -right-48 top-0 h-[500px] w-[500px] rounded-full bg-sky-50/60 blur-3xl" />
      <div className="absolute -left-48 bottom-0 h-[400px] w-[400px] rounded-full bg-violet-50/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <Badge
            variant="outline"
            className="mb-6 gap-2 rounded-full border-sky-200 bg-sky-50 px-4 py-2 text-sky-600"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            Avis clients
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Ils ont retrouvé{" "}
            <span className="bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">
              le sourire
            </span>
          </h2>
          <p className="mt-5 text-lg text-gray-500">
            Plus de 200 clients nous font confiance. Découvrez leurs
            expériences.
          </p>
        </div>

        {/* Main testimonial display */}
        <div className="mt-16">
          <div className="grid items-center gap-8 lg:grid-cols-5 lg:gap-12">
            {/* Left: Featured testimonial */}
            <div
              className="lg:col-span-3"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <Card className="relative overflow-hidden border-0 bg-white shadow-2xl ring-1 ring-gray-900/5">
                {/* Decorative quote background */}
                <div className="absolute -right-6 -top-6 text-sky-50">
                  <Quote className="h-40 w-40" strokeWidth={0.5} />
                </div>

                <CardContent className="relative p-8 sm:p-10">
                  {/* Top row: avatar + info */}
                  <div className="flex items-start gap-4">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl ring-2 ring-sky-100">
                      <Image
                        src={active.avatar}
                        alt={active.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold text-gray-900">
                          {active.name}
                        </h3>
                        <span className="text-xl">{active.emoji}</span>
                      </div>
                      <div className="mt-1 flex flex-wrap items-center gap-2">
                        <StarRating count={active.rating} />
                        <span className="text-xs text-gray-400">·</span>
                        <Badge
                          className={`border-0 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${serviceColor}`}
                        >
                          {active.service}
                        </Badge>
                        <span className="text-xs text-gray-400">·</span>
                        <span className="text-xs text-gray-400">
                          {active.date}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="mt-6 text-lg leading-relaxed text-gray-600 sm:text-xl sm:leading-relaxed">
                    &ldquo;{active.text}&rdquo;
                  </blockquote>

                  {/* Result badge */}
                  <div className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-sky-50 to-cyan-50 px-5 py-3 ring-1 ring-sky-100">
                    <Sparkles className="h-5 w-5 text-sky-500" />
                    <div>
                      <p className="text-sm font-bold text-gray-900">
                        +{active.teintes} teintes gagnées
                      </p>
                      <p className="text-xs text-gray-500">
                        Formule {active.service}
                      </p>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-6">
                    <div className="flex items-center gap-2">
                      {testimonials.map((_, i) => (
                        <button
                          key={i}
                          onClick={() =>
                            goTo(i, i > activeIndex ? "right" : "left")
                          }
                          className={`h-2 rounded-full transition-all duration-300 ${
                            i === activeIndex
                              ? "w-8 bg-gradient-to-r from-sky-500 to-cyan-400"
                              : "w-2 bg-gray-200 hover:bg-gray-300"
                          }`}
                          aria-label={`Voir avis ${i + 1}`}
                        />
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={goPrev}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-all hover:border-sky-300 hover:bg-sky-50 hover:text-sky-600"
                        aria-label="Avis précédent"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <button
                        onClick={goNext}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 text-white shadow-lg shadow-sky-500/25 transition-all hover:shadow-xl"
                        aria-label="Avis suivant"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right: Mini cards stack */}
            <div className="hidden space-y-4 lg:col-span-2 lg:block">
              {testimonials.map((t, i) => (
                <button
                  key={i}
                  onClick={() =>
                    goTo(i, i > activeIndex ? "right" : "left")
                  }
                  className={`flex w-full items-center gap-4 rounded-2xl p-4 text-left transition-all duration-300 ${
                    i === activeIndex
                      ? "bg-white shadow-lg ring-2 ring-sky-400 scale-[1.02]"
                      : "bg-white/60 ring-1 ring-gray-100 hover:bg-white hover:shadow-md hover:ring-sky-200"
                  }`}
                >
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                    {i === activeIndex && (
                      <div className="absolute inset-0 rounded-xl ring-2 ring-sky-400" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p className="truncate text-sm font-bold text-gray-900">
                        {t.name}
                      </p>
                      <span className="text-sm">{t.emoji}</span>
                    </div>
                    <p className="truncate text-xs text-gray-500">
                      &ldquo;{t.text.slice(0, 50)}...&rdquo;
                    </p>
                  </div>
                  <Badge
                    className={`shrink-0 border-0 px-2 py-0.5 text-[10px] font-bold ${
                      i === activeIndex
                        ? "bg-sky-100 text-sky-700"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    +{t.teintes}
                  </Badge>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom social proof bar */}
        <div className="mt-16 flex flex-col items-center justify-center gap-6 rounded-2xl bg-white px-8 py-6 shadow-sm ring-1 ring-gray-100 sm:flex-row sm:gap-10">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 4).map((t, i) => (
                <div
                  key={i}
                  className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-white"
                >
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="32px"
                  />
                </div>
              ))}
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-sky-500 text-[10px] font-bold text-white">
                +196
              </div>
            </div>
            <p className="text-sm text-gray-500">
              <strong className="text-gray-900">200+</strong> clients satisfaits
            </p>
          </div>
          <div className="hidden h-8 w-px bg-gray-200 sm:block" />
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <p className="text-sm text-gray-500">
              <strong className="text-gray-900">4.9/5</strong> note moyenne
            </p>
          </div>
          <div className="hidden h-8 w-px bg-gray-200 sm:block" />
          <div className="flex items-center gap-2">
            <Heart className="h-4 w-4 text-rose-500" />
            <p className="text-sm text-gray-500">
              <strong className="text-gray-900">98%</strong> recommandent City
              Smile
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
