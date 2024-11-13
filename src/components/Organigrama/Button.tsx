import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "default" | "ghost";
	size?: "sm" | "md" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
	children,
	variant = "default",
	size = "md",
	className = "",
	...props
}) => {
	const baseStyles =
		"inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

	const variantStyles = {
		default: "bg-primary text-primary-foreground hover:bg-primary/90",
		ghost: "hover:bg-accent hover:text-accent-foreground",
	};

	const sizeStyles = {
		sm: "h-9 px-3 text-xs",
		md: "h-10 py-2 px-4",
		lg: "h-11 px-8",
	};

	return (
		<button
			className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
			{...props}
		>
			{children}
		</button>
	);
};
