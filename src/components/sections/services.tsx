"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Check, Clock, Sparkles, Star, Zap } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

const services = [
  {
    id: "express",
    name: "Blanchiment Express",
    duration: "30 min",
    price: "79",
    description:
      "Idéal pour un coup d'éclat rapide. Résultats visibles immédiatement pour un sourire rafraîchi.",
    features: [
      "1 séance de LED",
      "Gel professionnel",
      "Résultat immédiat",
      "Sans douleur",
    ],
    popular: false,
    intensity: 40,
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80",
    imageAlt: "Traitement de blanchiment dentaire express",
    icon: Zap,
  },
  {
    id: "premium",
    name: "Blanchiment Premium",
    duration: "1h",
    price: "149",
    description:
      "Notre formule la plus demandée. Un blanchiment en profondeur pour un sourire éclatant et durable.",
    features: [
      "2 séances de LED",
      "Gel premium haute concentration",
      "Résultat jusqu'à +6 teintes",
      "Kit d'entretien offert",
    ],
    popular: true,
    intensity: 70,
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80",
    imageAlt: "Soin dentaire premium en cabinet moderne",
    icon: Star,
  },
  {
    id: "vip",
    name: "Blanchiment VIP",
    duration: "1h30",
    price: "249",
    description:
      "L'expérience ultime. Un traitement complet avec suivi personnalisé pour un résultat maximal.",
    features: [
      "3 séances de LED",
      "Gel premium exclusif",
      "Résultat jusqu'à +9 teintes",
      "Kit d'entretien premium",
      "Suivi personnalisé 30 jours",
    ],
    popular: false,
    intensity: 100,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
    imageAlt: "Expérience VIP de blanchiment dentaire haut de gamme",
    icon: Sparkles,
  },
];

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const Icon = service.icon;

  return (
    <Card
      className={`relative flex flex-col overflow-hidden border-0 bg-white transition-all duration-500 hover:-translate-y-2 ${
        service.popular
          ? "ring-2 ring-accent shadow-lg shadow-accent/10"
          : "ring-1 ring-foreground/10 hover:ring-accent/40 hover:shadow-xl"
      }`}
    >
      {service.popular && (
        <div className="absolute right-4 top-4 z-10">
          <Badge className="bg-accent text-white border-0 px-3 py-1 text-xs font-bold uppercase tracking-wider">
            Le plus populaire
          </Badge>
        </div>
      )}

      {/* Service Image */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover/card:scale-110"
          sizes="(min-width: 768px) 33vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm">
            <Icon className="h-5 w-5 text-accent" />
          </div>
          <Badge variant="secondary" className="bg-white/90 text-foreground backdrop-blur-sm border-0">
            <Clock className="mr-1 h-3 w-3" />
            {service.duration}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-0">
        <CardTitle className="text-xl font-bold text-foreground">
          {service.name}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-5 pt-2">
        {/* Price */}
        <div className="flex items-baseline gap-1">
          <span className="font-[var(--font-accent)] text-5xl font-bold text-accent">
            {service.price}
          </span>
          <span className="text-lg text-muted">€</span>
        </div>

        {/* Intensity gauge */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted">Intensité du traitement</span>
            <span className="font-semibold text-accent">{service.intensity}%</span>
          </div>
          <Progress value={service.intensity} className="[&_[data-slot=progress-track]]:h-2 [&_[data-slot=progress-track]]:bg-accent/10 [&_[data-slot=progress-indicator]]:bg-accent [&_[data-slot=progress-indicator]]:rounded-full [&_[data-slot=progress-track]]:rounded-full" />
        </div>

        <p className="text-sm leading-relaxed text-muted">
          {service.description}
        </p>

        {/* Features */}
        <ul className="flex-1 space-y-2.5">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                <Check className="h-3 w-3 text-accent" strokeWidth={3} />
              </div>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="border-0 bg-transparent px-4 pb-6 pt-0">
        <Link
          href="#reservation"
          className={`flex h-12 w-full items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 ${
            service.popular
              ? "bg-accent text-white shadow-lg shadow-accent/25 hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/30"
              : "border border-foreground/15 text-foreground hover:bg-accent hover:text-white hover:border-accent hover:shadow-lg hover:shadow-accent/20"
          }`}
        >
          Réserver cette formule
        </Link>
      </CardFooter>
    </Card>
  );
}

export default function Services() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <section id="services" className="scroll-mt-16 bg-[#f8fafb] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge variant="outline" className="border-accent/30 text-accent px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
            Nos services
          </Badge>
          <h2 className="mt-6 font-[var(--font-accent)] text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Choisissez votre formule
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Des formules adaptées à vos besoins et votre budget. Devis
            personnalisé disponible sur demande.
          </p>
        </div>

        {/* Mobile Tabs */}
        <div className="mt-12 md:hidden">
          <Tabs defaultValue="express" onValueChange={setActiveTab}>
            <TabsList className="w-full">
              {services.map((s) => (
                <TabsTrigger key={s.id} value={s.id} className="flex-1 text-xs">
                  {s.name.replace("Blanchiment ", "")}
                </TabsTrigger>
              ))}
            </TabsList>
            {services.map((s) => (
              <TabsContent key={s.id} value={s.id} className="mt-6">
                <ServiceCard service={s} />
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Desktop Grid */}
        <div className="mt-16 hidden gap-8 md:grid md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
