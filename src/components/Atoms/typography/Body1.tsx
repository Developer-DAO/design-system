import cx from "classnames";
import React from "react";

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
	color?: string;
}

const Body1 = ({ color, children, className, ...props }: ParagraphProps) => {
	return (
		<p
			className={cx(
				"text-base md:text-lg font-medium tracking-wide",
				color ? `text-${color}` : "text-primary-white",
				className,
			)}
			{...props}
		>
			{children}
		</p>
	);
};

export default Body1;
