import { FaReact, FaNodeJs, FaLaptopCode, FaGithub } from "react-icons/fa";
import { Slide, Fade } from "react-awesome-reveal";
import Hyperspeed from "../../OtherComponents/Hyperspeed";
import ClientLogosSection from "./ClientLogosSection";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <section className="relative bg-black text-white min-h-screen overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 z-0">
                <Hyperspeed
                    effectOptions={{
                        distortion: "turbulentDistortion",
                        length: 400,
                        roadWidth: 10,
                        islandWidth: 2,
                        lanesPerRoad: 4,
                        fov: 90,
                        fovSpeedUp: 150,
                        speedUp: 2,
                        carLightsFade: 0.4,
                        totalSideLightSticks: 20,
                        lightPairsPerRoadWay: 40,
                        shoulderLinesWidthPercentage: 0.05,
                        brokenLinesWidthPercentage: 0.1,
                        brokenLinesLengthPercentage: 0.5,
                        lightStickWidth: [0.12, 0.5],
                        lightStickHeight: [1.3, 1.7],
                        movingAwaySpeed: [60, 80],
                        movingCloserSpeed: [-120, -160],
                        carLightsLength: [400 * 0.03, 400 * 0.2],
                        carLightsRadius: [0.05, 0.14],
                        carWidthPercentage: [0.3, 0.5],
                        carShiftX: [-0.8, 0.8],
                        carFloorSeparation: [0, 5],
                        colors: {
                            roadColor: 0x080808,
                            islandColor: 0x0a0a0a,
                            background: 0x000000,
                            shoulderLines: 0xffffff,
                            brokenLines: 0xffffff,
                            leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
                            rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
                            sticks: 0x03b3c3,
                        },
                    }}
                />
            </div>

            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/70 z-10" />

            {/* Hero Content */}
            <div className="relative z-20 flex flex-col justify-center items-center min-h-screen w-full px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-10 mt-16">

                    {/* Text Block */}
                    <div className="flex flex-col justify-center gap-y-6 max-w-2xl">
                        <Slide direction="down"  >
                            <h1 className="text-4xl sm:text-5xl font-bold max-w-3/4 text-cyan-100 drop-shadow-lg">
                                Build the Future with <span className="text-teal-400">K-WEB TEc</span>
                            </h1>
                        </Slide>

                        <Fade cascade damping={0.1}  >
                            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                                We design fast, functional & futuristic web apps using the MERN stack. From idea to deployment — we deliver pixel-perfect, real-world solutions.
                            </p>

                            <div className="flex gap-6 text-2xl text-cyan-400">
                                <FaReact title="React.js" />
                                <FaNodeJs title="Node.js" />
                                <FaLaptopCode title="Full Stack" />
                                <FaGithub title="GitHub" />
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-wrap gap-4 mt-4">
                                <Link
                                    to="/projects"
                                    className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-2 rounded-full font-semibold shadow-md transition duration-300 transform hover:scale-105 hover:shadow-lg"
                                >
                                    Explore Projects
                                </Link>
                                <Link
                                    to="/contact"
                                    className="bg-transparent text-teal-400 border border-teal-500 px-6 py-2 rounded-full font-semibold hover:bg-teal-500 hover:text-white transition duration-300 transform hover:scale-105"
                                >
                                    Let's Connect
                                </Link>
                            </div>
                        </Fade>
                    </div>

                    {/* Side Cards */}
                    <div className="flex flex-col gap-6 w-full max-w-sm">
                        <Fade duration={2000}>

                            <div className="bg-white/5 hover:scale-105 duration-500 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-md hover:shadow-lg transition">

                                <p className=" text-gray-200">
                                    👋 New Here? <br />
                                    <span className="text-xl font-mono text-teal-400">Looking for jobs?</span>
                                </p>

                                <Link to="/a">
                                    <button className="mt-2 px-5 border border-teal-400 rounded-full text-teal-300 hover:bg-teal-600 hover:text-white transition duration-300">
                                        Find Jobs
                                    </button>
                                </Link>

                                <hr className="my-4" />

                                <p className=" text-gray-200 text-right">
                                    💻 Passionate about coding? <br />
                                    <span className="text-xl font-mono text-teal-400">Want to learn more?</span>
                                </p>
                                <Link to="/a" className="flex items-end justify-end">
                                    <button className="mt-2 px-5 text-right border border-teal-400 rounded-full text-teal-300 hover:bg-teal-600 hover:text-white transition duration-300">
                                        Learn Coding
                                    </button>
                                </Link>
                            </div>

                        </Fade>
                    </div>
                </div>

                {/* Client Logos */}
                <div className="w-full mt-10 bg-white/10 backdrop-blur-sm py-4 px-4 rounded-xl shadow-inner overflow-hidden scroll-smooth">
                    <ClientLogosSection />
                </div>
            </div>
        </section>
    );
};

export default Banner;
