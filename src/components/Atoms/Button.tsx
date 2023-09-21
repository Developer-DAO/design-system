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
			? `border-neutral-500 hover:border-primary-white`
			: "border-neutral-600"; // Conditional text color

	const backgroundColorClasses =
		variant === "primary"
			? "bg-primary-white"
			: variant === "secondary"
			? `bg-neutral-700 hover:bg-neutral-700`
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
				"flex items-center justify-center w-fit rounded-full gap-1 transition-all border-2",
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
					"flex items-center gap-1 justify-center flex-nowrap whitespace-nowrap overflow-hidden transition-opacity",
					loading ? "opacity-0" : "opacity-100",
				)}
			>
				{icon && iconPosition === "left" && <span className="mr-1">{icon}</span>}
				{children ?? label}
				{icon && iconPosition === "right" && <span className="ml-1">{icon}</span>}
			</span>
			<span
				className={cx(
					"absolute flex items-center justify-center w-full h-full transition-opacity pointer-events-none",
					loading ? "opacity-100" : "opacity-0",
				)}
			>
				<Spinner className={`w-4 h-4 fill-${border}`} />
			</span>
		</button>
	);
};

export default Button;
