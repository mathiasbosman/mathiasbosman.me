/**
 * Decrypt a given string
 * @param {string} inputString
 * @returns {string}
 */
export function decrypt(inputString) {
  return inputString.split("").reverse().join("");
}