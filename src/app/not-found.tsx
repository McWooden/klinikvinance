import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F1F9F4] text-center p-4">
      <h1 className="text-9xl font-bold text-gray-800">404</h1>
      <h2 className="text-3xl font-semibold text-gray-700 mb-4">
        Page Not Found
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-[#4E8966] hover:bg-[#417f5a] text-white font-semibold text-lg transition duration-300 rounded-lg"
      >
        Go to Homepage
      </Link>
    </div>
  );
}
