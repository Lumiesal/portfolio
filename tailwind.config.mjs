/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'custom-gray': '#171717',
			'custom-green': '#4DC493',
		},
		fontFamily: {
			lufga: ['Lufga', 'sans-serif'], // Registrar la fuente personalizada 'Lufga'
		  },
		extend: {
			spacing: {
				'8xl': '1300px',
				'9xl': '1440px',
			},
		},
	},
	plugins: [],
}