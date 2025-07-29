import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";


const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black/90 backdrop-blur-md px-6 text-center">

            <h1 className="text-6xl font-extrabold text-teal-400 mb-4 drop-shadow-lg">
                404
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                Oops! Page not found.
            </h2>
            <p className="max-w-md text-gray-400 mb-8">
                The page you are looking for might have been removed, had its name
                changed, or is temporarily unavailable.
            </p>

            <Link
                to="/"
                className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition duration-300"
            >
                <FaHome className="text-lg" />
                Go Back Home
            </Link>
        </div>
    );
};

export default NotFound;
