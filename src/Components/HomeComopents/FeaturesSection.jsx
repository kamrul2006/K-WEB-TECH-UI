// FeaturesSection.jsx
import { Fade } from "react-awesome-reveal";
import {
    FaCode,
    FaMobileAlt,
    FaServer,
    FaPaintBrush,
    FaTools,
    FaRocket,
} from "react-icons/fa";

const features = [
    {
        title: "Frontend Development",
        desc: "Craft pixel-perfect, lightning-fast user interfaces with React.js and Tailwind CSS for seamless interaction.",
        icon: <FaCode className="text-4xl text-teal-400" />,
    },
    {
        title: "Backend Integration",
        desc: "Build secure, scalable RESTful APIs with Node.js, Express.js, and MongoDB that power dynamic web applications.",
        icon: <FaServer className="text-4xl text-purple-400" />,
    },
    {
        title: "Mobile Responsiveness",
        desc: "Ensure a flawless user experience across all devices using responsive layouts and modern design techniques.",
        icon: <FaMobileAlt className="text-4xl text-pink-400" />,
    },
    {
        title: "UI/UX Design",
        desc: "Design stunning interfaces with intuitive UX principles, creative layouts, and accessibility at the core.",
        icon: <FaPaintBrush className="text-4xl text-yellow-400" />,
    },
    {
        title: "Tools & Workflow",
        desc: "Supercharge productivity with Git, Vite, Figma, and dev tools that streamline your development process.",
        icon: <FaTools className="text-4xl text-indigo-400" />,
    },
    {
        title: "Performance & SEO",
        desc: "Deliver lightning-fast websites with optimized performance and clean, semantic SEO-friendly code.",
        icon: <FaRocket className="text-4xl text-green-400" />,
    },
];

const FeaturesSection = () => {
    return (
        <section
            id="features"
            className="py-24 bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white overflow-hidden relative"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <Fade direction="up" triggerOnce>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-teal-400 mb-4 tracking-tight">
                            Transforming Ideas Into Digital Reality
                        </h2>
                        <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto">
                            We offer a powerful set of tools and technologies to bring your digital vision to life — fast, secure, and beautifully designed. Explore our core strengths:
                        </p>
                    </div>
                </Fade>

                {/* Content */}
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Illustration */}
                    <Fade direction="left" triggerOnce className="w-full lg:w-1/3">
                        <div className="w-full flex justify-center lg:justify-start">
                            <img
                                src="/images/Features.png"
                                alt="Digital Features Illustration"
                                className="w-full max-w-sm rounded-xl shadow-2xl object-contain"
                            />
                        </div>
                    </Fade>

                    {/* Features Grid */}
                    <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <Fade key={index} direction="up" delay={index * 100} triggerOnce>
                                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-md border border-gray-700 hover:shadow-teal-500/30 hover:scale-[1.02] transition-all duration-300 h-full">
                                    <div className="mb-3">{feature.icon}</div>
                                    <h3 className="text-lg font-bold text-white mb-1">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm">{feature.desc}</p>
                                </div>
                            </Fade>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
