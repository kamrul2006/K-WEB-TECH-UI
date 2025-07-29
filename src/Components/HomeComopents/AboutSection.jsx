import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const AboutSection = () => {
    return (
        <section
            id="about"
            className="py-24 bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white overflow-hidden"
        >
            <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
                {/* Left Side – Text Content */}
                <Fade direction="left" triggerOnce>
                    <div className="w-full">
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-teal-400 mb-6 leading-tight">
                            Empowering Future Developers
                        </h2>
                        <p className=" text-justify text-gray-300 text-base sm:text-lg mb-5 leading-relaxed">
                            We’re not just a tech team — we’re a <span className="text-teal-400 font-semibold">learning-first platform</span> built for dreamers and doers. Our mission is to bridge the gap between passion and profession by guiding aspiring developers through the world of modern web development.
                        </p>
                        <p className=" text-justify text-gray-300 text-base sm:text-lg mb-5 leading-relaxed">
                            From complete beginners to advancing coders, we provide free, project-based lessons, interactive tutorials, and real-world challenges to boost confidence and build strong foundational skills.
                        </p>
                        <p className=" text-justify text-gray-400 text-sm sm:text-base mb-8 leading-relaxed">
                            Whether you want to create a portfolio, land a tech job, or build the next big thing — our platform equips you with the tools, guidance, and inspiration you need to grow. <br />
                            <span className="italic text-teal-300">Start your journey today — and let your code tell your story.</span>
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/learn-coding"
                                className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-full transition duration-300 text-center"
                            >
                                Start Learning
                            </Link>
                            <Link
                                to="/contact"
                                className="border border-teal-400 text-teal-400 hover:bg-teal-600 hover:text-white font-semibold px-6 py-3 rounded-full transition duration-300 text-center"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </Fade>

                {/* Right Side – Image or Illustration */}
                <Fade direction="right" triggerOnce>
                    <div className="w-full  lg:mx-10 ">
                        <img
                            src="/images/AboutUs.svg"
                            alt="About Us Illustration"
                            className="w-full h-auto rounded-xl drop-shadow-2xl object-contain"
                        />
                    </div>
                </Fade>
            </div>
        </section>
    );
};

export default AboutSection;
