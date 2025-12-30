"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionProps {
  question: string;
  answer: string | React.ReactNode;
  defaultOpen?: boolean;
  questionClassName?: string;
  answerClassName?: string;
}

export default function Accordion({
  question,
  answer,
  defaultOpen = false,
  questionClassName,
  answerClassName,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-neutral-light rounded-lg overflow-hidden bg-white shadow-soft hover:shadow-medium transition-shadow duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-inset"
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${question.slice(0, 20)}`}
      >
        <h3
          className={`text-lg md:text-xl font-semibold text-neutral-dark pr-4 ${questionClassName ?? ""}`.trim()}
        >
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <svg
            className="w-5 h-5 text-accent"
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
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`accordion-content-${question.slice(0, 20)}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 py-4 border-t border-neutral-light bg-gray-50">
              <div
                className={`text-neutral-dark leading-relaxed prose prose-sm max-w-none ${answerClassName ?? ""}`.trim()}
              >
                {typeof answer === "string" ? (
                  <p>{answer}</p>
                ) : (
                  answer
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}



