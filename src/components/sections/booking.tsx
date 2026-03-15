"use client";

import Image from "next/image";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  CalendarCheck,
  Send,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Sparkles,
  Zap,
  Star,
  ArrowRight,
  User,
  AtSign,
  MessageSquare,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  service: "",
  date: "",
  message: "",
};

const contactInfo = [
  {
    icon: Phone,
    label: "Téléphone",
    value: "+32 2 123 45 67",
    gradient: "from-sky-500 to-cyan-400",
    lightBg: "bg-sky-50",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@citysmile.be",
    gradient: "from-violet-500 to-purple-500",
    lightBg: "bg-violet-50",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "Bruxelles, Belgique",
    gradient: "from-rose-500 to-pink-500",
    lightBg: "bg-rose-50",
  },
  {
    icon: Clock,
    label: "Horaires",
    value: "Lun — Sam : 9h — 19h",
    gradient: "from-emerald-500 to-teal-500",
    lightBg: "bg-emerald-50",
  },
];

const guarantees = [
  { icon: Shield, text: "Consultation gratuite", color: "text-emerald-600" },
  { icon: Clock, text: "Confirmation sous 24h", color: "text-sky-600" },
  { icon: Sparkles, text: "Résultats garantis", color: "text-violet-600" },
];

export default function Booking() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );
  const [focusedField, setFocusedField] = useState<string | null>(null);

  function validate(): boolean {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim()) newErrors.name = "Le nom est requis";
    if (!form.email.trim()) newErrors.email = "L'email est requis";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Email invalide";
    if (!form.phone.trim()) newErrors.phone = "Le téléphone est requis";
    if (!form.service) newErrors.service = "Choisissez un service";
    if (!form.date) newErrors.date = "Choisissez une date";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    const bookings = JSON.parse(
      localStorage.getItem("citysmile_bookings") || "[]"
    );
    bookings.push({ ...form, createdAt: new Date().toISOString() });
    localStorage.setItem("citysmile_bookings", JSON.stringify(bookings));
    setSubmitted(true);
    setForm(initialForm);
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  if (submitted) {
    return (
      <section
        id="reservation"
        className="relative scroll-mt-16 overflow-hidden bg-[#f8fafb] py-28 lg:py-36"
      >
        <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden border-0 shadow-2xl ring-1 ring-gray-900/5">
            <CardContent className="p-12 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg shadow-emerald-500/25">
                <CheckCircle2 className="h-10 w-10 text-white" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                Demande envoyée !
              </h3>
              <p className="mx-auto mt-3 max-w-sm text-gray-500">
                Merci pour votre réservation. Nous vous contacterons sous 24h
                pour confirmer votre créneau.
              </p>
              <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-5 py-2.5 text-sm font-medium text-emerald-700 ring-1 ring-emerald-100">
                <CheckCircle2 className="h-4 w-4" />
                Vous recevrez un email de confirmation
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-400 text-sm font-bold text-white shadow-lg shadow-sky-500/25 transition-all hover:shadow-xl hover:brightness-110"
              >
                Nouvelle réservation
              </button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section
      id="reservation"
      className="relative scroll-mt-16 overflow-hidden bg-[#f8fafb] py-28 lg:py-36"
    >
      {/* Background */}
      <div className="absolute -left-64 top-0 h-[500px] w-[500px] rounded-full bg-sky-50/60 blur-3xl" />
      <div className="absolute -right-64 bottom-0 h-[400px] w-[400px] rounded-full bg-violet-50/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <Badge
            variant="outline"
            className="mb-6 gap-2 rounded-full border-sky-200 bg-sky-50 px-4 py-2 text-sky-600"
          >
            <CalendarCheck className="h-3.5 w-3.5" />
            Réservation
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Prenez{" "}
            <span className="bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">
              rendez-vous
            </span>
          </h2>
          <p className="mt-5 text-lg text-gray-500">
            Remplissez le formulaire et recevez une confirmation sous 24h.
            Consultation gratuite incluse.
          </p>
        </div>

        {/* Guarantees bar */}
        <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-6">
          {guarantees.map((g) => {
            const Icon = g.icon;
            return (
              <div
                key={g.text}
                className="flex items-center gap-2 text-sm text-gray-500"
              >
                <Icon className={`h-4 w-4 ${g.color}`} />
                <span className="font-medium">{g.text}</span>
              </div>
            );
          })}
        </div>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-5 lg:gap-12">
          {/* Form — 3 cols */}
          <div className="lg:col-span-3">
            <Card className="overflow-hidden border-0 shadow-2xl ring-1 ring-gray-900/5">
              <CardContent className="p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Name + Email */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                        <User className="h-3.5 w-3.5 text-gray-400" />
                        Nom complet
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Votre nom"
                        value={form.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 transition-all duration-300 outline-none ${
                          errors.name
                            ? "border-red-300 ring-2 ring-red-100"
                            : focusedField === "name"
                            ? "border-sky-400 ring-4 ring-sky-100"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-red-500">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                        <AtSign className="h-3.5 w-3.5 text-gray-400" />
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="votre@email.com"
                        value={form.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 transition-all duration-300 outline-none ${
                          errors.email
                            ? "border-red-300 ring-2 ring-red-100"
                            : focusedField === "email"
                            ? "border-sky-400 ring-4 ring-sky-100"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-500">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone + Service */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                        <Phone className="h-3.5 w-3.5 text-gray-400" />
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+32 4XX XX XX XX"
                        value={form.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("phone")}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 transition-all duration-300 outline-none ${
                          errors.phone
                            ? "border-red-300 ring-2 ring-red-100"
                            : focusedField === "phone"
                            ? "border-sky-400 ring-4 ring-sky-100"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1.5 text-xs text-red-500">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                        <Sparkles className="h-3.5 w-3.5 text-gray-400" />
                        Service
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("service")}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-gray-900 transition-all duration-300 outline-none ${
                          !form.service ? "text-gray-400" : ""
                        } ${
                          errors.service
                            ? "border-red-300 ring-2 ring-red-100"
                            : focusedField === "service"
                            ? "border-sky-400 ring-4 ring-sky-100"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <option value="">Choisir une formule</option>
                        <option value="express">⚡ Express — 79€</option>
                        <option value="premium">⭐ Premium — 149€</option>
                        <option value="vip">👑 VIP — 249€</option>
                      </select>
                      {errors.service && (
                        <p className="mt-1.5 text-xs text-red-500">
                          {errors.service}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Date */}
                  <div>
                    <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                      <CalendarCheck className="h-3.5 w-3.5 text-gray-400" />
                      Date souhaitée
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("date")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-gray-900 transition-all duration-300 outline-none ${
                        errors.date
                          ? "border-red-300 ring-2 ring-red-100"
                          : focusedField === "date"
                          ? "border-sky-400 ring-4 ring-sky-100"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    />
                    {errors.date && (
                      <p className="mt-1.5 text-xs text-red-500">
                        {errors.date}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                      <MessageSquare className="h-3.5 w-3.5 text-gray-400" />
                      Message{" "}
                      <span className="text-xs font-normal text-gray-400">
                        (optionnel)
                      </span>
                    </label>
                    <textarea
                      name="message"
                      placeholder="Décrivez vos attentes ou posez vos questions..."
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full resize-none rounded-xl border bg-white px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 transition-all duration-300 outline-none ${
                        focusedField === "message"
                          ? "border-sky-400 ring-4 ring-sky-100"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-400 text-base font-bold text-white shadow-lg shadow-sky-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/30 hover:brightness-110 active:scale-[0.98]"
                  >
                    <Send className="h-4 w-4" />
                    Envoyer ma demande
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Right sidebar — 2 cols */}
          <div className="space-y-4 lg:col-span-2">
            {/* Contact cards */}
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <Card
                  key={info.label}
                  className="group border-0 shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:shadow-lg hover:ring-sky-200"
                >
                  <CardContent className="flex items-center gap-4 p-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${info.gradient} shadow-sm transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-400">
                        {info.label}
                      </p>
                      <p className="text-sm font-bold text-gray-900">
                        {info.value}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Image card */}
            <Card className="overflow-hidden border-0 shadow-xl ring-1 ring-gray-900/5">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80"
                  alt="Cabinet City Smile Bruxelles"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm font-bold text-white">City Smile</p>
                  <p className="text-xs text-white/70">
                    Votre centre de blanchiment à Bruxelles
                  </p>
                </div>
              </div>
            </Card>

            {/* Trust card */}
            <div className="rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-5 text-center">
              <div className="flex items-center justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="mt-2 text-2xl font-extrabold text-white">4.9/5</p>
              <p className="mt-1 text-xs text-gray-400">
                200+ clients satisfaits
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
