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
