import { Fade } from "react-awesome-reveal";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom"; // or use <a> if not using React Router

const CTASectionProjects = () => {
    return (
        <section className="bg-gradient-to-r from-teal-600 via-cyan-700 to-blue-800 py-16 px-6 sm:px-10 md:px-20 text-white relative overflow-hidden z-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                <Fade direction="left" triggerOnce>
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                            Want to know about what project we made?
                        </h2>
                        <p className="text-base sm:text-lg text-white/80">
                            Let’s turn your ideas into reality — Reach out and let's make it happen.
                        </p>
                    </div>
                </Fade>

                <Fade direction="right" triggerOnce>
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 bg-white text-teal-700 font-semibold text-sm sm:text-base px-6 py-3 rounded-full shadow-lg hover:bg-teal-100 transition duration-300"
                    >
                        View Projects <BsArrowRight className="text-lg" />
                    </Link>
                </Fade>
            </div>
        </section>
    );
};

export default CTASectionProjects;
