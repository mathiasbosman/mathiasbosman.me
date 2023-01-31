/**
 * Decrypt a given string by reversing it.
 * @param {string} inputString
 * @returns {string}
 */
export const decrypt = (inputString:string) => {
  return inputString.split("").reverse().join("");
}