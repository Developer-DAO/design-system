import cx from "classnames";
import React from "react";

export interface GridProps {
	id?: string;
	children: React.ReactNode;
	className?: string;
}

const Grid = ({ id, children, className }: GridProps) => (
	<section
		id={id}
		className={cx(
			"flex flex-col w-full md:w-auto md:grid grid-flow-row grid-cols-1 auto-rows-auto gap-y-md",
			"lg:grid-cols-lg lg:gap-lg",
			"xl:grid-cols-xl",
			"z-10 mt-40 m-min3",
			className,
		)}
	>
		{children}
	</section>
);

export default Grid;
