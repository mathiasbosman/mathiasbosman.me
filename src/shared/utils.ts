export interface HTMLImage {
  alt: string;
  src: string;
  loading?: 'eager' | 'lazy';
  decoding?: 'async' | 'auto' | 'sync';
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

  /**
   * Returns either the given endyear or "present".
   *
   * @return {string | number} The end year.
   */
  getUntilString(): string | number {
    return this.to?.getFullYear().toString() ?? 'present';
  }

  /**
   * Converts the date range to a string representation.
   * If both years are the same, the range is represented by the year.
   * If no "to" year is given, the year is omitted and set as "present".
   *
   * @return {string | number} The string representation of the date range.
   */
  toString(): string | number {
    const fromYear = this.from.getFullYear();
    const toYear = this.getUntilString();

    if (fromYear.toString() === toYear.toString()) {
      return fromYear;
    }

    return [fromYear, toYear].filter((y) => y).join(' - ');
  }
}

/**
 * Escapes special characters in a given HTML string.
 *
 * @param {string} input - The HTML string to escape.
 * @return {string} The escaped HTML string.
 */
export function escapeHtml(input: string): string {
  const matchHtmlRegExp = /["'&<>]/;
  const str = '' + input;
  const match = matchHtmlRegExp.exec(str);

  if (match == null) {
    return str;
  }

  let escape: string;
  let html = '';
  let index: number;
  let lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34: // "
        escape = '&quot;';
        break;
      case 38: // &
        escape = '&amp;';
        break;
      case 39: // '
        escape = '&#39;';
        break;
      case 60: // <
        escape = '&lt;';
        break;
      case 62: // >
        escape = '&gt;';
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

/**
 * Sends an email to the specified recipient with an optional subject.
 *
 * @param {string} to - The email address of the recipient.
 * @param {string} [subject] - The subject of the email. Optional.
 * @returns {void} - This function does not return anything.
 */
export function sendEmail(to: string, subject?: string): void {
  const decodedEmail = atob(to);
  window.location.href = `mailto:${decodedEmail}` + (subject !== undefined ? `?subject=${escapeHtml(subject)}` : '');
}

/**
 * Shuffles the given array and returns it.
 * The original array will not be modified.
 *
 * @param {T[]} original - The array to shuffle.
 * @return {T[]} The shuffled array.
 */
export function shuffleArray<T>(original: T[]): T[] {
  if (!Array.isArray(original) || !original.length) {
    return [];
  }

  let output = [...original];
  output = output.sort(() => Math.random() - 0.5);

  // if one element is on different index we're good
  let equality = true;
  for (let index = 0; index < output.length; index++) {
    if (output[index] !== original[index]) {
      equality = false;
      break;
    }
  }
  return equality ? shuffleArray(original) : output;
}
