/*
shorthand date formatter
 */
export function formatDate(date, locale, options) {
  return date.toLocaleDateString(locale, options);
}