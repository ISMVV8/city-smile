"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sparkles,
  Shield,
  Zap,
  Eye,
  BadgeCheck,
  Heart,
  Award,
  Clock,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";

const usps = [
  {
    icon: Zap,
    title: "Technologie LED dernière génération",
    description:
      "Nos lampes LED professionnelles offrent un blanchiment plus efficace, plus rapide et plus sûr que les méthodes traditionnelles.",
    stat: "2x",
    statLabel: "plus rapide",
    gradient: "from-sky-500 to-cyan-400",
    lightBg: "bg-sky-50",
    iconColor: "text-sky-600",
  },
  {
    icon: Eye,
    title: "Résultats dès la 1ère séance",
    description:
      "Constatez la différence immédiatement. Nos clients gagnent en moyenne 5 à 9 teintes dès leur première visite.",
    stat: "+7",
    statLabel: "teintes en moyenne",
    gradient: "from-violet-500 to-purple-500",
    lightBg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    icon: Heart,
    title: "100% sans douleur",
    description:
      "Notre procédé est totalement indolore. Détendez-vous pendant que notre technologie fait le travail.",
    stat: "0",
    statLabel: "douleur",
    gradient: "from-rose-500 to-pink-500",
    lightBg: "bg-rose-50",
    iconColor: "text-rose-600",
  },
  {
    icon: Shield,
    title: "Prix transparents",
    description:
      "Pas de surprises. Nos tarifs sont affichés et incluent tout : consultation, traitement et kit d'entretien.",
    stat: "100%",
    statLabel: "transparent",
    gradient: "from-emerald-500 to-teal-500",
    lightBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
];

const metrics = [
  { value: "98%", label: "Satisfaction client", icon: Star },
  { value: "200+", label: "Clients traités", icon: Users },
  { value: "4.9/5", label: "Note moyenne", icon: Award },
  { value: "<24h", label: "Confirmation RDV", icon: Clock },
];

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-white py-28 lg:py-36">
      {/* Background */}
      <div className="absolute -left-64 top-1/3 h-[500px] w-[500px] rounded-full bg-sky-50/60 blur-3xl" />
      <div className="absolute -right-64 bottom-0 h-[400px] w-[400px] rounded-full bg-violet-50/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <Badge
            variant="outline"
            className="mb-6 gap-2 rounded-full border-sky-200 bg-sky-50 px-4 py-2 text-sky-600"
          >
            <BadgeCheck className="h-3.5 w-3.5" />
            Pourquoi nous choisir
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            L&apos;excellence{" "}
            <span className="bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">
              City Smile
            </span>
          </h2>
          <p className="mt-5 text-lg text-gray-500">
            Une approche premium du blanchiment dentaire, avec des résultats
            garantis et un service irréprochable.
          </p>
        </div>

        {/* Main grid: USPs + Image */}
        <div className="mt-20 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* USP Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {usps.map((usp) => {
              const Icon = usp.icon;
              return (
                <Card
                  key={usp.title}
                  className="group relative overflow-hidden border-0 shadow-md ring-1 ring-gray-100 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:ring-sky-200"
                >
                  <CardContent className="p-5">
                    {/* Icon + stat row */}
                    <div className="flex items-start justify-between">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${usp.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110`}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-extrabold text-gray-900">
                          {usp.stat}
                        </p>
                        <p className="text-[10px] uppercase tracking-wider text-gray-400">
                          {usp.statLabel}
                        </p>
                      </div>
                    </div>

                    {/* Text */}
                    <h3 className="mt-4 text-base font-bold text-gray-900">
                      {usp.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">
                      {usp.description}
                    </p>

                    {/* Bottom accent line */}
                    <div
                      className={`mt-4 h-1 w-12 rounded-full bg-gradient-to-r ${usp.gradient} transition-all duration-500 group-hover:w-full`}
                    />
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Right side — Image + floating elements */}
          <div className="relative hidden lg:block">
            {/* Main image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-gray-900/5">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80"
                alt="Cabinet dentaire moderne et lumineux City Smile à Bruxelles"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              {/* Quote overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-lg font-semibold italic text-white">
                  &ldquo;Votre sourire est notre priorité&rdquo;
                </p>
                <p className="mt-1 text-sm text-white/70">
                  — L&apos;équipe City Smile
                </p>
              </div>
            </div>

            {/* Floating card — top right */}
            <div className="absolute -right-4 top-6 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-gray-100">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3 w-3 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-xs font-semibold text-gray-900">
                    4.9/5 sur Google
                  </p>
                </div>
              </div>
            </div>

            {/* Floating card — bottom left */}
            <div className="absolute -left-6 bottom-32 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-gray-100">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-cyan-400">
                  <TrendingUp className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-lg font-extrabold text-gray-900">200+</p>
                  <p className="text-xs text-gray-500">Clients satisfaits</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom metrics bar */}
        <div className="mt-20 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.label}
                className="group rounded-2xl bg-gray-50/80 p-6 text-center ring-1 ring-gray-100 transition-all duration-300 hover:bg-white hover:shadow-lg hover:ring-sky-200"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5 text-sky-600" />
                </div>
                <p className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900">
                  {metric.value}
                </p>
                <p className="mt-1 text-xs font-medium text-gray-500">
                  {metric.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
