import { useState } from "react"

export function Counter() {
  const [count, setCount] = useState(0)

  // Pass a callback to the React.Dispatch function
  // when using the old state to calculate the new state
  function increment() {
    setCount((oldCount) => oldCount + 1)
  }
  function decrement() {
    setCount((oldCount) => oldCount - 1)
  }

  // If setting it to a concrete value
  // just pass in that value
  function reset() {
    setCount(0)
  }

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "gray",
        borderRadius: "4px"
      }}
    >
      <p style={{ margin: 0 }}>{count}</p>

      <div style={{ width: "100%" }}>
        <button style={{ width: "50%" }} onClick={decrement}>-</button>
        <button style={{ width: "50%" }} onClick={increment}>+</button>
      </div>

      <button style={{ width: "100%" }} onClick={reset}>Reset</button>
    </section>
  )
}