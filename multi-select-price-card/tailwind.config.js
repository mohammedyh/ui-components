const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.html'],
	theme: {
		extend: {
			animation: { 'spin-fast': 'spin 600ms linear infinite' },
			width: { 22: '5.5rem' },
			height: { 22: '5.5rem' },

			fontFamily: {
				primary: ["'Poppins'", ...defaultTheme.fontFamily.sans],
			},

			colors: {
				body: '#f1f4ff',
				accent: '#1b255a',
			},

			boxShadow: {
				card: '0px 5px 30px -5px rgba(240, 232, 235, 1)',
			},
		},
	},
	plugins: [],
};
