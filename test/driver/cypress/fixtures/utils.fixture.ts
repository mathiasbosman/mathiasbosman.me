import type { HTMLImage, HTMLSimpleLink } from "@shared/utils.ts";
import { Period } from "@shared/utils.ts";

export const htmlImageFixture = (src: string, alt: string): HTMLImage => {
  return { src, alt };
};

export const htmlSimpleLinkFixture = (
  href: string,
  text: string,
): HTMLSimpleLink => {
  return { href, text };
};

export const periodFixture = (from: Date, to: Date | undefined): Period => {
  return new Period(from, to);
};
