import { useEffect, useState } from "react"

/**
 * The basic steps for making a fetch request and returning an unknown data type
 * Does not include error handling.
 * 
 * @param url - The URL we want to send a GET request to
 */
export default function useFetchGeneric<ResponseObject>(url: string | URL) {
  const [data, setData] = useState<null | ResponseObject>(null)

  const isLoading = !data

  useEffect(() => {
    async function makeRequest() {
      const response = await fetch(url)
      const data = await response.json()
      setData(data)
    }

    makeRequest()
  }, [url])

  return {
    /** Will contain any date recieved from the server */
    data,
    /** Stateful value of the request status */
    isLoading
  }
}