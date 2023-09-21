import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta: Meta<typeof Card> = {
	title: "Molecules/Card",
	component: Card,
	args: {
		withGradientBorder: false,
		customBorderRadius: "none",
		noPadding: false,
		startColor: "white",
		middleColor: "gray",
		endColor: "black",
		borderSize: 2,
	},
	argTypes: {
		withGradientBorder: {
			name: "With Gradient Border",
			control: "boolean",
		},
		customBorderRadius: {
			name: "Custom Border Radius",
			control: {
				type: "select",
				options: ["sm", "md", "lg", "full", "none"],
			},
		},
		noPadding: {
			name: "No Padding",
			control: "boolean",
		},
		startColor: {
			name: "Start Color",
			control: "color",
		},
		middleColor: {
			name: "Middle Color",
			control: "color",
		},
		endColor: {
			name: "End Color",
			control: "color",
		},
		borderSize: {
			name: "Border Size",
			control: "number",
		},
	},
};

export default meta;

type CardStory = StoryObj<typeof Card>;

export const DefaultCard: CardStory = {
	args: {},
};

export const CardWithGradientBorder: CardStory = {
	args: {
		withGradientBorder: true,
	},
};

export const CardWithCustomRadius: CardStory = {
	args: {
		customBorderRadius: "sm",
	},
};

export const CardWithNoPadding: CardStory = {
	args: {
		noPadding: true,
	},
};

export const CardWithColoredBorder: CardStory = {
	args: {
		withGradientBorder: true,
		startColor: "#FF7F7F",
		middleColor: "#FFD27F",
		endColor: "#7FFF7F",
	},
};
