export function getServerPort(defaultPort) {
  const envPort = process.env.PORT;
  return envPort ? envPort : defaultPort;
}

export function prefersDarkScheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}