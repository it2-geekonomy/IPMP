export type TypographyBreakpoint = "mobile" | "tablet" | "desktop";

export type TypographyVariant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "body"
  | "small"
  | "caption";

type TypographyScale = Record<TypographyBreakpoint, number>;

export const typographyUsage: Record<TypographyVariant, string> = {
  display: "Main title",
  h1: "Page title",
  h2: "Section",
  h3: "Card title",
  h4: "Sub section",
  body: "Default text",
  small: "Tables",
  caption: "Labels",
};

export const typographyScale: Record<TypographyVariant, TypographyScale> = {
  display: {
    mobile: 28,
    tablet: 32,
    desktop: 36,
  },
  h1: {
    mobile: 24,
    tablet: 26,
    desktop: 30,
  },
  h2: {
    mobile: 20,
    tablet: 22,
    desktop: 24,
  },
  h3: {
    mobile: 18,
    tablet: 19,
    desktop: 20,
  },
  h4: {
    mobile: 16,
    tablet: 17,
    desktop: 18,
  },
  body: {
    mobile: 14,
    tablet: 15,
    desktop: 16,
  },
  small: {
    mobile: 13,
    tablet: 13,
    desktop: 14,
  },
  caption: {
    mobile: 12,
    tablet: 12,
    desktop: 12,
  },
};

export const typographyClassMap: Record<TypographyVariant, string> = {
  display: "type-display",
  h1: "type-h1",
  h2: "type-h2",
  h3: "type-h3",
  h4: "type-h4",
  body: "type-body",
  small: "type-small",
  caption: "type-caption",
};

export function getTypographySize(
  variant: TypographyVariant,
  breakpoint: TypographyBreakpoint,
): string {
  return `${typographyScale[variant][breakpoint]}px`;
}

export function typographyClass(variant: TypographyVariant): string {
  return typographyClassMap[variant];
}
