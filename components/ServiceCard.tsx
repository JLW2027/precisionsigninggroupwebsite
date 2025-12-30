"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { itemVariants } from "./StaggerContainer";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
  callout?: ReactNode;
}

export default function ServiceCard({ icon, title, description, href, callout }: ServiceCardProps) {
  return (
    <motion.div variants={itemVariants}>
      <Link href={href}>
        <div className="group relative bg-white rounded-xl p-8 hover:shadow-large transition-all duration-300 h-full border border-neutral-light hover:border-accent/30 hover:-translate-y-1 shadow-soft overflow-hidden">
          {/* Subtle gradient accent on hover */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

          {/* Accent glow effect */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-neutral-dark mb-4 group-hover:text-primary transition-colors duration-300">{title}</h3>
            <p className="text-lg text-neutral mb-6 leading-relaxed">{description}</p>
            {callout && <div className="mt-2 text-lg">{callout}</div>}
            <div className="text-accent font-semibold flex items-center group-hover:text-accent-dark transition-colors duration-300 text-lg">
              Learn More
              <svg
                className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
