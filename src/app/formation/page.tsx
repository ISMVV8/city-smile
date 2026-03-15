import type { Metadata } from "next";
import FormationHero from "@/components/formation/hero";
import LearningPoints from "@/components/formation/learning-points";
import Program from "@/components/formation/program";
import FormationPricing from "@/components/formation/pricing";
import Inscription from "@/components/formation/inscription";
import FormationFAQ from "@/components/formation/faq";

export const metadata: Metadata = {
  title: "Formation Blanchiment Dentaire — Devenez Expert",
  description:
    "Formation professionnelle en blanchiment dentaire à Bruxelles. 15h de cours, certification incluse. Lancez votre activité dès 500€. Inscrivez-vous !",
  openGraph: {
    title: "Formation Blanchiment Dentaire — City Smile",
    description:
      "Formation professionnelle en blanchiment dentaire à Bruxelles. Certification incluse. Inscrivez-vous dès maintenant !",
    locale: "fr_BE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Formation Blanchiment Dentaire — City Smile",
    description:
      "Formation professionnelle en blanchiment dentaire à Bruxelles. Certification incluse.",
  },
};

export default function FormationPage() {
  return (
    <main>
      <FormationHero />
      <LearningPoints />
      <Program />
      <FormationPricing />
      <Inscription />
      <FormationFAQ />
    </main>
  );
}
