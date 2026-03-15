import Image from "next/image";
import Link from "next/link";

export default function FormationPricing() {
  return (
    <section className="bg-section-alt py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            Tarif & Certification
          </p>
          <h2 className="mt-4 font-[var(--font-accent)] text-3xl font-bold text-foreground sm:text-4xl">
            Investissez dans votre avenir
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl items-center gap-10 lg:grid-cols-2">
          {/* Pricing Card */}
          <div className="relative overflow-hidden rounded-2xl border border-accent/30 bg-white p-8 shadow-lg sm:p-10">
            {/* Badge */}
            <div className="absolute right-6 top-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-accent/20 bg-accent/10">
                <svg className="h-10 w-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
            </div>

            <h3 className="text-lg font-bold text-foreground">Formation Complète</h3>
            <p className="mt-1 text-sm text-muted">Certification incluse</p>

            <div className="mt-6">
              <span className="font-[var(--font-accent)] text-6xl font-bold text-accent">
                500€
              </span>
            </div>

            <ul className="mt-8 space-y-3">
              {[
                "15 heures de formation intensive",
                "5 modules théorie + pratique",
                "Support de cours complet",
                "Pratique sur modèles réels",
                "Certificat de compétences",
                "Accès au groupe alumni",
                "Accompagnement post-formation",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                  <svg
                    className="h-4 w-4 shrink-0 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="#inscription"
              className="btn-accent mt-10 flex h-14 items-center justify-center rounded-full text-base font-semibold"
            >
              S&apos;inscrire à la formation
            </Link>
          </div>

          {/* Certification Image */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1523050854058-8df90110c476?w=600&q=80"
                alt="Certification et diplôme de formation en blanchiment dentaire"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 via-transparent to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-4 -right-4 rounded-2xl border border-white/20 bg-white/90 px-6 py-4 shadow-xl backdrop-blur-sm">
              <p className="text-sm font-semibold text-accent">Certification reconnue</p>
              <p className="text-xs text-muted">Validez vos compétences</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
