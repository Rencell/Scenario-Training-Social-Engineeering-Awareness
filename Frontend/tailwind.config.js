export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"], // Ensure Tailwind scans Vue files
    theme: {
      extend: {
        colors: {
          primary: "#75BD3D", // Custom color
        },
      },
    },
    plugins: [],
  };
  