import Link from "next/link";

export default function FormationHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-24 lg:pt-40 lg:pb-32">
      {/* Background decoration */}
      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            Formation professionnelle
          </p>
          <h1 className="mt-4 font-[var(--font-accent)] text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Devenez expert en{" "}
            <span className="text-gradient-accent">blanchiment dentaire</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
            Formez-vous aux techniques professionnelles de blanchiment dentaire
            et lancez votre propre activité. Certification incluse.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="#inscription"
              className="btn-accent inline-flex h-14 items-center justify-center rounded-full px-8 text-base"
            >
              S&apos;inscrire à la formation
            </Link>
            <Link
              href="#programme"
              className="inline-flex h-14 items-center justify-center rounded-full border border-border px-8 text-base text-foreground transition-all hover:border-accent hover:text-accent"
            >
              Voir le programme
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
