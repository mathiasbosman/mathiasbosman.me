export function getServerPort(defaultPort) {
  const envPort = process.env.PORT;
  return envPort ? envPort : defaultPort;
}