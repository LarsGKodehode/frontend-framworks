import { useEffect, useState } from "react"

/**
 * This component illustrates some of the quirks of how React Renders each component
 * and how we can use the useEffect hook to execute blocks of code at specific points
 * in the components lifecycle.
 * 
 * Mind. While it might be tempting to think of useEffect as a way to controll when
 * certain blocks of code should run it is better to use it for synchronizing
 * statefull variables with variables in external systems
 */

export function ExampleUseEffect() {
  const [hidden, setHidden] = useState(false)

  function toggleHidden() {
    setHidden(wasHidden => !wasHidden)
  }

  return (
    <div>
      <button onClick={toggleHidden}>Show / Hide</button>
      {
        hidden ? <p>Hidden</p> : <Example />
      }
    </div>
  )
}

function Example() {
  const [count, setCount] = useState(0)
  const [countA, setCountA] = useState(0)

  useEffect(
    () => {
      console.log("Component mounted OR Count has changed")

      return () => {
        console.log("Component unmounted")
      }
    }, [count]
  )

  return (
    <div>
      <p>Count {count}</p>
      <p>CountA {countA}</p>
      {/* Avoid defining eventhandlers inline like this */}
      <button onClick={() => setCount(oldCount => oldCount + 1)}>++</button>
      <button onClick={() => setCountA(oldCount => oldCount + 1)}>++</button>
    </div>
  )
}