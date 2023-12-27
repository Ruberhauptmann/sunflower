module.exports = {
  content: [
    "./themes/**/layouts/**/*.html",
    "./content/**/layouts/**/*.html",
    "./layouts/**/*.html",
    "./content/**/*.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [
      require("@tailwindcss/typography"),
      require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        sunflower: {
          "primary": "#073B3A",
          "secondary": "#E9C46A",
          "accent": "#542344",
          "neutral": "#ffffff",
          "base-100": "#e5e7eb",
          "info": "#C6D4FF",
          "success": "#41766F",
          "warning": "#CF933A",
          "error": "#A32929",
        },
      },
    ],
    logs: false,
  }
}
