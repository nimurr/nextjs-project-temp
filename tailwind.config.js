// tailwind.config.js
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}", // Adjust paths to fit your project structure
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#1D4ED8", // Custom primary color
                secondary: "#D97706", // Custom secondary color
            },
        },
    },
    plugins: [],
};
