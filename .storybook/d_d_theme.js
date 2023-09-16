// .storybook/yourTheme.js
import { create } from "@storybook/theming/create";
export default create({
	base: "dark",

	colorPrimary: "#1e1e1f",
	colorSecondary: "white",

	fontBase: '"Poppins", sans-serif',
	fontCode: "monospace",

	appBg: "#1f2938",
	appContentBg: "rgba(0, 0, 0, 1)",
	appBorderColor: "grey",

	// Text colors
	textColor: "#ffffff",
	textInverseColor: "#191919",

	barTextColor: "white",
	barSelectedColor: "grey",
	barBg: "#000000",

	brandTitle: "D_D Design System",
	brandUrl: "https://developerdao.com",
	brandImage: "https://www.developerdao.com/D_D_logo-dark.svg",
	brandTarget: "_self",
});
