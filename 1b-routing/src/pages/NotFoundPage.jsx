import { Link } from "react-router-dom"

export function NotFoundPage() {
  return (
    <main className="flex flex-col justify-center items-center grow">
      <h2>404: Resource Not Found</h2>
      <Link to="/" replace>HomePage</Link>
    </main>
  )
}