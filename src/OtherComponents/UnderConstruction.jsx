import { Link } from "react-router-dom";
import { FaTools, FaArrowLeft } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const UnderConstruction = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4 text-white">
            <div className="max-w-3xl text-center space-y-2">
                <Fade cascade damping={0.1} triggerOnce>
                    <div className="flex justify-center">
                        <FaTools className="text-6xl text-yellow-400 animate-pulse drop-shadow-lg" />
                    </div>

                    <h1 className="text-4xl  font-bold text-teal-400 drop-shadow">
                        Page Under Construction
                    </h1>

                    <p className="text-gray-300 text-lg  leading-relaxed">
                        We're working hard to bring you something amazing!

                        This page is not available right now but will be ready soon.
                    </p>

                    <img
                        src="./images/underconstraction.svg"
                        alt="Under Construction Illustration"
                        className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                    />

                    <Link to="/" className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-full transition duration-300 hover:scale-105 shadow-lg">
                        <FaArrowLeft /> Back to Home
                    </Link>
                </Fade>
            </div>
        </div>
    );
};

export default UnderConstruction;
