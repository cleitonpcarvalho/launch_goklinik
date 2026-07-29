import type { Config } from "tailwindcss";

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./i18n/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryTeal: "rgb(26, 107, 124)",
        primaryTealDark: "rgb(18, 78, 91)",
        primaryTealLight: "rgba(26, 107, 124, 0.1)",
        goldAccent: "rgb(216, 155, 40)",
        goldAccentLight: "rgba(216, 155, 40, 0.12)",
        medicGreen: "rgb(62, 107, 72)",
        medicGreenLight: "rgba(62, 107, 72, 0.12)",
        backgroundDark: "rgb(14, 23, 38)",
        backgroundDarkElevated: "rgb(22, 33, 51)",
        backgroundWarmLight: "rgb(249, 243, 239)",
        backgroundCleanWhite: "rgb(255, 255, 255)",
        backgroundSubtleGray: "rgb(245, 247, 250)",
        headingDark: "rgb(21, 27, 38)",
        bodyDark: "rgb(55, 65, 81)",
        mutedDark: "rgb(102, 112, 133)",
        headingLight: "rgb(255, 255, 255)",
        bodyLight: "rgba(255, 255, 255, 0.85)",
        mutedLight: "rgba(255, 255, 255, 0.6)",
      },
      fontFamily: {
        heading: ["Urbanist", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        body: ["Sora", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        12: "12px",
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
        24: "24px",
        30: "30px",
        36: "36px",
        48: "48px",
        64: "64px",
        80: "80px",
      },
      fontWeight: {
        light: "300",
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "20px",
        xl: "30px",
        pill: "100px",
        circle: "50%",
      },
      boxShadow: {
        cardLeve: "0px 10px 25px -5px rgba(14, 23, 38, 0.08)",
        destaqueTeal: "0px 20px 35px -10px rgba(26, 107, 124, 0.15)",
        destaqueProfundo: "0px 25px 50px -12px rgba(14, 23, 38, 0.25)",
        glowDourado: "0px 0px 25px rgba(216, 155, 40, 0.3)",
        glowVerde: "0px 0px 30px rgba(62, 107, 72, 0.25)",
      },
    },
  },
} satisfies Config;

export default config;
