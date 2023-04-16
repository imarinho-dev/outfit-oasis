/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
		'./*.vue',
	],
	theme: {
		fontFamily: {
			raleway: ['Raleway', 'sans-serif'],
			lato: ['Lato', 'sans-serif'],
		},
		extend: {},
	},
	plugins: [],
};
