import "../src/styles.css";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	darkMode: {
		darkClass: "dark",
		stylePreview: true,
	},
	backgrounds: {
		values: [
			{ name: "d_d_dark", value: "#1f2938" },
			{ name: "d_d_light", value: "#ffffff" },
			{ name: "d_d_gray", value: "#fafafa" },
		],
	},
};
