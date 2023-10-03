import cx from "classnames";
import React, { useState } from "react";
import Spinner from "./Spinner";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	label?: string;
	size?: "medium" | "small" | "compact";
	border?: string;
	variant?: "primary" | "secondary";
	icon?: React.ReactElement;
	iconPosition?: "left" | "right";
	disabled?: boolean;
	loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
	label,
	children,
	border = "primary-white",
	size = "medium",
	variant = "primary",
	icon,
	iconPosition = "left", // Default value
	disabled = false,
	loading = false,
	className,
	...props
}) => {
	const [isPressed, setIsPressed] = useState(false);

	const sizeClass = cx({
		"h-12 px-6 text-sm": size === "medium",
		"h-10 px-4 text-sm": size === "small",
		"h-8 px-2 text-xs": size === "compact",
	});

	const textColor =
		variant === "primary"
			? "text-primary-black"
			: variant === "secondary"
			? `text-neutral-500 hover:text-primary-white`
			: "text-neutral-600"; // Conditional text color

	const borderColorClasses =
		variant === "primary"
			? "border-primary-white"
			: variant === "secondary"
			? `border-neutral-600 hover:border-primary-white`
			: "border-neutral-600"; // Conditional text color

	const backgroundColorClasses =
		variant === "primary"
			? "bg-primary-white"
			: variant === "secondary"
			? `bg-neutral-800 hover:bg-neutral-700`
			: "bg-neutral-600"; // Conditional text color

	const effectClass = cx({
		"shadow-3xl ": variant === "primary" && !disabled && !isPressed,
		" shadow-white/80": variant === "primary" && !isPressed && !disabled && !loading,
		" cursor-default": !disabled && loading,
		" cursor-not-allowed": disabled,
	});

	return (
		<button
			className={cx(
				"flex w-fit items-center justify-center gap-1 rounded-full border-2 tracking-wider transition-all",
				sizeClass,
				textColor,
				borderColorClasses,
				backgroundColorClasses,
				effectClass,
				disabled && "opacity-50",
				className,
			)}
			onMouseDown={() => setIsPressed(true)}
			onMouseUp={() => setIsPressed(false)}
			onTouchStart={() => setIsPressed(true)}
			onTouchEnd={() => setIsPressed(false)}
			{...props}
		>
			<span
				className={cx(
					"flex flex-nowrap items-center justify-center gap-1 overflow-hidden whitespace-nowrap transition-opacity",
					loading ? "opacity-0" : "opacity-100",
				)}
			>
				{icon && iconPosition === "left" && <span className="mr-1">{icon}</span>}
				{children ?? label}
				{icon && iconPosition === "right" && <span className="ml-1">{icon}</span>}
			</span>
			<span
				className={cx(
					"pointer-events-none absolute flex h-full w-full items-center justify-center transition-opacity",
					loading ? "opacity-100" : "opacity-0",
				)}
			>
				<Spinner className={`h-4 w-4 fill-${border}`} />
			</span>
		</button>
	);
};

export default Button;
