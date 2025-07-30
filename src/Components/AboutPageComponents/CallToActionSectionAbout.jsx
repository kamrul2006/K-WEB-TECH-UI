import { Fade } from "react-awesome-reveal";
import { FaArrowRight, FaHandshake, FaUsers } from "react-icons/fa";
import { MdContactPage } from "react-icons/md";

const CallToActionSection = () => {
    return (
        <section className="relative bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white py-24 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center z-10 relative">
                <Fade direction="up"  >
                    <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-400 text-transparent bg-clip-text drop-shadow-md">
                        Let’s Build Something Great Together
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-10">
                        Whether you’re looking to collaborate, explore projects, or join our team — <span className="font-semibold text-white">K-Web-Tech</span> is here to connect, innovate, and create meaningful digital solutions with you.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="/blogs"
                            className="bg-teal-500 hover:bg-teal-400 text-white px-6 py-3 rounded-xl flex items-center gap-2 shadow-md transition-transform hover:scale-105"
                        >
                            <MdContactPage className="text-xl" />
                            Read Our Blogs
                        </a>
                        <a
                            href="/projects"
                            className="bg-cyan-500 hover:bg-cyan-400 text-white px-6 py-3 rounded-xl flex items-center gap-2 shadow-md transition-transform hover:scale-105"
                        >
                            <FaArrowRight className="text-lg" />
                            View All Projects
                        </a>
                        <a
                            href="/team"
                            className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-xl flex items-center gap-2 shadow-md transition-transform hover:scale-105"
                        >
                            <FaUsers className="text-lg" />
                            Meet Our Team
                        </a>
                    </div>
                </Fade>
            </div>

            {/* Glows */}
            <div className="absolute top-0 -left-20 w-96 h-96 bg-cyan-400 opacity-20 rounded-full blur-3xl z-0" />
            <div className="absolute bottom-0 -right-20 w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl z-0" />
        </section>
    );
};

export default CallToActionSection;
