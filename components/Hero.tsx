"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/patty-zavala-4rNTFIeQtXg-unsplash.jpg"
          alt="Professional notary workspace"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Lighter Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/30 to-primary-dark/50 z-0"></div>
      
      {/* Accent glow with floating animation */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl z-0"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl z-0"
      />
      
      {/* Content */}
      <div className="relative z-10 section-container py-24 md:py-40">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Professional Mobile Notary Services in the Greater Puget Sound Area
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-2xl md:text-3xl mb-10 text-neutral-light/90 leading-relaxed"
          >
            <span className="font-bold text-green-400">WE COME TO YOU</span> so you can focus on the important things!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/contact" className="btn-secondary text-center text-xl">
              Schedule Appointment
            </Link>
            <Link
              href="#services"
              className="bg-white/95 backdrop-blur-sm text-primary hover:bg-white hover:shadow-large font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center hover:scale-105 text-xl"
            >
              View Services
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
