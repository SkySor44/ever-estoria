module.exports = {
  mode: "jit",
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Poppins"', "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        bekah: {
          /* your theme name */ primary: "#CBB4A0" /* Primary color */,
          "primary-focus": "#bd9a7d" /* Primary color - focused */,
          "primary-content":
            "#FFFDFA" /* Foreground content color to use on primary color */,

          secondary: "#CFD0CD" /* Secondary color */,
          "secondary-focus": "#afb0ae" /* Secondary color - focused */,
          "secondary-content":
            "#FFFDFA" /* Foreground content color to use on secondary color */,

          accent: "#544B3D" /* Accent color */,
          "accent-focus": "#473d2c" /* Accent color - focused */,
          "accent-content":
            "#ffffff" /* Foreground content color to use on accent color */,

          neutral: "#C3A39A" /* Neutral color */,
          "neutral-focus": "#bd8d80" /* Neutral color - focused */,
          "neutral-content":
            "#ffffff" /* Foreground content color to use on neutral color */,

          "base-100":
            "#ffffff" /* Base color of page, used for blank backgrounds */,
          "base-200": "#f9fafb" /* Base color, a little darker */,
          "base-300": "#d1d5db" /* Base color, even more darker */,
          "base-content":
            "#544B3D" /* Foreground content color to use on base color */,

          info: "#2094f3" /* Info */,
          success: "#009485" /* Success */,
          warning: "#ff9900" /* Warning */,
          error: "#ff5724" /* Error */,
        },
      },
    ],
  },
};
