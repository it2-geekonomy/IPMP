import type { ReactNode } from "react";

type TooltipProps = {
  content: string;
  children: ReactNode;
  className?: string;
};

export function Tooltip({ content, children, className = "" }: TooltipProps) {
  return (
    <span title={content} className={`inline-flex ${className}`}>
      {children}
    </span>
  );
}
