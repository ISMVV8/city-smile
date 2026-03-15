import type { Metadata } from "next";
import { Inter, Playfair_Display, Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "City Smile — Blanchiment Dentaire Premium à Bruxelles",
    template: "%s | City Smile",
  },
  description:
    "Blanchiment dentaire professionnel à Bruxelles. Résultats visibles dès la 1ère séance. Technologie LED dernière génération. Réservez votre séance dès 79€.",
  keywords: [
    "blanchiment dentaire",
    "blanchiment dentaire Bruxelles",
    "City Smile",
    "dents blanches",
    "sourire éclatant",
    "blanchiment LED",
  ],
  openGraph: {
    title: "City Smile — Blanchiment Dentaire Premium à Bruxelles",
    description:
      "Blanchiment dentaire professionnel à Bruxelles. Résultats visibles dès la 1ère séance. Réservez dès 79€.",
    locale: "fr_BE",
    type: "website",
    siteName: "City Smile",
  },
  twitter: {
    card: "summary_large_image",
    title: "City Smile — Blanchiment Dentaire Premium à Bruxelles",
    description:
      "Blanchiment dentaire professionnel à Bruxelles. Résultats visibles dès la 1ère séance. Réservez dès 79€.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "City Smile",
    description: "Blanchiment dentaire professionnel et premium à Bruxelles",
    url: "https://citysmile.be",
    telephone: "+32 2 123 45 67",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Avenue Louise 54",
      addressLocality: "Bruxelles",
      postalCode: "1050",
      addressCountry: "BE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.8333,
      longitude: 4.3517,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "17:00",
      },
    ],
    priceRange: "€€",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200",
  };

  return (
    <html lang="fr" className={cn(inter.variable, playfair.variable, "font-sans", geist.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
