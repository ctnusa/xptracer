import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-7xl font-bold">404</h1>
      <p className="text-2xl mt-4">Oops! Page not found.</p>
      <p className="mt-2 text-gray-600">The page you are looking for doesn't exist or has been moved.</p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
