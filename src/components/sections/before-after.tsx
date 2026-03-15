"use client";

import { useState, useRef, useCallback } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sparkles,
  TrendingUp,
  ArrowLeftRight,
  Clock,
  Star,
} from "lucide-react";

interface Result {
  id: string;
  label: string;
  before: string;
  after: string;
  teintes: number;
  duration: string;
  service: string;
  beforeImage: string;
  afterImage: string;
}

const results: Result[] = [
  {
    id: "result-1",
    label: "Sophie M.",
    before: "A3",
    after: "B1",
    teintes: 6,
    duration: "1h",
    service: "Premium",
    beforeImage:
      "https://images.unsplash.com/photo-1625048541027-6e9e95bd9288?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
  },
  {
    id: "result-2",
    label: "Karim B.",
    before: "A4",
    after: "A1",
    teintes: 8,
    duration: "1h30",
    service: "VIP",
    beforeImage:
      "https://images.unsplash.com/photo-1614859324967-bdf0e4340d26?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1581391524581-cba03a4ee04b?w=800&q=80",
  },
  {
    id: "result-3",
    label: "Julie D.",
    before: "A3.5",
    after: "B1",
    teintes: 7,
    duration: "1h",
    service: "Premium",
    beforeImage:
      "https://images.unsplash.com/photo-1603020581674-3150f09fc14f?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1559650656-5e967898de7a?w=800&q=80",
  },
];

function ImageSlider({ result }: { result: Result }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    },
    []
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      setIsDragging(true);
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    },
    [isDragging, updatePosition]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      setIsDragging(true);
      updatePosition(e.touches[0].clientX);
    },
    [updatePosition]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      updatePosition(e.touches[0].clientX);
    },
    [isDragging, updatePosition]
  );

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <div className="group relative">
      <Card className="overflow-hidden border-0 shadow-xl ring-1 ring-gray-900/5 transition-all duration-500 hover:shadow-2xl">
        {/* Image comparison container */}
        <div
          ref={containerRef}
          className="relative aspect-[4/5] cursor-col-resize select-none overflow-hidden"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* After image (full background) */}
          <div className="absolute inset-0">
            <img
              src={result.afterImage}
              alt={`Après blanchiment - ${result.label}`}
              className="h-full w-full object-cover"
              draggable={false}
            />
          </div>

          {/* Before image (clipped) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src={result.beforeImage}
              alt={`Avant blanchiment - ${result.label}`}
              className="h-full w-full object-cover"
              style={{
                width: containerRef.current
                  ? `${containerRef.current.offsetWidth}px`
                  : "100%",
                maxWidth: "none",
              }}
              draggable={false}
            />
          </div>

          {/* Slider handle */}
          <div
            className="absolute inset-y-0 z-10"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Vertical line */}
            <div className="absolute inset-y-0 -translate-x-1/2">
              <div className="h-full w-[2px] bg-white shadow-lg" />
            </div>

            {/* Handle button */}
            <div className="absolute top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-white/90 shadow-xl backdrop-blur-sm transition-transform duration-200 ${
                  isDragging ? "scale-110" : "group-hover:scale-105"
                }`}
              >
                <ArrowLeftRight className="h-5 w-5 text-gray-700" />
              </div>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute left-3 top-3 z-10">
            <span className="rounded-full bg-gray-900/70 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
              Avant
            </span>
          </div>
          <div className="absolute right-3 top-3 z-10">
            <span className="rounded-full bg-sky-500/90 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
              Après
            </span>
          </div>

          {/* Gradient overlays for readability */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Info section */}
        <CardContent className="relative bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold text-gray-900">{result.label}</p>
              <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
                <Clock className="h-3 w-3" />
                {result.duration}
                <span className="text-gray-300">·</span>
                <span className="font-medium text-sky-600">
                  {result.service}
                </span>
              </div>
            </div>
            <Badge className="border-0 bg-gradient-to-r from-sky-500 to-cyan-400 px-3 py-1.5 text-xs font-bold text-white shadow-sm">
              <TrendingUp className="mr-1 h-3 w-3" />+{result.teintes} teintes
            </Badge>
          </div>

          {/* Shade comparison */}
          <div className="mt-4 flex items-center gap-3 rounded-xl bg-gray-50 p-3">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-amber-300 ring-2 ring-amber-200" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-gray-400">
                  Avant
                </p>
                <p className="text-sm font-bold text-gray-700">
                  {result.before}
                </p>
              </div>
            </div>
            <div className="flex-1 border-t border-dashed border-gray-300" />
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-sky-100 ring-2 ring-sky-200" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-gray-400">
                  Après
                </p>
                <p className="text-sm font-bold text-sky-600">
                  {result.after}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section
      id="resultats"
      className="relative scroll-mt-16 overflow-hidden bg-[#f8fafb] py-28 lg:py-36"
    >
      {/* Background decorations */}
      <div className="absolute -right-48 top-0 h-[400px] w-[400px] rounded-full bg-sky-50 blur-3xl" />
      <div className="absolute -left-48 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-50/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <Badge
            variant="outline"
            className="mb-6 gap-2 rounded-full border-sky-200 bg-sky-50 px-4 py-2 text-sky-600"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Résultats réels
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Des résultats{" "}
            <span className="bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">
              visibles
            </span>
          </h2>
          <p className="mt-5 text-lg text-gray-500">
            Glissez pour comparer les résultats avant et après traitement.
            Chaque sourire est unique.
          </p>
        </div>

        {/* Instruction */}
        <div className="mx-auto mt-8 flex max-w-xs items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm text-gray-500 shadow-sm ring-1 ring-gray-100">
          <ArrowLeftRight className="h-4 w-4 text-sky-500" />
          <span>
            Glissez la barre pour comparer
          </span>
        </div>

        {/* Image sliders grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {results.map((result) => (
            <ImageSlider key={result.id} result={result} />
          ))}
        </div>

        {/* Bottom stats */}
        <div className="mt-16 grid grid-cols-3 gap-4">
          <div className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-gray-100">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-100">
              <TrendingUp className="h-5 w-5 text-sky-600" />
            </div>
            <p className="mt-3 text-3xl font-extrabold text-gray-900">+7</p>
            <p className="mt-1 text-xs text-gray-500">
              Teintes en moyenne
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-gray-100">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <Star className="h-5 w-5 text-green-600" />
            </div>
            <p className="mt-3 text-3xl font-extrabold text-gray-900">98%</p>
            <p className="mt-1 text-xs text-gray-500">
              Clients satisfaits
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-gray-100">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
              <Sparkles className="h-5 w-5 text-amber-600" />
            </div>
            <p className="mt-3 text-3xl font-extrabold text-gray-900">200+</p>
            <p className="mt-1 text-xs text-gray-500">
              Sourires transformés
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
