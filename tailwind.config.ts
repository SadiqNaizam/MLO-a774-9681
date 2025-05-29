import type { Config } from "tailwindcss";

export default {
  // darkMode: ["class"], // Removed as PRD does not specify dark mode
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',       // Corresponds to PRD page background #007BFF
        foreground: 'hsl(var(--foreground))',       // Corresponds to text on page background (e.g., white text on blue bg)
        primary: {
          DEFAULT: 'hsl(var(--primary))',          // Corresponds to PRD button color #007BFF
          foreground: 'hsl(var(--primary-foreground))' // Corresponds to text on button (e.g., white)
        },
        card: { // For card/surface elements, corresponds to PRD 'surface'
          DEFAULT: 'hsl(var(--card))',              // Corresponds to PRD surface color #FFFFFF
          foreground: 'hsl(var(--card-foreground))'  // Corresponds to PRD primaryText color #000000 on surface
        },
        secondaryText: 'hsl(var(--secondary-text-color))', // Corresponds to PRD secondaryText color #878A99
        // Removed unused color definitions: destructive, muted, accent, popover, original secondary, sidebar
      },
      borderRadius: {
        lg: 'var(--radius)', // 0.5rem
        md: 'calc(var(--radius) - 2px)', // 0.5rem - 2px = 0.375rem (matches Tailwind's default 'md' and PRD's 'rounded-md')
        sm: 'calc(var(--radius) - 4px)'  // 0.5rem - 4px = 0.25rem
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'], // Uses 'Nunito' from CSS variable, with sans-serif fallback
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
