"use client";

interface ServiceBoxProps {
  label: string;
  onClick: () => void;
}

export default function ServiceBox({ label, onClick }: ServiceBoxProps) {
  return (
    <button
      onClick={onClick}
      className="group relative bg-white border-2 border-gray-200 rounded-lg p-6 text-center transition-all duration-200 hover:border-primary hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    >
      <div className="flex items-center justify-center mb-3">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <svg
            className="w-6 h-6 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
      </div>
      <h3 className="text-lg font-semibold text-neutral-dark group-hover:text-primary transition-colors">
        {label}
      </h3>
      <div className="mt-3 flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-sm font-medium">Learn More</span>
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
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </button>
  );
}











