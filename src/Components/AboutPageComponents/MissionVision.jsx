import { Fade } from "react-awesome-reveal";
import { FaBullseye, FaEye } from "react-icons/fa";

const MissionVision = () => {
    return (
        <section className="bg-gray-950 text-white py-20 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* Mission Card */}
                <Fade direction="left" triggerOnce>
                    <div className="flex flex-col justify-between h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-white/10 rounded-2xl p-8 shadow-md hover:shadow-teal-500/20 hover:-translate-y-1 transition-all duration-300">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <FaBullseye className="text-teal-400 text-4xl" />
                                <h3 className="text-3xl font-bold text-white">Our Mission</h3>
                            </div>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                At <span className="text-teal-400 font-semibold">K-Web-Tech</span>, our mission is to craft seamless, modern, and accessible web solutions that empower individuals and businesses to thrive in the digital era.
                                We’re driven by innovation, fueled by passion, and focused on solving real-world problems through clean code and thoughtful design.
                            </p>
                        </div>
                    </div>
                </Fade>

                {/* Vision Card */}
                <Fade direction="right" triggerOnce>
                    <div className="flex flex-col justify-between h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-white/10 rounded-2xl p-8 shadow-md hover:shadow-cyan-500/20 hover:-translate-y-1 transition-all duration-300">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <FaEye className="text-cyan-400 text-4xl" />
                                <h3 className="text-3xl font-bold text-white">Our Vision</h3>
                            </div>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                We envision <span className="text-cyan-400 font-semibold">K-Web-Tech</span> as a global leader in digital innovation — known for building immersive user experiences, intuitive interfaces, and robust backend solutions.
                                Our goal is to inspire and lead the next generation of developers by sharing knowledge, creating opportunities, and constantly pushing creative boundaries.
                            </p>
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    );
};

export default MissionVision;
