import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const results = [
  {
    before: "A2",
    after: "B1",
    teintes: 6,
    maxTeintes: 9,
    gradientBefore: "from-amber-200 to-amber-300",
    gradientAfter: "from-sky-100 to-white",
  },
  {
    before: "A3",
    after: "A1",
    teintes: 8,
    maxTeintes: 9,
    gradientBefore: "from-amber-300 to-amber-400",
    gradientAfter: "from-sky-50 to-white",
  },
  {
    before: "A3.5",
    after: "B1",
    teintes: 7,
    maxTeintes: 9,
    gradientBefore: "from-amber-300 to-yellow-400",
    gradientAfter: "from-sky-100 to-white",
  },
  {
    before: "A4",
    after: "A2",
    teintes: 5,
    maxTeintes: 9,
    gradientBefore: "from-amber-400 to-amber-500",
    gradientAfter: "from-sky-100 to-sky-50",
  },
];

export default function BeforeAfter() {
  return (
    <section id="resultats" className="scroll-mt-16 bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/10">
            Résultats
          </Badge>
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
            <Card
              key={i}
              className="group overflow-hidden border-border transition-all duration-300 hover:shadow-lg hover:border-accent/30"
            >
              {/* Visual before/after with gradients */}
              <div className="relative flex h-64 items-center justify-center overflow-hidden">
                <div className="absolute inset-0 flex">
                  <div className={`w-1/2 bg-gradient-to-br ${result.gradientBefore}`} />
                  <div className={`w-1/2 bg-gradient-to-br ${result.gradientAfter}`} />
                </div>
                <div className="absolute inset-y-0 left-1/2 w-px bg-white/60" />

                <div className="relative flex gap-4">
                  {/* Before */}
                  <div className="text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/80 shadow-md backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                      <span className="text-2xl">😐</span>
                    </div>
                    <p className="mt-2 text-xs font-medium text-foreground/70">Avant</p>
                    <Badge variant="outline" className="mt-1 text-[10px]">
                      {result.before}
                    </Badge>
                  </div>

                  <div className="flex items-center">
                    <ArrowRight className="h-6 w-6 text-accent drop-shadow-md" />
                  </div>

                  {/* After */}
                  <div className="text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/80 shadow-md backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                      <span className="text-2xl">😁</span>
                    </div>
                    <p className="mt-2 text-xs font-medium text-foreground/70">Après</p>
                    <Badge className="mt-1 bg-accent text-[10px] text-white hover:bg-accent/90">
                      {result.after}
                    </Badge>
                  </div>
                </div>
              </div>

              <CardContent className="space-y-3 border-t border-border p-4 text-center">
                <p className="text-lg font-bold text-accent">
                  +{result.teintes} teintes
                </p>
                <p className="text-xs text-muted">de blancheur gagnées</p>
                <Progress
                  value={Math.round((result.teintes / result.maxTeintes) * 100)}
                  className="h-2 [&>div]:bg-accent"
                />
                <p className="text-[10px] text-muted">
                  {result.teintes}/{result.maxTeintes} teintes max
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
