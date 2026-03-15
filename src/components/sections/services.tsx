"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Check,
  Clock,
  Sparkles,
  Star,
  Zap,
  Crown,
  ArrowRight,
  Shield,
  Gift,
  TrendingUp,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    id: "express",
    name: "Express",
    subtitle: "Coup d'éclat rapide",
    duration: "30 min",
    sessions: "1 séance LED",
    price: 79,
    teintes: "+4 teintes",
    description:
      "Parfait avant un événement. Résultats visibles immédiatement pour un sourire rafraîchi et lumineux.",
    features: [
      "1 séance de LED professionnelle",
      "Gel blanchissant certifié",
      "Résultat immédiat visible",
      "100% sans douleur",
    ],
    popular: false,
    image:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80",
    imageAlt: "Traitement de blanchiment dentaire express",
    icon: Zap,
    gradient: "from-sky-400 to-blue-500",
    lightGradient: "from-sky-50 to-blue-50",
    accent: "sky",
  },
  {
    id: "premium",
    name: "Premium",
    subtitle: "Le plus demandé",
    duration: "1h",
    sessions: "2 séances LED",
    price: 149,
    teintes: "+6 teintes",
    description:
      "Notre formule star. Un blanchiment en profondeur pour un sourire éclatant et un résultat durable.",
    features: [
      "2 séances de LED intensives",
      "Gel premium haute concentration",
      "Résultat jusqu'à +6 teintes",
      "Kit d'entretien offert",
      "Consultation personnalisée",
    ],
    popular: true,
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80",
    imageAlt: "Soin dentaire premium en cabinet moderne",
    icon: Star,
    gradient: "from-sky-500 to-cyan-400",
    lightGradient: "from-sky-50 to-cyan-50",
    accent: "sky",
  },
  {
    id: "vip",
    name: "VIP",
    subtitle: "L'expérience ultime",
    duration: "1h30",
    sessions: "3 séances LED",
    price: 249,
    teintes: "+9 teintes",
    description:
      "Le traitement le plus complet. Résultat maximal avec suivi personnalisé pendant 30 jours.",
    features: [
      "3 séances de LED exclusives",
      "Gel premium formule exclusive",
      "Résultat jusqu'à +9 teintes",
      "Kit d'entretien premium offert",
      "Suivi personnalisé 30 jours",
      "Retouche gratuite sous 3 mois",
    ],
    popular: false,
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
    imageAlt: "Expérience VIP de blanchiment dentaire haut de gamme",
    icon: Crown,
    gradient: "from-violet-500 to-purple-600",
    lightGradient: "from-violet-50 to-purple-50",
    accent: "violet",
  },
];

