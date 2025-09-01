import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <h1 className="text-6xl font-bold text-blue-800 mb-4">404</h1>
      <p className="text-xl mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="bg-blue-800 text-white text-2xl p-5 rounded-2xl">
        Go back home
      </Link>
    </div>
  )
}

export default ErrorPage
