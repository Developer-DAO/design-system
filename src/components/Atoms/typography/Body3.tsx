import cx from "classnames";
import React from "react";

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
	color?: string;
}

const Body3 = ({ color, children, className, ...props }: ParagraphProps) => {
	return (
		<p
			className={cx(
				"text-xs md:text-sm tracking-wide",
				color ? `text-${color}` : "text-white",
				className,
			)}
			{...props}
		>
			{children}
		</p>
	);
};

export default Body3;