export default function Services() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="services" className="relative scroll-mt-16 overflow-hidden bg-white py-28 lg:py-36">
      {/* Background decorations */}
      <div className="absolute left-0 top-0 h-full w-full">
        <div className="absolute -left-64 top-1/4 h-[500px] w-[500px] rounded-full bg-sky-50/80 blur-3xl" />
        <div className="absolute -right-64 bottom-1/4 h-[500px] w-[500px] rounded-full bg-violet-50/50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <Badge
            variant="outline"
            className="mb-6 gap-2 rounded-full border-sky-200 bg-sky-50 px-4 py-2 text-sky-600"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Nos formules
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Trouvez la formule{" "}
            <span className="bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">
              parfaite
            </span>
          </h2>
          <p className="mt-5 text-lg text-gray-500">
            3 formules adaptées à vos besoins. Résultats garantis dès la
            première séance.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            const isHovered = hoveredId === service.id;

            return (
              <div
                key={service.id}
                className="group relative"
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Popular glow effect */}
                {service.popular && (
                  <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-b from-sky-400 via-cyan-400 to-sky-500 opacity-100 blur-[1px]" />
                )}

                <div
                  className={`relative flex h-full flex-col overflow-hidden rounded-3xl bg-white transition-all duration-500 ${
                    service.popular
                      ? "shadow-2xl shadow-sky-500/10"
                      : "border border-gray-100 shadow-lg hover:shadow-2xl hover:shadow-sky-500/5 hover:border-sky-200"
                  } ${isHovered && !service.popular ? "-translate-y-2" : ""}`}
                >
                  {/* Popular ribbon */}
                  {service.popular && (
                    <div className="bg-gradient-to-r from-sky-500 to-cyan-400 px-6 py-2.5 text-center">
                      <p className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-white">
                        <Star className="h-3 w-3 fill-white" />
                        Le plus populaire
                        <Star className="h-3 w-3 fill-white" />
                      </p>
                    </div>
                  )}

                  {/* Image section */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(min-width: 1024px) 33vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Floating badges on image */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg`}
                        >
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="text-lg font-bold text-white">
                            {service.name}
                          </p>
                          <p className="text-xs text-white/80">
                            {service.subtitle}
                          </p>
                        </div>
                      </div>
                      <div className="rounded-full bg-white/20 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                        <Clock className="mr-1 inline h-3 w-3" />
                        {service.duration}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-7">
                    {/* Price */}
                    <div className="flex items-end justify-between">
                      <div className="flex items-baseline gap-1">
                        <span className="text-5xl font-extrabold tracking-tight text-gray-900">
                          {service.price}
                        </span>
                        <span className="text-xl font-medium text-gray-400">
                          €
                        </span>
                      </div>
                      <Badge
                        className={`border-0 px-3 py-1 text-xs font-bold ${
                          service.id === "vip"
                            ? "bg-violet-100 text-violet-700"
                            : "bg-sky-100 text-sky-700"
                        }`}
                      >
                        <TrendingUp className="mr-1 h-3 w-3" />
                        {service.teintes}
                      </Badge>
                    </div>

                    {/* Sessions info */}
                    <div
                      className={`mt-4 rounded-xl bg-gradient-to-r ${service.lightGradient} p-3`}
                    >
                      <p className="flex items-center gap-2 text-sm font-medium text-gray-700">
                        <Sparkles
                          className={`h-4 w-4 ${
                            service.id === "vip"
                              ? "text-violet-500"
                              : "text-sky-500"
                          }`}
                        />
                        {service.sessions}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="mt-4 text-sm leading-relaxed text-gray-500">
                      {service.description}
                    </p>

                    {/* Divider */}
                    <div className="my-5 border-t border-dashed border-gray-200" />

                    {/* Features */}
                    <ul className="flex-1 space-y-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm text-gray-600"
                        >
                          <div
                            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                              service.id === "vip"
                                ? "bg-violet-100"
                                : "bg-sky-100"
                            }`}
                          >
                            <Check
                              className={`h-3 w-3 ${
                                service.id === "vip"
                                  ? "text-violet-600"
                                  : "text-sky-600"
                              }`}
                              strokeWidth={3}
                            />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      href="#reservation"
                      className={`mt-7 flex h-14 items-center justify-center gap-2 rounded-2xl text-sm font-bold transition-all duration-300 ${
                        service.popular
                          ? "bg-gradient-to-r from-sky-500 to-cyan-400 text-white shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/30 hover:brightness-110"
                          : service.id === "vip"
                          ? "bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg shadow-violet-500/20 hover:shadow-xl hover:shadow-violet-500/30 hover:brightness-110"
                          : "border-2 border-gray-200 text-gray-900 hover:border-sky-400 hover:bg-sky-50 hover:text-sky-600"
                      }`}
                    >
                      Choisir cette formule
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom trust bar */}
        <div className="mt-16 flex flex-col items-center justify-center gap-8 rounded-2xl border border-gray-100 bg-gray-50/50 px-8 py-6 sm:flex-row sm:gap-12">
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100">
              <Shield className="h-4 w-4 text-green-600" />
            </div>
            <span>
              <strong className="text-gray-900">Sans douleur</strong> — 100%
              indolore
            </span>
          </div>
          <div className="hidden h-8 w-px bg-gray-200 sm:block" />
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100">
              <TrendingUp className="h-4 w-4 text-sky-600" />
            </div>
            <span>
              <strong className="text-gray-900">Résultats garantis</strong> — dès
              la 1ère séance
            </span>
          </div>
          <div className="hidden h-8 w-px bg-gray-200 sm:block" />
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100">
              <Gift className="h-4 w-4 text-amber-600" />
            </div>
            <span>
              <strong className="text-gray-900">Devis gratuit</strong> — sur
              demande
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
