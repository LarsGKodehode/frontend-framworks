import { useEffect, useState } from "react"

/**
 * This is a custom hook for fetching data
 * 
 * More generically this is what's called an abstraction.
 * We have abstraced (hidden) away all the logic for performing
 * the fetch request and only exposed the parts we are actually
 * interested in
 * - is the request in progress?
 * - did any error occur?
 * - what is the data we recieved?
 * 
 * Along with the required parts, the URL in this case
 * For more complex usecases we might want to include
 * headers for the request as well.
 * 
 * @param {string} url
 */
export function useFetch(url) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  // Based on the two previous states we can derive this value
  const isLoading = !data && !error

  useEffect(
    () => {
      fetch(url)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => setError(error))
    },
    [url]
  )

  return {
    data,
    error,
    isLoading,
  }
}