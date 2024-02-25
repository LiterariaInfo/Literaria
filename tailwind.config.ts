import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		screens: {
			laptop: {
				max: '1600px'
			},
			tablet: {
				max: '1250px'
			},
			mobile: {
				max: '900px'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
