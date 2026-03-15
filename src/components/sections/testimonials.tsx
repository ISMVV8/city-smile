const testimonials = [
  {
    name: "Sophie M.",
    rating: 5,
    text: "Incroyable ! J'ai gagné 7 teintes en une seule séance. L'équipe est professionnelle et le cadre est magnifique. Je recommande à 100%.",
    service: "Blanchiment Premium",
  },
  {
    name: "Karim B.",
    rating: 5,
    text: "Je suis venu pour le blanchiment express avant un événement important. Résultat bluffant en seulement 30 minutes. Top !",
    service: "Blanchiment Express",
  },
  {
    name: "Julie D.",
    rating: 5,
    text: "Expérience VIP du début à la fin. Le suivi personnalisé est un vrai plus. Mes dents n'ont jamais été aussi blanches.",
    service: "Blanchiment VIP",
  },
  {
    name: "Thomas L.",
    rating: 5,
    text: "Très sceptique au départ, je suis maintenant conquis. Aucune douleur et un résultat naturel. Merci City Smile !",
    service: "Blanchiment Premium",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="h-4 w-4 text-amber-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="avis" className="scroll-mt-16 bg-section-alt py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            Avis clients
          </p>
          <h2 className="mt-4 font-[var(--font-accent)] text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Ce que disent nos clients
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Plus de 200 clients satisfaits nous font confiance. Découvrez leurs
            témoignages.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-white p-6 card-shadow transition-all duration-300 hover:shadow-lg hover:border-accent/30"
            >
              <Stars count={t.rating} />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-accent">{t.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
