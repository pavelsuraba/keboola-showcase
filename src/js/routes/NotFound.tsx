import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <section className="text-center py-32">
      <h1 className="text-7xl font-bold text-gray-800">404</h1>
      <p className="mt-1 text-base">Page not found!</p>
      <Link
        to="/"
        className="mt-8 inline-flex text-base items-center text-gray-500 font-medium underline hover:no-underline"
      >
        Return to homepage
      </Link>
    </section>
  )
}
