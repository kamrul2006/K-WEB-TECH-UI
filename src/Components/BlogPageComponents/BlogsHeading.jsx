import { Fade } from "react-awesome-reveal";

const BlogPageHeading = () => {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat text-white py-20 px-6"
            style={{ backgroundImage: "url('/Backgrounds/blogbg.jpg')" }}
        >
            <div className="absolute inset-0 bg-black/50 backdrop-blur z-0" />

            <div className="relative z-10 max-w-5xl mx-auto text-center">
                <Fade direction="up" triggerOnce>
                    <h1 className="text-5xl sm:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 text-transparent bg-clip-text drop-shadow-lg">
                        Our Blogs
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-200 leading-relaxed bg-white/10 backdrop-blur-md px-6 py-5 rounded-xl shadow-xl">
                        Discover insights, stories, and tips from the <span className="font-semibold text-white">K-Web-Tech</span> team.
                        Stay inspired, informed, and up-to-date with the latest in web development, design, and digital trends.
                    </p>
                </Fade>
            </div>

            {/* Glowing background accents */}
            <div className="absolute w-80 h-80 bg-purple-500 opacity-30 rounded-full blur-3xl top-10 -left-16 z-0" />
            <div className="absolute w-80 h-80 bg-pink-400 opacity-30 rounded-full blur-3xl bottom-10 -right-16 z-0" />
        </section>
    );
};

export default BlogPageHeading;
