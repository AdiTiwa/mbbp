/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		colors: {
			'beau_blue': '#C7D3DD',
			'mint': '#BAF2D8',
			'silver_chalice': "#ABADA9",
			'tan': "#D4B483",
			
		},
	},
	daisyui: {
		themes: [
		  {
			baseTheme: {
	   			"primary": "#e2ce5a",
	   			"secondary": "#0d1fa8",
	   			"accent": "#4ce0af",	
	   			"neutral": "#1C1C1C",	
	   			"base-100": "#343534",
	   			"info": "#78CBE2",
	   			"success": "#1BC565",	
	   			"warning": "#F58B0A",
	   			"error": "#F21C2E",
				},
			},
		],
	},
	plugins: [require('daisyui')],
}
