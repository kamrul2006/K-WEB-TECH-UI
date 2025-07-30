import { Fade } from "react-awesome-reveal";
import Marquee from "react-fast-marquee";
import { BiCode } from "react-icons/bi";
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiFirebase,
    SiGithub,
    SiVite,
    SiNextdotjs,
    SiRedux,
    SiMysql,
    SiTypescript,
    SiFigma,
    SiPostman,
} from "react-icons/si";

const techStack = [
    { name: "HTML5", icon: <SiHtml5 />, color: "text-orange-500" },
    { name: "CSS3", icon: <SiCss3 />, color: "text-blue-500" },
    { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
    { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-400" },
    { name: "React", icon: <SiReact />, color: "text-cyan-400" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
    { name: "Redux", icon: <SiRedux />, color: "text-purple-400" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-sky-400" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-500" },
    { name: "Express.js", icon: <SiExpress />, color: "text-gray-300" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
    { name: "MySQL", icon: <SiMysql />, color: "text-blue-300" },
    { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-500" },
    { name: "Vite", icon: <SiVite />, color: "text-purple-300" },
    { name: "GitHub", icon: <SiGithub />, color: "text-white" },
    { name: "Postman", icon: <SiPostman />, color: "text-orange-400" },
    { name: "Figma", icon: <SiFigma />, color: "text-pink-400" },
    { name: "VS Code", icon: <BiCode />, color: "text-blue-400" },
];

const TechStackSection = () => {
    return (
        <section id="skills" className="py-24 bg-gray-950 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 relative z-10">

                {/* Top Marquee */}
                <Marquee gradient={false} speed={35} pauseOnHover className="mb-14">
                    {techStack.map((tech, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-full m-2 p-4 bg-white/10 border border-white/10 backdrop-blur hover:scale-105 transition duration-300 ${tech.color}`}
                        >
                            <div className="text-xl md:text-2xl">{tech.icon}</div>
                            <span className="text-[10px] text-gray-300 mt-1 text-center">{tech.name}</span>
                        </div>
                    ))}
                </Marquee>

                {/* Center content */}
                <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left gap-6 mb-14">
                    {/* Illustration */}
                    <div className="w-full lg:w-1/3  aspect-square mb-6">
                        <img
                            src="/images/skills.svg"
                            alt="Tech Skills"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Text content */}
                    <div className="w-full lg:w-[58%]">
                        <Fade direction="up"  >
                            <h2 className="text-4xl sm:text-5xl font-bold text-teal-400 mb-5">
                                Tech Stack & Skills
                            </h2>
                            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-6 max-w-3xl mx-auto lg:mx-0">
                                I work with a diverse range of technologies to craft robust, fast, and visually stunning web applications. From building scalable backend APIs to interactive frontend experiences, I use industry-standard tools to ensure top-notch performance and maintainability.
                            </p>
                        </Fade>

                        <Fade direction="up" delay={200}  >
                            <h3 className="text-2xl sm:text-3xl font-semibold text-teal-300 mb-3">
                                Learning Never Stops
                            </h3>
                            <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto lg:mx-0">
                                Technologies like React, Next.js, Node.js, and MongoDB are my daily companions. With the help of tools like GitHub, Postman, and Figma, I ensure a smooth workflow from design to deployment. I'm always exploring new tools to stay updated in this ever-evolving tech landscape.
                            </p>
                        </Fade>
                    </div>
                </div>

                {/* Bottom Marquee (Reverse Direction) */}
                <Marquee gradient={false} speed={35} pauseOnHover direction="right">
                    {techStack.map((tech, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-full m-2 p-4 bg-white/10 border border-white/10 backdrop-blur hover:scale-105 transition duration-300 ${tech.color}`}
                        >
                            <div className="text-xl md:text-2xl">{tech.icon}</div>
                            <span className="text-[10px] text-gray-300 mt-1 text-center">{tech.name}</span>
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default TechStackSection;
