import cx from "classnames";
import React from "react";

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
	color?: string;
	className?: string;
}

const Body2 = ({ color, children, className, ...props }: ParagraphProps) => {
	return (
		<p
			className={cx(
				"text-sm md:text-base tracking-wide",
				color ? `text-${color}` : "text-white",
				className,
			)}
			{...props}
		>
			{children}
		</p>
	);
};

export default Body2;
