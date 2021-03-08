export function getServerPort(defaultPort) {
  const envPort = process.env.PORT;
  return envPort ? envPort : defaultPort;
}

export function prefersDarkScheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

/*
shorthand date formatter
 */
export function formatDate(date, locale, options) {
  return date.toLocaleDateString(locale, options);
}