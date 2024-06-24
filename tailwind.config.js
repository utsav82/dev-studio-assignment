/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        "font-primary": "var(--font-color-primary)",
        "font-secondary": "var(--font-color-secondary)",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["hover"],
      textColor: ["hover"],
    },
  },
  plugins: [],
};
