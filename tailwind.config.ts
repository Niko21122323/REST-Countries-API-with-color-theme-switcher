import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "bg-l": "var(--background-color)",
        "bg-d": "var(--background-color-d)",
        "txt-l": "var(--text-color)",
        "txt-d": "var(--text-color-d)",
        "accent-l": "var(--accent-color)",
        "accent-d": "var(--accent-color-d)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
}
export default config
