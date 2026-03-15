"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#resultats", label: "Résultats" },
  { href: "/#avis", label: "Avis" },
  { href: "/#faq", label: "FAQ" },
  { href: "/formation", label: "Formation" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-[var(--font-accent)] text-2xl font-bold tracking-wide text-gold">
            City
          </span>
          <span className="text-2xl font-light tracking-widest text-white">
            Smile
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#reservation"
            className="btn-gold rounded-full px-6 py-2.5 text-sm"
          >
            Réserver
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-12 w-12 items-center justify-center md:hidden"
          aria-label="Menu"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className="border-t border-border bg-background px-4 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-muted transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#reservation"
              onClick={() => setMobileOpen(false)}
              className="btn-gold mt-2 rounded-full px-6 py-3 text-center text-sm"
            >
              Réserver maintenant
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
