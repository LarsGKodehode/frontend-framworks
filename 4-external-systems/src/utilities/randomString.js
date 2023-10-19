const charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"

/**
 * Creates a random string consisting of alphanumeric characters
 * @param {number} length - Length of the generated string
*/
export function randomString(length) {
  let randomString = ""

  while (randomString.length < length) {
    randomString += charSet[Math.floor(Math.random() * charSet.length)]
  }
  
  return randomString
}