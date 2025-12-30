"use client";

import { useEffect } from "react";
import { SubService } from "@/lib/services";

interface ServiceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: SubService | null;
}

export default function ServiceDetailModal({
  isOpen,
  onClose,
  service,
}: ServiceDetailModalProps) {
  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" />

      {/* Modal Content */}
      <div
        className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-4 rounded-t-lg flex items-center justify-between">
          <h2 id="modal-title" className="text-2xl font-bold">
            {service.title}
          </h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary rounded"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6 space-y-4">
          {service.blocks.map((block, index) => {
            if (block.type === "p") {
              return (
                <p key={index} className="text-neutral-dark leading-relaxed">
                  {block.text}
                </p>
              );
            }

            if (block.type === "bullets") {
              return (
                <div key={index} className="space-y-2">
                  <h3 className="font-semibold text-neutral-dark">
                    {block.title}:
                  </h3>
                  <ul className="list-none space-y-2 ml-0">
                    {block.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent text-white flex items-center justify-center mr-3 mt-0.5">
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                        <span className="text-neutral-dark">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }

            if (block.type === "small") {
              return (
                <p
                  key={index}
                  className="text-sm text-neutral italic bg-gray-50 p-3 rounded"
                >
                  {block.text}
                </p>
              );
            }

            return null;
          })}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gray-50 px-6 py-4 rounded-b-lg border-t border-gray-200">
          <button
            onClick={onClose}
            className="w-full btn-primary text-center"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}











