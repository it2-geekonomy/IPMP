import type { HTMLAttributes } from "react";
import { typographyClass, type TypographyVariant } from "@/styles/typography";

type TextTag = "p" | "span" | "h1" | "h2" | "h3" | "h4" | "label" | "div";

type TextProps = HTMLAttributes<HTMLElement> & {
  as?: TextTag;
  variant?: TypographyVariant;
};

export function Typography({
  as = "p",
  variant = "body",
  className = "",
  ...props
}: TextProps) {
  const Component = as;

  return (
    <Component className={`${typographyClass(variant)} ${className}`} {...props} />
  );
}
