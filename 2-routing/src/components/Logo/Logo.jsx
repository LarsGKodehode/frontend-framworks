/**
 * The simplest of components.
 * A function just returning JSX
 */

/**
 * The project logo
 */
export function Logo() {
  return (
    <svg
      viewBox="0 0 100 100"
    >
      <circle
        cx={50}
        cy={50}
        r={50}
        fill="purple"
      />
    </svg>
  )
}