import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Le blanchiment dentaire est-il douloureux ?",
    answer:
      "Non, notre procédé est totalement indolore. Nous utilisons un gel professionnel doux combiné à la technologie LED qui n'agresse pas l'émail. Certains clients peuvent ressentir une légère sensibilité temporaire, qui disparaît en quelques heures.",
  },
  {
    question: "Combien de temps durent les résultats ?",
    answer:
      "Les résultats durent en moyenne 6 à 12 mois, selon votre hygiène bucco-dentaire et vos habitudes alimentaires. Le kit d'entretien fourni avec nos formules Premium et VIP vous aide à prolonger les résultats.",
  },
  {
    question: "Le blanchiment abîme-t-il l'émail des dents ?",
    answer:
      "Non. Notre technologie LED et nos gels professionnels sont conçus pour être sans danger pour l'émail dentaire. Le procédé agit uniquement sur les pigments de coloration sans altérer la structure de la dent.",
  },
  {
    question: "Combien de teintes puis-je gagner ?",
    answer:
      "En moyenne, nos clients gagnent entre 5 et 9 teintes de blancheur dès la première séance. Le résultat dépend de la teinte initiale et de la formule choisie. La formule VIP offre les résultats les plus spectaculaires.",
  },
  {
    question: "Y a-t-il des contre-indications ?",
    answer:
      "Le blanchiment est déconseillé aux femmes enceintes ou allaitantes, aux mineurs de moins de 18 ans, et aux personnes portant des appareils dentaires. Une consultation préalable gratuite nous permet de vérifier votre éligibilité.",
  },
  {
    question: "Comment prendre rendez-vous ?",
    answer:
      "Vous pouvez réserver directement via notre formulaire en ligne, par téléphone au +32 2 123 45 67, ou par email à contact@citysmile.be. Nous vous confirmerons votre créneau sous 24h.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-16 bg-white py-24 lg:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/10">
            FAQ
          </Badge>
          <h2 className="mt-4 font-[var(--font-accent)] text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Questions fréquentes
          </h2>
        </div>

        <Accordion className="mt-12 space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-xl border border-border bg-white px-6 shadow-sm transition-all duration-300 hover:border-accent/30 data-[state=open]:border-accent/30 data-[state=open]:shadow-md"
            >
              <AccordionTrigger className="py-5 text-left font-semibold text-foreground hover:no-underline [&[data-state=open]>svg]:text-accent">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-muted">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
