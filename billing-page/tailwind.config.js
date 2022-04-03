const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["src/**/*.html"],
	theme: {
		extend: {
			backgroundColor: {
				sidebar: "#f8f8ff",
			},

			fontFamily: {
				primary: ["'Poppins'", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
