import type { HTMLAttributes } from "react";

type BadgeVariant = "default" | "success" | "warning" | "error";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-gray-100 text-gray-800",
  success: "bg-green-100 text-green-800",
  warning: "bg-yellow-100 text-yellow-800",
  error: "bg-red-100 text-red-800",
};

export function Badge({ variant = "default", className = "", ...props }: BadgeProps) {
  return (
    <span
      className={`type-caption inline-flex items-center rounded-full px-2.5 py-0.5 font-medium ${variantClasses[variant]} ${className}`}
      {...props}
    />
  );
}
