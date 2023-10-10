import { Link } from "react-router-dom"

export function NotFoundPage() {
  return (
    <main className="flex flex-col justify-center items-center grow">
      <div className="error-container bg-gray px-8 py-4 rounded-sm shadow-sm">
        <h1 className="fg-error">404 Error - Page Not Found</h1>

        <div className="text-center">
          <p>Oops! The page you are looking for could not be found.</p>
          <p>Return to the <Link className="bold fg-primary underline" to="/" replace>HomePage</Link>.</p>
        </div>
      </div>
    </main>
  )
}