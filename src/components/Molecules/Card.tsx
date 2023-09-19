import cx from "classnames";
import React from "react";

interface SVGGradientBorderProps {
	strokeWidth?: number;
	startColor: string;
	middleColor: string;
	endColor: string;
	borderRadius?: "sm" | "md" | "lg" | "full" | "none";
	angle?: number; // Angle in degrees
}

const SVGGradientBorder: React.FC<SVGGradientBorderProps> = ({
	strokeWidth = 1,
	startColor,
	middleColor,
	endColor,
	borderRadius = "none",
	angle = 0,
}) => {
	const calculateRadius = () => {
		switch (borderRadius) {
			case "sm":
				return "5%";
			case "md":
				return "10%";
			case "lg":
				return "30%";
			case "full":
				return "50%";
			default:
				return "0%";
		}
	};

	// Calculate x and y offsets using trigonometry
	const x1 = 50 + 50 * Math.cos((angle - 90) * (Math.PI / 180));
	const y1 = 50 + 50 * Math.sin((angle - 90) * (Math.PI / 180));
	const x2 = 50 - 50 * Math.cos((angle - 90) * (Math.PI / 180));
	const y2 = 50 - 50 * Math.sin((angle - 90) * (Math.PI / 180));

	const rx = calculateRadius();
	const ry = calculateRadius();

	// Adjust the strokeWidth based on the device pixel ratio.
	const devicePixelRatio = typeof window !== "undefined" ? window.devicePixelRatio : 1;
	const adjustedStrokeWidth = strokeWidth * devicePixelRatio;

	return (
		<svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
			<defs>
				<linearGradient id="gradient" x1={`${x1}%`} y1={`${y1}%`} x2={`${x2}%`} y2={`${y2}%`}>
					<stop offset="0%" style={{ stopColor: startColor }} />
					<stop offset="50%" style={{ stopColor: middleColor }} />
					<stop offset="100%" style={{ stopColor: endColor }} />
				</linearGradient>
			</defs>
			<rect
				x={adjustedStrokeWidth / 2}
				y={adjustedStrokeWidth / 2}
				width={`calc(100% - ${adjustedStrokeWidth}px)`}
				height={`calc(100% - ${adjustedStrokeWidth}px)`}
				fill="none"
				strokeWidth={adjustedStrokeWidth}
				stroke="url(#gradient)"
				rx={rx}
				ry={ry}
			/>
		</svg>
	);
};

interface CardProps {
	withGradientBorder?: boolean;
	borderRadius?: "sm" | "md" | "lg" | "full" | "none";
	startColor?: string;
	middleColor?: string;
	endColor?: string;
	borderSize?: number;
	className?: string;
	children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
	withGradientBorder = false,
	borderRadius = "none",
	startColor = "white",
	middleColor = "gray",
	endColor = "black",
	borderSize = 2,
	className,
	children,
}) => {
	const paddingClass = `p-${borderSize + 1}`; // Assuming that 1 unit in tailwind's spacing scale corresponds to 0.25rem

	return (
		<div
			className={cx(
				"relative overflow-hidden p-6",
				borderRadius && "rounded-" + borderRadius,
				paddingClass,
				className,
			)}
		>
			{withGradientBorder && (
				<div className="absolute top-0 left-0 w-full h-full z-10">
					<SVGGradientBorder
						strokeWidth={borderSize}
						startColor={startColor}
						middleColor={middleColor}
						endColor={endColor}
						borderRadius={borderRadius}
					/>
				</div>
			)}
			{children}
		</div>
	);
};

export default Card;
