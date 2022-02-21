module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: {
        default: "#000",
      },
      brown: {
        200: "#FFF9EF",
        600: "#80470F",
      },
      red: {
        200: "#FF678B",
        400: "#FF538B",
        600: "#F23A3A",
      },
      pink: {
        100: "#FF86D1",
        400: "#FF86D1",
        600: "#EB56AD",
      },
    },
    fontFamily: {
      dancingscript: ["Dancing Script", "cursive", "system-ui", "-apple-system"],
      poppins: ["Poppins", "sans-serif", "system-ui", "-apple-system"],
      comfortaa: ["Comfortaa", "monospace", "sans-serif", "system-ui", "-apple-system"],
    },
    spacing: {
      "0": "0rem",
      "2": "0.125rem",
      "4": "0.25rem",
      "6": "0.375rem",
      "8": "0.5rem",
      "10": "0.625rem",
      "12": "0.75rem",
      "14": "0.875rem",
      "16": "1rem",
      "18": "1.125rem",
      "20": "1.25rem",
      "22": "1.375rem",
      "24": "1.5rem",
      "26": "1.625rem",
      "28": "1.75rem",
      "30": "1.875",
      "32": "2rem",
      "34": "2.125rem",
      "36": "2.25rem",
      "38": "2.375rem",
      "40": "2.5rem",
      "42": "2.625rem",
      "48": "3rem",
      "72": "4.5rem",
      "96": "6rem",
    },
    fontSize: {
      "4": "0.25rem",
      "8": "0.5rem",
      "12": "0.75rem",
      "14": "0.875rem",
      "16": "1rem",
      "18": "1.125rem",
      "24": "1.5rem",
      "28": "1.75rem",
      "30": "1.875rem",
      "32": "2rem",
    },
    extend: {
      backdropBlur: {
        "2": "2px",
      }
    },
  },
  plugins: [],
};
