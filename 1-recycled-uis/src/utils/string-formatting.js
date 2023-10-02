/**
 * Capitalizes a s string, not local aware
 * 
 * @param {string} str - String to capitalize
 * @returns 
 */
export function capitalize(str) {
  const capitalized = str
    .split(" ")
    .map(word => word.slice(0, 1).toLocaleUpperCase() + word.slice(1))
    .join(" ")

  return capitalized
}