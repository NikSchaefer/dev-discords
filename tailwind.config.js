/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.tsx"],
	theme: {
		extend: {
			colors: {
				primary: {
					100: "#f2e1fb",
					200: "#e5c4f6",
					300: "#d7a6f2",
					400: "#ca89ed",
					500: "#bd6be9",
					600: "#9756ba",
					700: "#71408c",
					800: "#4c2b5d",
					900: "#26152f",
					DEFAULT: "#bd6be9",
				},
			},
			fontFamily: {
				inter: ["Inter", "sans-serif"],
			},
		},
	},
	plugins: [],
};
