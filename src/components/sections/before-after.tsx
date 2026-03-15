const results = [
  { before: "A2", after: "B1", teintes: 6 },
  { before: "A3", after: "A1", teintes: 8 },
  { before: "A3.5", after: "B1", teintes: 7 },
  { before: "A4", after: "A2", teintes: 5 },
];

export default function BeforeAfter() {
  return (
    <section id="resultats" className="scroll-mt-16 bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            Résultats
          </p>
          <h2 className="mt-4 font-[var(--font-accent)] text-3xl font-bold sm:text-4xl lg:text-5xl">
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
              className="group overflow-hidden rounded-2xl border border-border transition-all duration-300 hover:border-gold/30"
            >
              {/* Placeholder visual */}
              <div className="relative flex h-64 items-center justify-center bg-gradient-to-br from-background to-card">
                <div className="flex gap-4">
                  {/* Before */}
                  <div className="text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-amber-900/30 transition-transform duration-300 group-hover:scale-110">
                      <svg className="h-10 w-10 text-amber-700/60" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-5c.78 2.34 2.72 4 5 4s4.22-1.66 5-4H7z"/>
                      </svg>
                    </div>
                    <p className="mt-2 text-xs text-muted">Avant</p>
                    <p className="text-sm font-semibold text-white/60">
                      {result.before}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center">
                    <svg
                      className="h-6 w-6 text-gold"
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
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gold/20 transition-transform duration-300 group-hover:scale-110">
                      <svg className="h-10 w-10 text-gold" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-5c.78 2.34 2.72 4 5 4s4.22-1.66 5-4H7z"/>
                      </svg>
                    </div>
                    <p className="mt-2 text-xs text-muted">Après</p>
                    <p className="text-sm font-semibold text-gold">
                      {result.after}
                    </p>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="border-t border-border p-4 text-center">
                <p className="text-lg font-bold text-gold">
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
