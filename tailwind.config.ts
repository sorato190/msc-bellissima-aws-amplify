import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        "tracking-in-expand": "tracking-in-expand 1.5s cubic-bezier(0.165, 0.840, 0.440, 1.000)   both",
        "slide-top": "slide-top 1.0s cubic-bezier(0.215, 0.610, 0.355, 1.000)    both",
        "tracking-in-contract-bck-bottom": "tracking-in-contract-bck-bottom 1s cubic-bezier(0.215, 0.610, 0.355, 1.000)   both"
    },
    keyframes: {
        "tracking-in-expand": {
            "0%": {
                "letter-spacing": "-.5em",
                opacity: "0"
            },
            "40%": {
                opacity: ".6"
            },
            to: {
                opacity: "1"
            }
        },
        "slide-top": {
          "0%": {
              transform: "translateY(-100px)"
          },
          to: {
              transform: "translateY(0)"
          }
        },
        "tracking-in-contract-bck-bottom": {
        "0%": {
            "letter-spacing": "1em",
            transform: "translateZ(400px) translateY(300px)",
            opacity: "0"
        },
        "40%": {
            opacity: ".6"
        },
        to: {
            transform: "translateZ(0) translateY(0)",
            opacity: "1"
        }
        }
    },
    },
  },
  plugins: [],
}
export default config
