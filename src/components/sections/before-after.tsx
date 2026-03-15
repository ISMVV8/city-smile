const results = [
  {
    before: "A2",
    after: "B1",
    teintes: 6,
    gradientBefore: "from-amber-200 to-amber-300",
    gradientAfter: "from-sky-100 to-white",
  },
  {
    before: "A3",
    after: "A1",
    teintes: 8,
    gradientBefore: "from-amber-300 to-amber-400",
    gradientAfter: "from-sky-50 to-white",
  },
  {
    before: "A3.5",
    after: "B1",
    teintes: 7,
    gradientBefore: "from-amber-300 to-yellow-400",
    gradientAfter: "from-sky-100 to-white",
  },
  {
    before: "A4",
    after: "A2",
    teintes: 5,
    gradientBefore: "from-amber-400 to-amber-500",
    gradientAfter: "from-sky-100 to-sky-50",
  },
];

export default function BeforeAfter() {
  return (
    <section id="resultats" className="scroll-mt-16 bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            Résultats
          </p>
          <h2 className="mt-4 font-[var(--font-accent)] text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Des résultats visibles
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Chaque sourire est unique. Voici les résultats obtenus par nos
            clients après une seule séance.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {results.map((result, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-2xl border border-border bg-white card-shadow transition-all duration-300 hover:shadow-lg hover:border-accent/30"
            >
              {/* Visual before/after with gradients */}
              <div className="relative flex h-64 items-center justify-center overflow-hidden">
                {/* Split background */}
                <div className="absolute inset-0 flex">
                  <div className={`w-1/2 bg-gradient-to-br ${result.gradientBefore}`} />
                  <div className={`w-1/2 bg-gradient-to-br ${result.gradientAfter}`} />
                </div>
                {/* Divider */}
                <div className="absolute inset-y-0 left-1/2 w-px bg-white/60" />

                <div className="relative flex gap-4">
                  {/* Before */}
                  <div className="text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/80 shadow-md backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                      <span className="text-2xl">😐</span>
                    </div>
                    <p className="mt-2 text-xs font-medium text-foreground/70">Avant</p>
                    <p className="text-sm font-semibold text-foreground/50">
                      {result.before}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center">
                    <svg
                      className="h-6 w-6 text-accent drop-shadow-md"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>

                  {/* After */}
                  <div className="text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/80 shadow-md backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                      <span className="text-2xl">😁</span>
                    </div>
                    <p className="mt-2 text-xs font-medium text-foreground/70">Après</p>
                    <p className="text-sm font-semibold text-accent">
                      {result.after}
                    </p>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="border-t border-border p-4 text-center">
                <p className="text-lg font-bold text-accent">
                  +{result.teintes} teintes
                </p>
                <p className="text-xs text-muted">de blancheur gagnées</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
