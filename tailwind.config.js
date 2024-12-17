/** @type {import('tailwindcss').Config} */
const colors = {
  primaryText: "#F4F2F0",
  secondaryText: "#928C97",
  accent: "#C2B8FF",
  white: "#FFFFFF",
  dark: "#0C0A10",
};
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      header: {
        text: colors.primaryText,
        bg: "rgba(0, 0, 0, 0.1)",
        pseudo: colors.secondaryText,
        hover: {
          text: colors.accent,
        },
        button: {
          accent: {
            text: colors.accent,
            bg: colors.accent,
          },
          primary: {
            text: "#221D2A",
            bg: colors.white,
          },
        },
      },

      opinion: {
        text: colors.primaryText,
        accent: colors.accent,
        link: colors.white,
      },

      benefitCopy: {
        heading: colors.primaryText,
        text: colors.secondaryText,
      },

      bigFeature: {
        headingNormal: colors.secondaryText,
        headingMarked: colors.primaryText,
        accent: colors.accent,
        bgCard: "#27262D",
      },

      infrastructureSimplifier: {
        headingNormal: colors.primaryText,
        headingMarked: colors.accent,
      },

      downFeature: {
        heading: colors.primaryText,
        normal: colors.secondaryText,
      },

      footer: {
        headingNormal: colors.primaryText,
        headingMarked: colors.accent,
        link: "#696675",
      },

      alertBanner: {
        text: colors.dark,
        bg: colors.accent,
        link: "#6A53FE",
        tag: {
          text: colors.dark,
          bg: colors.primaryText,
        },
      },

      menuDropdown: {
        text: colors.primaryText,
        bg: colors.dark,
      },
      main: {
        header: colors.primaryText,
        text: colors.white,
        accent: colors.accent,
      },

      button: {
        primary: {
          text: "#221D2A",
          bg: colors.white,
          border: colors.white,
          hover: {
            bg: "#E0E0E0",
          },
        },
        accent: {
          text: colors.accent,
          border: colors.accent,
          hover: {
            text: colors.white,
            border: colors.white,
          },
        },
      },

      container: {
        bg: colors.dark,
      },
    },

    fontFamily: {
      main: ["Inter", "Georgia", "sans-serif"],
    },

    extend: {
      screens: {
        xs: "21rem",
      },

      backgroundImage: {
        imageIntroSection: "url('/pictures/section/star-wheel.svg')",
        imageOpinionSection:
          "url('/pictures/section/opinion-section-background.png')",
        imagePurpleSlideSection: "url('/pictures/section/purple-slide.svg')",
      },

      spacing: {
        "8xl": "90rem",
      },
      width: {
        13: "3.25rem",
      },

      backgroundSize: {
        lcp: "50rem",
      },
      animation: {
        slide: "slide 30s linear infinite",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
