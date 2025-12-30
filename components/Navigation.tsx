"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [closeTimer, setCloseTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (closeTimer) clearTimeout(closeTimer);
    };
  }, [closeTimer]);

  const services = [
    { name: "General Notary Services", href: "/services/general-notary" },
    { name: "Loan Signing Services", href: "/services/loan-signing" },
    { name: "Business Documentation Services", href: "/services/business-documents" },
    { name: "Mobile Notary Services", href: "/services/mobile-notary" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-soft sticky top-0 z-50 border-b border-neutral-light">
      <div className="section-container">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="text-4xl font-extrabold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent tracking-tight group-hover:from-accent group-hover:to-primary transition-all duration-300">
              Precision Signing Group
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-neutral-dark hover:text-accent transition-colors font-medium"
            >
              Home
            </Link>

            <Link
              href="/faq"
              className="text-neutral-dark hover:text-accent transition-colors font-medium"
            >
              FAQ
            </Link>

            <Link
              href="/pricing"
              className="text-neutral-dark hover:text-accent transition-colors font-medium"
            >
              Pricing
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (closeTimer) clearTimeout(closeTimer);
                setIsServicesOpen(true);
              }}
              onMouseLeave={() => {
                const timer = setTimeout(() => setIsServicesOpen(false), 200);
                setCloseTimer(timer);
              }}
            >
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-neutral-dark hover:text-accent transition-colors flex items-center font-medium"
              >
                Services
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-large rounded-xl py-3 border border-neutral-light">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-5 py-3 text-neutral-dark hover:bg-accent-light/50 hover:text-accent transition-colors font-medium"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/contact" className="btn-primary">
              Schedule Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neutral-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-neutral-light bg-white/95 backdrop-blur-md">
            <Link
              href="/"
              className="block py-3 text-neutral-dark hover:text-accent font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/faq"
              className="block py-3 text-neutral-dark hover:text-accent font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/pricing"
              className="block py-3 text-neutral-dark hover:text-accent font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <div className="py-3">
              <div className="font-bold text-neutral-dark mb-3">Services</div>
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block py-3 pl-4 text-neutral hover:text-accent font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-block mt-4 btn-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Schedule Appointment
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
