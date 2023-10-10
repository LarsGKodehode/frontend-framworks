/**
 * Capitalizes first character of each word in string, not locale aware
 * 
 * @param {string} str - String to capitalize
 */
export function capitalize(str) {
  const capitalized = str
    .split(" ")
    .map(word => word.slice(0, 1).toUpperCase() + word.slice(1))
  return capitalized
}