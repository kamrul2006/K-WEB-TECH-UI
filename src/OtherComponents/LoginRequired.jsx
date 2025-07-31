import { Link } from "react-router-dom";
import { FaLock, FaSignInAlt, FaArrowLeft } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

const LoginRequired = () => {
    return (
        <div className="min-h-screen bg-gradient-to-tr from-black via-gray-900 to-black text-white flex items-center justify-center px-4 sm:px-6 py-12">
            <div className="w-full max-w-6xl bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full">

                    {/* Left Image Section */}
                    <div className="w-full md:w-1/2 p-6 sm:p-10">
                        <img
                            src="./images/privetfiles.svg"
                            alt="Restricted Access"
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    {/* Right Content Section */}
                    <div className="w-full md:w-1/2 p-6 sm:p-10 space-y-6 text-center">
                        <Slide direction="right" triggerOnce>
                            <div className="flex justify-center">
                                <FaLock className="text-5xl text-rose-500 animate-bounce mb-4" />
                            </div>

                            <h1 className="text-3xl sm:text-4xl font-extrabold text-teal-400">
                                Restricted Page
                            </h1>

                            <p className="text-gray-300 text-base sm:text-lg">
                                Oops! This page is only accessible to logged-in users.
                                <br />
                                Please log in to continue and explore this section.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4 pt-2">
                                <Link
                                    to="/login"
                                    className="flex items-center gap-2 px-6 py-3 bg-teal-500 hover:bg-teal-600 rounded-full font-semibold text-white transition hover:scale-105 shadow-md"
                                >
                                    <FaSignInAlt /> Go to Login
                                </Link>

                                <Link
                                    to="/"
                                    className="flex items-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-black rounded-full font-semibold transition hover:scale-105"
                                >
                                    <FaArrowLeft /> Back to Home
                                </Link>
                            </div>
                        </Slide>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginRequired;
