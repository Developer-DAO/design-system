import cx from "classnames";
import React from "react";

interface HeadlineProps extends React.HTMLAttributes<HTMLHeadingElement> {
	color?: string;
}

const BodyHeadline = ({ color, children, className, ...props }: HeadlineProps) => {
	return (
		<h5
			className={cx(
				"md:text-head line-clamp-2 text-xl font-semibold tracking-wide",
				color && `text-${color}`,
				className,
			)}
			{...props}
		>
			{children}
		</h5>
	);
};

export default BodyHeadline;
