import { Buffer } from "buffer";

export interface HTMLImage {
  alt: string;
  src: string;
  loading?: "eager" | "lazy";
  decoding?: "async" | "auto" | "sync";
}

export interface HTMLSimpleLink {
  href: string;
  text?: string;
}

export class Period {
  from: Date;
  to?: Date;

  constructor(from: Date, to?: Date) {
    this.from = from;
    this.to = to;
  }

  getUntilString(): string {
    return this.to?.getFullYear().toString() ?? "present";
  }

  toString(): string | number {
    const fromYear = this.from.getFullYear();
    const toYear = this.to != null ? this.to.getFullYear() : "present";

    if (fromYear === toYear) {
      return fromYear;
    }

    return [fromYear, toYear].filter((y) => y).join(" - ");
  }
}

export function escapeHtml(input: string): string {
  const matchHtmlRegExp = /["'&<>]/;
  const str = "" + input;
  const match = matchHtmlRegExp.exec(str);

  if (match == null) {
    return str;
  }

  let escape: string;
  let html = "";
  let index: number;
  let lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34: // "
        escape = "&quot;";
        break;
      case 38: // &
        escape = "&amp;";
        break;
      case 39: // '
        escape = "&#39;";
        break;
      case 60: // <
        escape = "&lt;";
        break;
      case 62: // >
        escape = "&gt;";
        break;
      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
}

export function sendEmail(to: string, subject?: string): void {
  const buffer = Buffer.from(to, "base64");
  window.location.href =
    `mailto:${buffer.toString()}` +
    (subject !== undefined ? `?subject=${escapeHtml(subject)}` : "");
}

export function shuffleArray<T>(original: T[]): T[] {
  if (!Array.isArray(original) || !original.length) {
    return [];
  }

  const shuffled = original
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  // if one element is on different index we're good
  let equality = true;
  for (let index = 0; index < shuffled.length; index++) {
    if (shuffled[index] !== original[index]) {
      equality = false;
      break;
    }
  }
  return equality ? shuffleArray(original) : shuffled;
}
