/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          base: withOpacity("--color-text-primary"),
          plane: withOpacity("--color-text-plane"),
          secondary: withOpacity("--color-text-secondary"),

          grey: withOpacity("--color-text-grey"),
          "grey-100": withOpacity("--color-bg-grey"),
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
