import { FaReact, FaNodeJs, FaLaptopCode, FaGithub } from "react-icons/fa";
import { Slide, Fade } from "react-awesome-reveal";
import Hyperspeed from "../../OtherComponents/Hyperspeed";

const Banner = () => {
    return (
        <section className="relative min-h-screen bg-black text-white overflow-hidden">

            {/* Hyperspeed Background */}
            <div className="absolute inset-0 z-0">
                <Hyperspeed
                    effectOptions={{
                        onSpeedUp: () => { },
                        onSlowDown: () => { },
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

            {/* Black translucent overlay */}
            <div className="absolute inset-0 bg-black/50 z-10 "></div>

            {/* Foreground Content */}
            <div className="relative z-20 flex items-center justify-center min-h-screen px-4">
                <div className="text-center max-w-2xl">
                    <Slide direction="down" triggerOnce>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-teal-400 mb-4 drop-shadow-lg">
                            Welcome to K-WEB TEc
                        </h1>
                    </Slide>

                    <Fade cascade damping={0.1} triggerOnce>
                        <p className="text-lg md:text-xl text-gray-300 mb-6 drop-shadow-sm">
                            Crafting blazing fast and beautifully responsive web apps using
                            modern technologies. Specializing in React.js, Node.js, and the
                            entire MERN stack.
                        </p>

                        <div className="flex justify-center gap-6 text-3xl text-teal-400 mb-6">
                            <FaReact title="React.js" />
                            <FaNodeJs title="Node.js" />
                            <FaLaptopCode title="Full Stack" />
                            <FaGithub title="GitHub" />
                        </div>

                        <div className="flex justify-center gap-4">
                            <a
                                href="#projects"
                                className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full shadow-md transition duration-300"
                            >
                                View Projects
                            </a>
                            <a
                                href="#contact"
                                className="border border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white px-6 py-2 rounded-full shadow-md transition duration-300"
                            >
                                Contact Me
                            </a>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
};

export default Banner;
