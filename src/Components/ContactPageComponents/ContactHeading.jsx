import { Fade } from "react-awesome-reveal";

const ContactUsHeading = () => {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat text-white py-20 px-6"
            style={{ backgroundImage: "url('/Backgrounds/contact.jpg')" }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto text-center">
                <Fade direction="up" triggerOnce>
                    <h2 className="text-5xl sm:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-300 via-teal-400 to-blue-400 text-transparent bg-clip-text drop-shadow-xl">
                        Contact Us
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-200 leading-relaxed bg-white/10 backdrop-blur-md px-6 py-5 rounded-xl shadow-lg">
                        Let’s connect and turn your ideas into reality. Whether you want to collaborate, have a project in mind, or simply want to say hello — <span className="text-white font-semibold">K-Web-Tech</span> is just a message away.
                    </p>
                </Fade>
            </div>

            {/* Glow Effects */}
            <div className="absolute w-80 h-80 bg-cyan-400 opacity-40 rounded-full blur-3xl top-10 -left-16 z-0" />
            <div className="absolute w-80 h-80 bg-teal-500 opacity-40 rounded-full blur-3xl bottom-10 -right-16 z-0" />
        </section>
    );
};

export default ContactUsHeading;
