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
        "slide-right": "slide-right 1.0s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "slide-left": "slide-left 1.0s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "slide-in-left": "slide-in-left 1.2s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "slide-in-right": "slide-in-right 1.2s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "tracking-in-contract-bck-bottom": "tracking-in-contract-bck-bottom 1s cubic-bezier(0.215, 0.610, 0.355, 1.000)   both",
        "tracking-in-contract-bck": "tracking-in-contract-bck 1s cubic-bezier(0.215, 0.610, 0.355, 1.000)   both",
        "swing-in-top-fwd": "swing-in-top-fwd 1.5s cubic-bezier(0.175, 0.885, 0.320, 1.275)   both",
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
        },
        "tracking-in-contract-bck": {
          "0%": {
              "letter-spacing": "1em",
              transform: "translateZ(400px)",
              opacity: "0"
          },
          "40%": {
              opacity: ".6"
          },
          to: {
              transform: "translateZ(0)",
              opacity: "1"
          }
        },
        "swing-in-top-fwd": {
          "0%": {
              transform: "rotateX(-100deg)",
              "transform-origin": "top",
              opacity: "0.2"
          },
          to: {
              transform: "rotateX(0deg)",
              "transform-origin": "top",
              opacity: "1"
          }
        },
        "slide-right": {
          "0%": {
              transform: "translateX(-150px)"
          },
          to: {
              transform: "translateX(0)"
          }
        },
        "slide-left": {
          "0%": {
              transform: "translateX(200px)"
          },
          to: {
              transform: "translateX(0)"
          }
        },
        "slide-in-left": {
          "0%": {
              transform: "translateX(-1000px)",
              opacity: "0"
          },
          to: {
              transform: "translateX(0)",
              opacity: "1"
          }
        },
        "slide-in-right": {
          "0%": {
              transform: "translateX(1000px)",
              opacity: "0"
          },
          to: {
              transform: "translateX(0)",
              opacity: "1"
          }
        }
      },
    },
  },
  plugins: [],
}
export default config
