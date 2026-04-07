import type { HTMLAttributes } from "react";
import { typographyClass, type TypographyVariant } from "@/styles/typography";

export function Card(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-lg border border-gray-200 bg-white p-5 shadow-sm ${props.className ?? ""}`}
      {...props}
    />
  );
}

export function CardHeader(props: HTMLAttributes<HTMLDivElement>) {
  return <div className={`mb-4 ${props.className ?? ""}`} {...props} />;
}

type CardTitleProps = HTMLAttributes<HTMLHeadingElement> & {
  typography?: TypographyVariant;
};

export function CardTitle({ typography = "h3", className = "", ...props }: CardTitleProps) {
  return (
    <h3
      className={`${typographyClass(typography)} font-semibold tracking-tight ${className}`}
      {...props}
    />
  );
}

type CardDescriptionProps = HTMLAttributes<HTMLParagraphElement> & {
  typography?: TypographyVariant;
};

export function CardDescription({
  typography = "small",
  className = "",
  ...props
}: CardDescriptionProps) {
  return <p className={`${typographyClass(typography)} text-gray-500 ${className}`} {...props} />;
}

export function CardContent(props: HTMLAttributes<HTMLDivElement>) {
  return <div className={props.className ?? ""} {...props} />;
}
