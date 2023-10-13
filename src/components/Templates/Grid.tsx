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
			"gap-y-md flex w-full grid-flow-row auto-rows-auto grid-cols-1 flex-col md:grid md:w-auto",
			"lg:grid-cols-lg lg:gap-lg",
			"xl:grid-cols-xl",
			"m-min3 z-10 mt-40",
			className,
		)}
	>
		{children}
	</section>
);

export default Grid;
