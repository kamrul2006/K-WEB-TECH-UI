import { Fade } from "react-awesome-reveal";

const AboutUsHeading = () => {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat text-white py-20 px-6"
            style={{ backgroundImage: "url('/Backgrounds/about.webp')" }}
        >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-xs z-0" />

            <div className="relative z-10 max-w-5xl mx-auto text-center">
                <Fade direction="up"  >
                    <h2 className="text-5xl sm:text-6xl font-extrabold mb-6 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 text-transparent bg-clip-text drop-shadow-lg">
                        About Us
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-200 leading-relaxed bg-white/10 backdrop-blur-md px-6 py-5 rounded-xl shadow-xl">
                        Welcome to <span className="font-semibold text-white">K-Web-Tech</span> — a space where innovation meets design.
                        We’re a passionate team committed to creating impactful digital experiences and modern solutions through technology, creativity, and purpose-driven development.
                    </p>
                </Fade>
            </div>

            {/* Soft glowing accents */}
            <div className="absolute w-80 h-80 bg-teal-400 opacity-50 rounded-full blur-3xl top-10 -left-16 z-0" />
            <div className="absolute w-80 h-80 bg-cyan-500 opacity-50 rounded-full blur-3xl bottom-10 -right-16 z-0" />
        </section>
    );
};

export default AboutUsHeading;
