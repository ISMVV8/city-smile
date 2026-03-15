import Image from "next/image";
import Link from "next/link";

export default function FormationHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-24 lg:pt-40 lg:pb-32">
      {/* Background decoration */}
      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="mx-auto max-w-xl text-center lg:text-left">
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
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
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

          {/* Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80"
                alt="Formation professionnelle en blanchiment dentaire"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-accent px-6 py-4 text-white shadow-xl">
              <p className="font-[var(--font-accent)] text-2xl font-bold">15h</p>
              <p className="text-xs text-white/80">de formation intensive</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
