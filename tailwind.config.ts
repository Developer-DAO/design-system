import type { Config } from 'tailwindcss';
import {theme, colorClasses, variantColorClasses } from './src/theme';

const config: Config = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx,md,mdx}",
	],
	/* Avoid using patterns here as it will break the build */
	safelist: [
		...colorClasses,
		...variantColorClasses
	],
	theme: {
		extend: {
			...theme
		}
	},
	variants: {
		extend: {
		  padding: ['responsive'],
		},
	  },
};

export default config;
