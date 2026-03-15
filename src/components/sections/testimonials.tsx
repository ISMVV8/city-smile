import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sophie M.",
    rating: 5,
    text: "Incroyable ! J'ai gagné 7 teintes en une seule séance. L'équipe est professionnelle et le cadre est magnifique. Je recommande à 100%.",
    service: "Blanchiment Premium",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    initials: "SM",
  },
  {
    name: "Karim B.",
    rating: 5,
    text: "Je suis venu pour le blanchiment express avant un événement important. Résultat bluffant en seulement 30 minutes. Top !",
    service: "Blanchiment Express",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    initials: "KB",
  },
  {
    name: "Julie D.",
    rating: 5,
    text: "Expérience VIP du début à la fin. Le suivi personnalisé est un vrai plus. Mes dents n'ont jamais été aussi blanches.",
    service: "Blanchiment VIP",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    initials: "JD",
  },
  {
    name: "Thomas L.",
    rating: 5,
    text: "Très sceptique au départ, je suis maintenant conquis. Aucune douleur et un résultat naturel. Merci City Smile !",
    service: "Blanchiment Premium",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    initials: "TL",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="avis" className="scroll-mt-16 bg-section-alt py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/10">
            Avis clients
          </Badge>
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
            <Card
              key={t.name}
              className="group flex flex-col border-border transition-all duration-300 hover:shadow-lg hover:border-accent/30"
            >
              <CardContent className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between">
                  <Stars count={t.rating} />
                  <Quote className="h-5 w-5 text-accent/20" />
                </div>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={t.avatar} alt={`Photo de ${t.name}`} />
                    <AvatarFallback className="bg-accent/10 text-xs font-semibold text-accent">
                      {t.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <Badge variant="secondary" className="mt-0.5 bg-accent/10 px-2 py-0 text-[10px] text-accent hover:bg-accent/10">
                      {t.service}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
