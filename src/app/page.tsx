import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import BeforeAfter from "@/components/sections/before-after";
import HowItWorks from "@/components/sections/how-it-works";
import WhyUs from "@/components/sections/why-us";
import Testimonials from "@/components/sections/testimonials";
import FAQ from "@/components/sections/faq";
import Booking from "@/components/sections/booking";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <BeforeAfter />
      <HowItWorks />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <Booking />
    </main>
  );
}
