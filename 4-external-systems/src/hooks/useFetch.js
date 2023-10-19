import { useEffect, useState } from "react"

/**
 * This is a custom hook for fetching data
 * 
 * More generically this is what's called an abstraction,
 * we have abstraced (hidden) away all the logic for performing
 * the fetch request and only exposed the parts we are actually
 * interested in (along with the required parts, the URL in this case)
 * 
 * @param {string} url
 */
export function useFetch(url) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(
    () => {
      fetch(url)
        .then(response => response.json())
        .catch(error => setError(error))
        .then(data => setData(data))
    },
    [url]
  )

  return {
    data,
    error,
    isLoading: !data && !error
  }
}