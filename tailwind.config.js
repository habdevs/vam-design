/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,jsx,ts,tsx,html}',
		'./components/**/*.{js,jsx,ts,tsx,html}',
		'./src/**/*.{js,jsx,ts,tsx,html}',
	],
	theme: {
		fontFamily: {
			primary: 'Saira',
		},
		container: {
			padding: {
				DEFAULT: '1.5rem',
				lg: '3rem',
			},
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
		},
		extend: {
			colors: {
				primary: '#181a20',
				accent: '#286F6C',
				grey: {
					DEFAULT: '#828387',
					1: '#D9D9D9',
					2: '#E7E9EB',
					3: '#F5F5F5',
				},
				white: '#fff',
				pink: 'pink',
			},
			backgroundImage: theme => ({
				// 'nature-light': "url('/nature-light.jpg')",
				hero: "url('/hero-bg.png')",
				newsletter: "url('/newsletter.png')",
			}),
			dropShadow: {
				primary: '0px 4px 10px rgba(15, 27, 51, 0.05);',
			},
		},
	},
	plugins: [],
}
