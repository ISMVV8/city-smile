import Image from "next/image";
import { MessageCircle, Lightbulb, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "Évaluation gratuite de votre teinte actuelle et définition de vos objectifs pour un sourire sur mesure.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&q=80",
    imageAlt: "Consultation dentaire dans un cabinet moderne",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Traitement LED",
    description:
      "Application du gel professionnel et activation par notre technologie LED de dernière génération. Indolore et confortable.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&q=80",
    imageAlt: "Traitement LED de blanchiment dentaire professionnel",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Sourire éclatant",
    description:
      "Résultats immédiats et durables. Repartez avec un sourire jusqu'à 9 teintes plus blanc et des conseils d'entretien.",
    image: "https://images.unsplash.com/photo-1581391524581-cba03a4ee04b?w=400&q=80",
    imageAlt: "Résultat éclatant après blanchiment dentaire",
    icon: Sparkles,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-section-alt py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/10">
            Comment ça marche
          </Badge>
          <h2 className="mt-4 font-[var(--font-accent)] text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            3 étapes vers votre nouveau sourire
          </h2>
        </div>

        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          {/* Timeline connector */}
          <div className="absolute left-0 right-0 top-[140px] hidden h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent md:block" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <Card
                key={step.number}
                className="group relative overflow-hidden border-border text-center transition-all duration-300 hover:shadow-lg hover:border-accent/30"
              >
                {/* Step image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-accent/10" />
                </div>

                <CardContent className="relative px-6 pb-6 pt-10">
                  {/* Icon with badge number */}
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2">
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-accent/20 bg-white text-accent shadow-sm">
                      <Icon className="h-7 w-7" />
                      <Badge className="absolute -right-2 -top-2 h-6 w-6 items-center justify-center rounded-full bg-accent p-0 text-[10px] text-white hover:bg-accent/90">
                        {step.number}
                      </Badge>
                    </div>
                  </div>

                  <h3 className="mt-2 text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
