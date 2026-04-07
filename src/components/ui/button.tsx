import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "default" | "outline" | "ghost" | "destructive";
type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variantClasses: Record<ButtonVariant, string> = {
  default: "bg-black text-white hover:bg-black/90",
  outline: "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50",
  ghost: "bg-transparent text-gray-900 hover:bg-gray-100",
  destructive: "bg-red-600 text-white hover:bg-red-700",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-8 px-3",
  md: "h-10 px-4",
  lg: "h-11 px-6",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`type-body inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
