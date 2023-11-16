import { useEffect, useState } from "react"

export default function useFetch<ApiResponse>(url: RequestInfo | URL, init?: RequestInit) {
  // Reactive Values
  const [data, setData] = useState<null | ApiResponse>(null)
  const [error, setError] = useState<null | string>(null)

  // Values derived from reactive values
  const isLoading = !data && !error

  // Handling a side effect
  useEffect(() => {
    async function makeRequest() {
      let response: Response;
      try {
        response = await fetch(url, init)
      } catch (error) {
        setError(`Failed reaching server! Check the URL and if you are online`)
        return
      }

      if (!response.ok) {
        setError(`Response Code: ${response.status}`)
        return
      }

      let data: ApiResponse;
      try {
        data = await response.json();
        // Do any checks in here to ensure the recieved type matches the expected type
        // Set the error if there is a mismatch
      } catch (error) {
        setError(`Failed parsing response. Data Corrupted`)
        return
      }

      // Finally update the state with the now sanitized data
      setData(data)
    }

    makeRequest()
  }, [url, init])

  // Return the values we care about
  return {
    data,
    error,
    isLoading
  }
}