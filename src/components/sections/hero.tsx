"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Star, Clock, Users, ChevronRight, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-sky-50/50 via-white to-white">
      {/* Background decorations */}
      <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-sky-100/60 blur-3xl" />
      <div className="absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-50/40 blur-3xl" />
      <div className="absolute left-1/2 top-1/3 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-cyan-50/30 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <div className="max-w-2xl">
            <Badge variant="outline" className="mb-6 gap-2 rounded-full border-sky-200 bg-sky-50 px-4 py-2 text-sky-700">
              <Sparkles className="h-3.5 w-3.5" />
              N°1 du blanchiment dentaire à Bruxelles
            </Badge>

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl xl:text-7xl">
              Un sourire
              <br />
              <span className="bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">
                éclatant
              </span>
              <br />
              vous attend
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-500 sm:text-xl">
              Résultats visibles dès la première séance. Technologie LED de
              dernière génération, sans douleur, au cœur de Bruxelles.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link href="#reservation" className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-sky-500 px-8 text-base font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:bg-sky-600 hover:shadow-xl hover:shadow-sky-500/30">
                  Réserver maintenant
                  <ChevronRight className="h-4 w-4" />
                </Link>
              <Link href="#services" className="inline-flex h-14 items-center justify-center rounded-full border border-gray-200 px-8 text-base font-semibold text-gray-900 transition-all hover:border-sky-300 hover:text-sky-600">
                  Découvrir nos services
                </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80",
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80",
                ].map((src, i) => (
                  <div key={i} className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow-sm">
                    <Image src={src} alt="Client satisfait" fill className="object-cover" sizes="40px" />
                  </div>
                ))}
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-sky-500 text-xs font-bold text-white shadow-sm">
                  +196
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-1 text-sm font-bold text-gray-900">4.9</span>
                </div>
                <p className="text-sm text-gray-500">200+ clients satisfaits</p>
              </div>
            </div>
          </div>

          {/* Right — Image + floating cards */}
          <div className="relative hidden lg:block">
            {/* Main image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-gray-900/5">
              <Image
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=80"
                alt="Sourire éclatant après blanchiment dentaire City Smile"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Floating card — top right */}
            <Card className="absolute -right-4 top-8 animate-bounce-slow border-0 bg-white/95 shadow-xl backdrop-blur-sm">
              <CardContent className="flex items-center gap-3 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  <Shield className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Sans douleur</p>
                  <p className="text-xs text-gray-500">100% indolore</p>
                </div>
              </CardContent>
            </Card>

            {/* Floating card — bottom left */}
            <Card className="absolute -left-6 bottom-12 border-0 bg-white/95 shadow-xl backdrop-blur-sm">
              <CardContent className="flex items-center gap-3 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100">
                  <Sparkles className="h-5 w-5 text-sky-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">+9 teintes</p>
                  <p className="text-xs text-gray-500">En une seule séance</p>
                </div>
              </CardContent>
            </Card>

            {/* Stats bar — bottom */}
            <Card className="absolute -bottom-6 left-8 right-8 border-0 bg-white/95 shadow-xl backdrop-blur-sm">
              <CardContent className="flex items-center justify-around p-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-sky-500" />
                  <div>
                    <p className="text-lg font-bold text-gray-900">30 min</p>
                    <p className="text-[10px] uppercase tracking-wider text-gray-500">Express</p>
                  </div>
                </div>
                <div className="h-8 w-px bg-gray-200" />
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-sky-500" />
                  <div>
                    <p className="text-lg font-bold text-gray-900">200+</p>
                    <p className="text-[10px] uppercase tracking-wider text-gray-500">Clients</p>
                  </div>
                </div>
                <div className="h-8 w-px bg-gray-200" />
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-amber-400" />
                  <div>
                    <p className="text-lg font-bold text-gray-900">4.9/5</p>
                    <p className="text-[10px] uppercase tracking-wider text-gray-500">Note</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
