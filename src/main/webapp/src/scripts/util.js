export function getServerPort(defaultPort) {
  const envPort = process.env.PORT;
  return envPort ? envPort : defaultPort;
}

/*
shorthand date formatter
 */
export function formatDate(date, locale, options) {
  return date.toLocaleDateString(locale, options);
}