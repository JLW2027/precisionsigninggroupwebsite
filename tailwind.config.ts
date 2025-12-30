import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f172a', // Deep navy/slate
          light: '#334155',
          dark: '#020617',
        },
        accent: {
          DEFAULT: '#f59e0b', // Warm amber/gold
          light: '#fef3c7',
          dark: '#d97706',
        },
        secondary: {
          DEFAULT: '#06b6d4', // Vibrant cyan
          light: '#cffafe',
          dark: '#0891b2',
        },
        neutral: {
          DEFAULT: '#64748b',
          light: '#f8fafc',
          dark: '#1e293b',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-warm': 'linear-gradient(135deg, #fef3c7 0%, #ffffff 100%)',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 30px -5px rgba(0, 0, 0, 0.08)',
        'large': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 20px 50px -10px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
export default config;



