import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`type-body h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 outline-none placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-black/20 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";
