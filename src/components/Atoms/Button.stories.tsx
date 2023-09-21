import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ThunderIcon } from "../../icons";
import Button from "./Button";

const meta: Meta<typeof Button> = {
	title: "atoms/Button",
	component: Button,
	args: {
		label: "This is a Button",
		size: "medium",
		variant: "primary",
		border: "neutral-200",
		disabled: false,
		loading: false,
	},
	argTypes: {
		label: {
			name: "Label",
			control: "text",
		},
		size: {
			name: "Size",
			control: "select",
			options: ["medium", "small", "compact"],
		},
		variant: {
			name: "Button Type",
			control: "select",
			options: ["primary", "secondary"],
		},
		border: {
			name: "Border Color",
			control: "select",
			options: ["primary-black", "primary-grey", "primary-white"],
		},
		disabled: {
			name: "Disabled",
			control: "boolean",
		},
		loading: {
			name: "Loading",
			control: "boolean",
		},
		icon: {
			name: "Icon",
			control: {
				type: "select",
				options: {
					None: null,
					YourIcon: <ThunderIcon />,
				},
			},
		},
		iconPosition: {
			name: "Icon Position",
			control: {
				type: "select",
				options: ["left", "right"],
			},
		},
	},
};

export default meta;

type ButtonStory = StoryObj<typeof Button>;

export const PrimaryButton: ButtonStory = {
	args: {
		variant: "primary",
	},
	parameters: {
		// backgrounds: { default: "dark" },
	},
};

export const SecondaryButton: ButtonStory = {
	args: {
		variant: "secondary",
	},
	parameters: {
		// backgrounds: { default: "dark" },
	},
};

export const DisabledButton: ButtonStory = {
	args: {
		disabled: true,
	},
	parameters: {
		// backgrounds: { default: "dark" },
	},
};

export const IconLeftButton: ButtonStory = {
	args: {
		variant: "primary",
		icon: <ThunderIcon />,
		iconPosition: "left",
	},
	parameters: {
		// backgrounds: { default: "dark" },
	},
};

export const IconRightButton: ButtonStory = {
	args: {
		variant: "primary",
		icon: <ThunderIcon />,
		iconPosition: "right",
	},
	parameters: {
		// backgrounds: { default: "dark" },
	},
};
