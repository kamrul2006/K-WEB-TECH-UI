import { FaReact, FaNodeJs, FaLaptopCode, FaGithub } from "react-icons/fa";
import { Slide, Fade } from "react-awesome-reveal";
import Hyperspeed from "../../OtherComponents/Hyperspeed";
import ClientLogosSection from "./ClientLogosSection";

const Banner = () => {
    return (
        <section className="relative bg-black text-white overflow-hidden min-h-screen">
            {/* Hyperspeed Animated Background */}
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
            <div className="absolute inset-0 bg-black/60 z-10" />

            {/* Hero Content */}
            <div className="relative z-20 flex flex-col justify-center items-center text-center  min-h-screen gap-y-6  mx-auto">
                <Slide direction="down" triggerOnce>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-teal-400 drop-shadow-xl mt-10">
                        Welcome to K-WEB TEc
                    </h1>
                </Slide>

                <Fade cascade damping={0.1} triggerOnce>
                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto px-10">
                        Crafting blazing fast, interactive, and responsive web apps with the modern MERN Stack.
                        We specialize in building real-world full-stack solutions with speed and style.
                    </p>

                    {/* Icons */}
                    <div className="flex justify-center gap-6 text-2xl text-teal-400">
                        <FaReact title="React.js" />
                        <FaNodeJs title="Node.js" />
                        <FaLaptopCode title="Full Stack" />
                        <FaGithub title="GitHub" />
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="#projects"
                            className="bg-teal-500 hover:bg-teal-600 text-white px-5 py-2 rounded-full font-semibold transition duration-300 shadow-lg hover:scale-105 border border-teal-400"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="text-teal-400 hover:bg-teal-600 hover:text-white border border-teal-500 px-5 py-2 rounded-full font-semibold transition duration-300 shadow-lg hover:scale-105"
                        >
                            Contact Me
                        </a>
                    </div>
                </Fade>

                {/* Client Logos inside Hero */}
                <div className="w-full mt-4 lg:mt-20 bg-white/10 backdrop-blur-sm  py-3 overflow-hidden h-fit">
                    <ClientLogosSection />
                </div>
            </div>
        </section>
    );
};

export default Banner;
