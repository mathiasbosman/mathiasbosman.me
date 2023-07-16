export enum ImageDecoding {
  Auto = "auto",
  Sync = "sync",
  Async = "async",
}

export interface HTMLImage {
  alt: string;
  src: string;
}

export interface HTMLSimpleLink {
  href: string;
  text?: string;
}

export interface Period {
  from: Date;
  to?: Date;
}

export const renderPeriodYearString = (
  period: Period,
  fallback: string,
): string | number => {
  const fromYear = period.from.getFullYear();
  const toYear = period.to ? period.to.getFullYear() : fallback;

  if (fromYear === toYear) {
    return fromYear;
  }

  return [period.from.getFullYear(), toYear].filter((y) => y).join(" - ");
};
