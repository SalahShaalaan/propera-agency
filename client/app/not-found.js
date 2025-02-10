import Link from 'next/link'

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-xl w-full px-4 text-center">
        <h1 className="text-9xl font-bold text-indigo-600">404</h1>

        <div className="absolute -rotate-12 transform">
          <div className="bg-indigo-600 text-white px-4 py-1 text-sm rounded-md shadow-lg">
            Page Not Found
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Oops! We lost this page
          </h2>

          <p className="text-gray-600 mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved to another location
          </p>
          <Link
            href="/properties"
            className="inline-block px-6 py-3 text-mainBlack border-2 border-mainGold rounded-lg hover:bg-mainGold transition-colors duration-200"
          >
            View Properties
          </Link>
        </div>


      </div>
    </div>
  )
}

export default NotFound