import cx from "classnames";
import React from "react";

interface HeadlineProps extends React.HTMLAttributes<HTMLHeadingElement> {
	color?: string;
}

const Headline2 = ({ color, children, ...props }: HeadlineProps) => {
	return (
		<h2 {...props} className={cx("text-5xl md:text-6xl pb-2", color && `text-${color}`)}>
			{children}
		</h2>
	);
};

export default Headline2;
