import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1920&q=80"
        alt="Sourire éclatant après blanchiment dentaire chez City Smile Bruxelles"
        fill
        className="object-cover"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="animate-fade-in-up mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            Bruxelles — Blanchiment Dentaire Premium
          </p>
          <h1 className="animate-fade-in-up font-[var(--font-accent)] text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
            Votre sourire
            <br />
            <span className="text-gradient-gold">mérite l&apos;excellence</span>
          </h1>
          <p className="animate-fade-in-up-delay-1 mt-6 max-w-lg text-lg leading-relaxed text-white/70 sm:text-xl">
            Résultats visibles dès la première séance. Technologie LED de
            dernière génération, sans douleur, au cœur de Bruxelles.
          </p>
          <div className="animate-fade-in-up-delay-2 mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#reservation"
              className="btn-gold inline-flex h-14 items-center justify-center rounded-full px-8 text-base"
            >
              Réserver maintenant
            </Link>
            <Link
              href="#services"
              className="inline-flex h-14 items-center justify-center rounded-full border border-white/20 px-8 text-base text-white transition-all hover:border-gold hover:text-gold"
            >
              Découvrir nos services
            </Link>
          </div>
          <div className="animate-fade-in-up-delay-3 mt-16 flex gap-12">
            <div>
              <p className="font-[var(--font-accent)] text-3xl font-bold text-gold sm:text-4xl">
                200+
              </p>
              <p className="mt-1 text-sm text-white/50">Clients satisfaits</p>
            </div>
            <div>
              <p className="font-[var(--font-accent)] text-3xl font-bold text-gold sm:text-4xl">
                4.9/5
              </p>
              <p className="mt-1 text-sm text-white/50">Note moyenne</p>
            </div>
            <div>
              <p className="font-[var(--font-accent)] text-3xl font-bold text-gold sm:text-4xl">
                30min
              </p>
              <p className="mt-1 text-sm text-white/50">Séance express</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
