/**
 * Decrypt a given string
 * @param {string} inputString
 * @returns {string}
 */
export const decrypt = (inputString) => {
  return inputString.split("").reverse().join("");
}