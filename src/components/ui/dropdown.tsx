"use client";

import type { ChangeEvent } from "react";

export type DropdownOption = {
  label: string;
  value: string;
};

type DropdownProps = {
  options: DropdownOption[];
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  className?: string;
};

export function Dropdown({
  options,
  value,
  placeholder = "Select an option",
  onChange,
  className = "",
}: DropdownProps) {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <select
      value={value}
      onChange={handleChange}
      className={`h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-black/20 ${className}`}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
