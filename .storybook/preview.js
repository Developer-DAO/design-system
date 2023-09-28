import "../src/styles.css";
import "../src/tailwind.css";
import d_d_theme from "./d_d_theme";

const preview = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	parameters: {
		docs: {
			theme: d_d_theme,
		},
		backgrounds: {
			values: [
				{ name: "dark", value: "#000" },
				{ name: "white", value: "#ffffff" },
			],
			default: "dark",
		},
	},
};

export default preview;
