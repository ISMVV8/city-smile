import Image from "next/image";

const usps = [
  {
    title: "Technologie LED dernière génération",
    description:
      "Nos lampes LED professionnelles offrent un blanchiment plus efficace, plus rapide et plus sûr que les méthodes traditionnelles.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Résultats dès la 1ère séance",
    description:
      "Constatez la différence immédiatement. Nos clients gagnent en moyenne 5 à 9 teintes dès leur première visite.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "100% sans douleur",
    description:
      "Notre procédé est totalement indolore. Détendez-vous pendant que notre technologie fait le travail.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Prix transparents",
    description:
      "Pas de surprises. Nos tarifs sont affichés et incluent tout : consultation, traitement et kit d'entretien.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            Pourquoi nous choisir
          </p>
          <h2 className="mt-4 font-[var(--font-accent)] text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            L&apos;excellence City Smile
          </h2>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          {/* USPs */}
          <div className="grid gap-6 sm:grid-cols-2">
            {usps.map((usp) => (
              <div
                key={usp.title}
                className="group flex gap-4 rounded-2xl border border-border bg-white p-5 card-shadow transition-all duration-300 hover:shadow-lg hover:border-accent/30"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                  {usp.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">{usp.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {usp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Side Image */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80"
                alt="Cabinet dentaire moderne et lumineux City Smile à Bruxelles"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent" />
            </div>
            {/* Floating stat */}
            <div className="absolute -bottom-4 -right-4 rounded-2xl border border-white/20 bg-accent px-6 py-4 text-white shadow-xl">
              <p className="font-[var(--font-accent)] text-3xl font-bold">4.9/5</p>
              <p className="text-xs text-white/80">Note clients Google</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
