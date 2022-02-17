/**
 * Decrypt a given string by reversing it.
 * @param {string} inputString
 * @returns {string}
 */
export const decrypt = (inputString) => {
  return inputString.split("").reverse().join("");
}