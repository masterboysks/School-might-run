const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          "grey-600": "#596579",
          btn: "#0052CC",
          "btn-disabled": "#145ECC",
          "grey-700": "#374253",
          "profile-circle": "#014DA1",
          "grey-100": "#F4F7FB",
          "grey-200": "#E6EAF0",
          "grey-400": "#A7B2C3",
          field: "#C2C9D1",
          "grey-300": "#D0D7E2",
          "grey-50": "#F0F2FF",
          50: "#E1F0FF",
          "grey-900": "#748DA6",
        },
        warning: {
          50: "#FFF9F1",
        },
        logo: "rgba(3, 77, 162, 1)",
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require('flowbite/plugin'),
    require('tailwind-children'),
  ],
};
