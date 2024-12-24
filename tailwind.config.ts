import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'bg-purple-500',
    'hover:bg-purple-500/80',
    'bg-green-500',
    'hover:bg-green-500/80',
    'bg-red-500',
    'hover:bg-red-500/80',
    'bg-blue-500',
    'hover:bg-blue-500/80',
    'bg-yellow-500',
    'hover:bg-yellow-500/80',
    'bg-sky-400',
    'hover:bg-sky-400/80',
    'bg-blue-700',
    'hover:bg-blue-700/80',
    'bg-blue-900',
    'hover:bg-blue-900/80',
    'bg-red-500',
    'hover:bg-red-500/80',
    'bg-red-700',
    'hover:bg-red-700/80',
    'bg-pink-400',
    'hover:bg-pink-400/80',
    'bg-pink-600',
    'hover:bg-pink-600/80',
    'bg-yellow-500',
    'hover:bg-yellow-500/80',
    'bg-amber-400',
    'hover:bg-amber-400/80',
    'bg-orange-700',
    'hover:bg-orange-700/80',
    'bg-rose-400',
    'hover:bg-rose-400/80',
    'bg-rose-600',
    'hover:bg-rose-600/80',
    'bg-green-300',
    'hover:bg-green-300/80',
    'bg-green-700',
    'hover:bg-green-700/80',
    'bg-emerald-400',
    'hover:bg-emerald-400/80',
    'bg-teal-500',
    'hover:bg-teal-500/80',
    'bg-cyan-500',
    'hover:bg-cyan-500/80',
    'bg-purple-800',
    'hover:bg-purple-800/80',
    'bg-violet-400',
    'hover:bg-violet-400/80',
    'bg-indigo-900',
    'hover:bg-indigo-900/80',
    'bg-slate-500',
    'hover:bg-slate-500/80',
    'bg-gray-500',
    'hover:bg-gray-500/80',
    'bg-zinc-500',
    'hover:bg-zinc-500/80',
    'bg-stone-500',
    'hover:bg-stone-500/80',
    'bg-indigo-500',
    'hover:bg-indigo-500/80',
    'bg-green-500',
    'hover:bg-green-500/80',
    'bg-purple-500',
    'hover:bg-purple-500/80',
    'bg-orange-500',
    'hover:bg-orange-500/80',
    'bg-pink-500',
    'hover:bg-pink-500/80',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
