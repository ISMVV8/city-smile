import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-white">
      {/* Subtle background decoration */}
      <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-2xl">
            <p className="animate-fade-in-up mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-accent">
              Bruxelles — Blanchiment Dentaire Premium
            </p>
            <h1 className="animate-fade-in-up font-[var(--font-accent)] text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-7xl">
              Votre sourire
              <br />
              <span className="text-gradient-accent">mérite l&apos;excellence</span>
            </h1>
            <p className="animate-fade-in-up-delay-1 mt-6 max-w-lg text-lg leading-relaxed text-muted sm:text-xl">
              Résultats visibles dès la première séance. Technologie LED de
              dernière génération, sans douleur, au cœur de Bruxelles.
            </p>
            <div className="animate-fade-in-up-delay-2 mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#reservation"
                className="btn-accent inline-flex h-14 items-center justify-center rounded-full px-8 text-base"
              >
                Réserver maintenant
              </Link>
              <Link
                href="#services"
                className="inline-flex h-14 items-center justify-center rounded-full border border-border px-8 text-base text-foreground transition-all hover:border-accent hover:text-accent"
              >
                Découvrir nos services
              </Link>
            </div>
            <div className="animate-fade-in-up-delay-3 mt-16 flex gap-12">
              <div>
                <p className="font-[var(--font-accent)] text-3xl font-bold text-accent sm:text-4xl">
                  200+
                </p>
                <p className="mt-1 text-sm text-muted">Clients satisfaits</p>
              </div>
              <div>
                <p className="font-[var(--font-accent)] text-3xl font-bold text-accent sm:text-4xl">
                  4.9/5
                </p>
                <p className="mt-1 text-sm text-muted">Note moyenne</p>
              </div>
              <div>
                <p className="font-[var(--font-accent)] text-3xl font-bold text-accent sm:text-4xl">
                  30min
                </p>
                <p className="mt-1 text-sm text-muted">Séance express</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="animate-fade-in-up-delay-1 relative hidden lg:block">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=80"
                alt="Sourire éclatant avec des dents blanches parfaites"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-white/20 bg-white/90 px-6 py-4 shadow-xl backdrop-blur-sm">
              <p className="text-sm font-semibold text-accent">Résultat garanti</p>
              <p className="text-xs text-muted">Jusqu&apos;à +9 teintes en 1 séance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
