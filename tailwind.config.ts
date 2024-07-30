import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './public/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
    './app/**/*.{ts,tsx,mdx}',
    './src/**/*.{ts,tsx,mdx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "lg": "720px",        
      },
    },
    extend: {
      fontFamily: {        
        'sans': ["var(--font-geist-sans)"],
        'mono': ["var(--font-geist-mono)"],
        'serif': ["var(--font-serif)"],        
      },      
      colors: {
        "primary": "var(--gray-12)",
        "secondary": "var(--gray-11)",
        "accent": {
          DEFAULT: "var(--color-accent)",
          "light": "var(--color-accent-light)",
          "dark": "var(--color-accent-dark)",
        },
        "muted": "var(--gray-10)",
        "disabled": "var(--gray-9)",
        "inverted": "var(--gray-inverted)",
        "background": "var(--gray-0)",    
        "outline": "var(--color-border-secondary)",
        "ui": {
          DEFAULT: "var(--gray-2)",
          "low": "var(--gray-1)",
          "mid": "var(--gray-3)",
          "high": "var(--gray-4)",
          "accent": "var(--color-accent-light)",          
        },
        "focus": {
          DEFAULT: "var(--gray-12)",          
        },        
      },  
      borderColor: {
        "primary": "var(--color-border)",
        "secondary": "var(--color-border-secondary)",
        "tertiary": "var(--color-border-tertiary)",
        "accent": "var(--color-accent)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "spotify": {
          "0%": {    
            "box-shadow": "0 0 0 0 rgba(29, 185, 84, 0.7)"
          },
          "70%": {
            "box-shadow": "0 0 0 16px rgba(29, 185, 84, 0)"
          },          
          "100%": {
            "box-shadow": "0 0 0 0 rgba(29, 185, 84, 0)"
          }                                
        },
        "marquee": {
          '0%': {
            transform: 'translate3d(0, 0, 0)',
          },
          '50%': {
            transform: 'translate3d(40px, 0, 0)',
          },
          '60%': {
            transform: 'translate3d(40px, 0, 0)',
          },
          '90%': {
            transform: 'translate3d(0, 0, 0)',
          },
        },
        "nowPlayingAnimation": {
          '10%': {
            transform: 'scaleY(0.3)',
          },
          '30%': {
            transform: 'scaleY(1)',
          },
          '60%': {
            transform: 'scaleY(0.5)',
          },
          '80%': {
            transform: 'scaleY(0.75)',
          },
          '100%': {
            transform: 'scaleY(0.5)',
          },
        },
        "rainbow": {
          "0%": {
            backgroundPosition:"0% 82%"
          },
          "50%": {
            backgroundPosition:"100% 19%"
          },
          "100%": {
            backgroundPosition:"0% 82%"
          }    
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spotify": "spotify 2s infinite",
        "marquee": "marquee 5s infinite",
        "now-playing": "nowPlayingAnimation 2.2s ease infinite -2.2s alternate",
        "rainbow": "rainbow 18s ease infinite"
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': 'var(--gray-12)',
            '--tw-prose-headings': 'var(--prose-heading)',
            '--tw-prose-lead': 'var(--gray-12)',
            '--tw-prose-links': 'var(--gray-12)',
            '--tw-prose-bold': 'var(--gray-12)',
            '--tw-prose-counters': 'var(--gray-11)',
            '--tw-prose-bullets': 'var(--gray-9)',
            '--tw-prose-hr': 'var(--color-border)',
            '--tw-prose-quotes': 'var(--gray-12)',
            '--tw-prose-quote-borders': 'var(--color-border)',
            '--tw-prose-captions': 'var(--gray-11)',
            '--tw-prose-code': 'var(--gray-12)',
            '--tw-prose-pre-code': 'var(--gray-11)',
            '--tw-prose-pre-bg': 'var(--gray-2)',
            '--tw-prose-th-borders': 'var(--color-border)',
            '--tw-prose-td-borders': 'var(--color-border)',            
          },
        },        
      }),
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config

export default config