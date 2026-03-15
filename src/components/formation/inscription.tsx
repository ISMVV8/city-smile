"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
};

export default function Inscription() {
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
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    const inscriptions = JSON.parse(
      localStorage.getItem("citysmile_inscriptions") || "[]"
    );
    inscriptions.push({ ...form, createdAt: new Date().toISOString() });
    localStorage.setItem("citysmile_inscriptions", JSON.stringify(inscriptions));
    setSubmitted(true);
    setForm(initialForm);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  const inputClasses =
    "w-full rounded-xl border border-border bg-card px-4 py-3.5 text-sm text-white placeholder:text-muted focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors";

  if (submitted) {
    return (
      <section id="inscription" className="scroll-mt-16 py-24 lg:py-32">
        <div className="mx-auto max-w-lg px-4 text-center sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gold/30 bg-card p-12 glow-gold">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/20">
              <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="mt-6 font-[var(--font-accent)] text-2xl font-bold">
              Inscription reçue !
            </h3>
            <p className="mt-3 text-muted">
              Merci pour votre intérêt. Nous vous contacterons sous 48h avec
              tous les détails de la prochaine session.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="inscription" className="scroll-mt-16 py-24 lg:py-32">
      <div className="mx-auto max-w-lg px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            Inscription
          </p>
          <h2 className="mt-4 font-[var(--font-accent)] text-3xl font-bold sm:text-4xl">
            Rejoignez la prochaine session
          </h2>
          <p className="mt-4 text-muted">
            Places limitées. Inscrivez-vous maintenant pour réserver votre place.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-12 space-y-5" noValidate>
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
              <p className="mt-1 text-xs text-red-400">{errors.name}</p>
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
              <p className="mt-1 text-xs text-red-400">{errors.email}</p>
            )}
          </div>
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
              <p className="mt-1 text-xs text-red-400">{errors.phone}</p>
            )}
          </div>
          <button
            type="submit"
            className="btn-gold h-14 w-full rounded-full text-base font-semibold"
          >
            S&apos;inscrire à la formation — 500€
          </button>
        </form>
      </div>
    </section>
  );
}
