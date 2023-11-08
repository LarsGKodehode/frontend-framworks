import { useEffect, useState } from "react"

/**
 * Async await variant
 * Largely functional identical to the promise chaining
 * The main difference here is the way we write
 * our error handling.
 */

/**
 * This is a custom hook for fetching data
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
 * @param {(responseData: any) => void} onSuccess 
 * @param {(error: any) => void} onError 
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