import { Fade } from "react-awesome-reveal";
import {
    FaProjectDiagram,
    FaUsers,
    FaBriefcase,
    FaClock,
    FaGraduationCap,
    FaCode,
} from "react-icons/fa";

const stats = [
    {
        title: "Projects Completed",
        value: "20+",
        icon: <FaProjectDiagram className="text-5xl text-teal-400" />,
    },
    {
        title: "Happy Clients",
        value: "52+",
        icon: <FaUsers className="text-5xl text-purple-400" />,
    },
    {
        title: "Years of Experience",
        value: "7",
        icon: <FaClock className="text-5xl text-yellow-400" />,
    },
    {
        title: "Developers Trained",
        value: "150+",
        icon: <FaGraduationCap className="text-5xl text-pink-400" />,
    },
    {
        title: "Lines of Code",
        value: "1M+",
        icon: <FaCode className="text-5xl text-indigo-400" />,
    },
    {
        title: "Live Projects",
        value: "22+",
        icon: <FaBriefcase className="text-5xl text-green-400" />,
    },
];

const StatsSection = () => {
    return (
        <section
            id="stats"
            className="py-24 bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white relative z-10"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                <Fade direction="up"  >
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-teal-400 mb-4">
                        Our Journey So Far
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-16">
                        We believe in results. Here's a quick snapshot of what we've achieved through our passion, dedication, and creativity.
                    </p>
                </Fade>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {stats.map((item, index) => (
                        <Fade key={index} direction="up" delay={index * 100}  >
                            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl shadow-md hover:shadow-teal-500/20 p-8 transform hover:scale-[1.03] transition duration-300 flex flex-col items-center justify-center">
                                <div className="mb-4">{item.icon}</div>
                                <h3 className="text-4xl font-bold text-white mb-1">{item.value}</h3>
                                <p className="text-gray-300 text-sm">{item.title}</p>
                            </div>
                        </Fade>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
