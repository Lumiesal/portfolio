/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {				
		extend: {
			fontFamily: {
				lufga: ['Lufga', 'sans-serif'], // Registrar la fuente personalizada 'Lufga'
				urbanist: ['Urbanist', 'sans-serif'], // Registrar la fuente personalizada 'Lufga'
			},
			colors: {
				'custom-gray': '#171717',
				'custom-green': '#4DC493',
				'custom-green-50': '#00c5931a',
			},
			spacing: {
				'8xl': '1300px',
				'9xl': '1440px',
			},
		},
	},
	plugins: [],
}
