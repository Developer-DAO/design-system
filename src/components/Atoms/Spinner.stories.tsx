import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import Spinner from "./Spinner";

// Meta configuration
const meta: Meta<typeof Spinner> = {
	title: "atoms/spinner/Spinner",
	component: Spinner,
	argTypes: {
		size: {
			name: "Size",
			control: "select",
			options: ["extra-small", "small", "large", "custom"],
		},
		color: {
			name: "Color",
			control: "color",
			defaultValue: "#E5E7EB",
		},
	},
};

export default meta;

// Story definition
type SpinnerStory = StoryObj<typeof Spinner>;

export const SpinnerTemplate: SpinnerStory = (args) => <Spinner {...args} />;

SpinnerTemplate.args = {
	size: "large",
	color: "#E5E7EB",
};

SpinnerTemplate.storyName = "Default Spinner";
