import React, { ReactElement, ReactNode } from "react";

export type GradientWrapperProps = {
	children: ReactNode;
	fromColor?: string;
	toColor?: string;
};

const GradientWrapper: React.FC<GradientWrapperProps> = ({
	children,
	fromColor = "from-agency-pink", // default colors
	toColor = "to-agency-orange",
}) => {
	const baseClasses = `bg-gradient-to-r ${fromColor} ${toColor} bg-clip-text text-transparent`;

	// Apply the gradient styles first, then the child component's styles
	return React.cloneElement(children as ReactElement, {
		className: `${baseClasses} ${(children as ReactElement).props.className}`,
	});
};

export default GradientWrapper;
