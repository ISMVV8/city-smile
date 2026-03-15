import Image from "next/image";
import Link from "next/link";

const services = [
  {
    name: "Blanchiment Express",
    duration: "30 min",
    price: "79",
    description:
      "Idéal pour un coup d'éclat rapide. Résultats visibles immédiatement pour un sourire rafraîchi.",
    features: [
      "1 séance de LED",
      "Gel professionnel",
      "Résultat immédiat",
      "Sans douleur",
    ],
    popular: false,
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80",
    imageAlt: "Traitement de blanchiment dentaire express",
  },
  {
    name: "Blanchiment Premium",
    duration: "1h",
    price: "149",
    description:
      "Notre formule la plus demandée. Un blanchiment en profondeur pour un sourire éclatant et durable.",
    features: [
      "2 séances de LED",
      "Gel premium haute concentration",
      "Résultat jusqu'à +6 teintes",
      "Kit d'entretien offert",
    ],
    popular: true,
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80",
    imageAlt: "Soin dentaire premium en cabinet moderne",
  },
  {
    name: "Blanchiment VIP",
    duration: "1h30",
    price: "249",
    description:
      "L'expérience ultime. Un traitement complet avec suivi personnalisé pour un résultat maximal.",
    features: [
      "3 séances de LED",
      "Gel premium exclusif",
      "Résultat jusqu'à +9 teintes",
      "Kit d'entretien premium",
      "Suivi personnalisé 30 jours",
    ],
    popular: false,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
    imageAlt: "Expérience VIP de blanchiment dentaire haut de gamme",
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-16 bg-section-alt py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            Nos services
          </p>
          <h2 className="mt-4 font-[var(--font-accent)] text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Choisissez votre formule
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Des formules adaptées à vos besoins et votre budget. Devis
            personnalisé disponible sur demande.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.name}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                service.popular
                  ? "border-accent shadow-md"
                  : "border-border card-shadow hover:border-accent/30"
              }`}
            >
              {service.popular && (
                <span className="absolute right-4 top-4 z-10 rounded-full bg-accent px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Le plus populaire
                </span>
              )}

              {/* Service Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-8">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{service.name}</h3>
                  <p className="mt-1 text-sm text-accent">{service.duration}</p>
                </div>
                <div className="mt-6">
                  <span className="font-[var(--font-accent)] text-5xl font-bold text-accent">
                    {service.price}€
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
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
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#reservation"
                  className={`mt-8 flex h-12 items-center justify-center rounded-full text-sm font-semibold transition-all ${
                    service.popular
                      ? "btn-accent"
                      : "border border-border text-foreground hover:bg-accent hover:text-white hover:border-accent"
                  }`}
                >
                  Réserver cette formule
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
