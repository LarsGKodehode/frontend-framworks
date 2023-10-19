import { useEffect, useState } from "react"

/**
 * Async await variant
 */

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
export function useFetchAsyncAwait(url) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  
  useEffect(
    () => fetchData(url, setData, setError),
    [url]
  )

  return {
    data,
    error,
    isLoading: !data && !error
  }
}

/**
 * Wrapper around fetch
 * 
 * @param {string} url 
 * @param {() => void} onSuccess 
 * @param {() => void} onError 
 */
async function fetchData(url, onSuccess, onError) {
  try {
    const response = await fetch(url)
    const data = await response.json()
    onSuccess(data)
  } catch (error) {
    onError(error)
  }
}