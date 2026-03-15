import Link from "next/link";

export default function FormationPricing() {
  return (
    <section className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            Tarif & Certification
          </p>
          <h2 className="mt-4 font-[var(--font-accent)] text-3xl font-bold sm:text-4xl">
            Investissez dans votre avenir
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-lg">
          <div className="relative overflow-hidden rounded-2xl border border-gold/50 bg-background p-8 glow-gold sm:p-10">
            {/* Badge */}
            <div className="absolute right-6 top-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold/30 bg-gold/10">
                <svg className="h-10 w-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
            </div>

            <h3 className="text-lg font-bold">Formation Complète</h3>
            <p className="mt-1 text-sm text-muted">Certification incluse</p>

            <div className="mt-6">
              <span className="font-[var(--font-accent)] text-6xl font-bold text-gold">
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
                <li key={item} className="flex items-center gap-3 text-sm">
                  <svg
                    className="h-4 w-4 shrink-0 text-gold"
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
              className="btn-gold mt-10 flex h-14 items-center justify-center rounded-full text-base font-semibold"
            >
              S&apos;inscrire à la formation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
