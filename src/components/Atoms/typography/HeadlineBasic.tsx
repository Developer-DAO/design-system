import cx from "classnames";
import React, { HTMLAttributes } from "react";

interface HeadlineProps extends HTMLAttributes<HTMLHeadingElement> {
	color?: string;
}

const HeadlineBasic = ({ color, children, className, ...props }: HeadlineProps) => {
	return (
		<h5
			{...props}
			className={cx("text-lg md:text-xl font-bold", color && `text-${color}`, className)}
		>
			{children}
		</h5>
	);
};

export default HeadlineBasic;
