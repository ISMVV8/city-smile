"use client";

import Image from "next/image";
import { useState } from "react";
import { CheckCircle2, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
  { icon: Phone, label: "+32 2 123 45 67" },
  { icon: Mail, label: "contact@citysmile.be" },
  { icon: MapPin, label: "Bruxelles, Belgique" },
  { icon: Clock, label: "Lun-Sam 9h-19h" },
];

export default function Booking() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

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
    const bookings = JSON.parse(localStorage.getItem("citysmile_bookings") || "[]");
    bookings.push({ ...form, createdAt: new Date().toISOString() });
    localStorage.setItem("citysmile_bookings", JSON.stringify(bookings));
    setSubmitted(true);
    setForm(initialForm);
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  const inputClasses =
    "w-full rounded-xl border border-border bg-white px-4 py-3.5 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors";

  if (submitted) {
    return (
      <section id="reservation" className="scroll-mt-16 bg-section-alt py-24 lg:py-32">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <Card className="border-accent/30 shadow-md">
            <CardContent className="p-12">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <CheckCircle2 className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mt-6 font-[var(--font-accent)] text-2xl font-bold text-foreground">
                Demande envoyée !
              </h3>
              <p className="mt-3 text-muted">
                Merci pour votre réservation. Nous vous contacterons sous 24h pour
                confirmer votre créneau.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-accent mt-8 rounded-full px-8 py-3 text-sm"
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
    <section id="reservation" className="scroll-mt-16 bg-section-alt py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/10">
            Réservation
          </Badge>
          <h2 className="mt-4 font-[var(--font-accent)] text-3xl font-bold text-foreground sm:text-4xl">
            Prenez rendez-vous
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted">
            Remplissez le formulaire ci-dessous et nous vous confirmerons votre
            rendez-vous sous 24h.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-12 lg:grid-cols-2">
          {/* Form wrapped in Card */}
          <Card className="border-border">
            <CardContent className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Nom complet"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Téléphone"
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                    )}
                  </div>
                  <div>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={inputClasses}
                    >
                      <option value="">Choisir un service</option>
                      <option value="express">Blanchiment Express — 79€</option>
                      <option value="premium">Blanchiment Premium — 149€</option>
                      <option value="vip">Blanchiment VIP — 249€</option>
                    </select>
                    {errors.service && (
                      <p className="mt-1 text-xs text-red-500">{errors.service}</p>
                    )}
                  </div>
                </div>

                <div>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                  {errors.date && (
                    <p className="mt-1 text-xs text-red-500">{errors.date}</p>
                  )}
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Message (optionnel)"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-accent h-14 w-full rounded-full text-base font-semibold"
                >
                  Envoyer ma demande de réservation
                </button>
              </form>

              {/* Contact badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <Badge
                      key={info.label}
                      variant="secondary"
                      className="bg-accent/5 text-xs text-muted hover:bg-accent/10"
                    >
                      <Icon className="mr-1 h-3 w-3 text-accent" />
                      {info.label}
                    </Badge>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Side Image */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80"
                alt="Patiente souriante dans un fauteuil dentaire lors d'un traitement"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-2xl border border-white/20 bg-white/90 px-6 py-4 shadow-xl backdrop-blur-sm">
              <p className="text-sm font-semibold text-foreground">Confirmation sous 24h</p>
              <p className="text-xs text-muted">Réponse rapide garantie</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
