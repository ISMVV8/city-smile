import Image from "next/image";
import { Lightbulb, Sparkles, Heart, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const usps = [
  {
    title: "Technologie LED dernière génération",
    description:
      "Nos lampes LED professionnelles offrent un blanchiment plus efficace, plus rapide et plus sûr que les méthodes traditionnelles.",
    icon: Lightbulb,
  },
  {
    title: "Résultats dès la 1ère séance",
    description:
      "Constatez la différence immédiatement. Nos clients gagnent en moyenne 5 à 9 teintes dès leur première visite.",
    icon: Sparkles,
  },
  {
    title: "100% sans douleur",
    description:
      "Notre procédé est totalement indolore. Détendez-vous pendant que notre technologie fait le travail.",
    icon: Heart,
  },
  {
    title: "Prix transparents",
    description:
      "Pas de surprises. Nos tarifs sont affichés et incluent tout : consultation, traitement et kit d'entretien.",
    icon: ShieldCheck,
  },
];

const metrics = [
  { label: "Satisfaction clients", value: 98 },
  { label: "Résultats visibles", value: 100 },
  { label: "Recommandation", value: 95 },
];

export default function WhyUs() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/10">
            Pourquoi nous choisir
          </Badge>
          <h2 className="mt-4 font-[var(--font-accent)] text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            L&apos;excellence City Smile
          </h2>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          {/* USPs */}
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {usps.map((usp) => {
                const Icon = usp.icon;
                return (
                  <Card
                    key={usp.title}
                    className="group border-border transition-all duration-300 hover:shadow-lg hover:border-accent/30"
                  >
                    <CardContent className="flex gap-4 p-5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-foreground">{usp.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted">
                          {usp.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Metrics with Progress bars */}
            <Card className="border-border">
              <CardContent className="space-y-4 p-5">
                {metrics.map((metric) => (
                  <div key={metric.label}>
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">{metric.label}</span>
                      <span className="text-sm font-bold text-accent">{metric.value}%</span>
                    </div>
                    <Progress
                      value={metric.value}
                      className="h-2 [&>div]:bg-accent"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Side Image */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80"
                alt="Cabinet dentaire moderne et lumineux City Smile à Bruxelles"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-2xl border border-white/20 bg-accent px-6 py-4 text-white shadow-xl">
              <p className="font-[var(--font-accent)] text-3xl font-bold">4.9/5</p>
              <p className="text-xs text-white/80">Note clients Google</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
