import { FaStar } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import Marquee from "react-fast-marquee";

const testimonials = [
    {
        name: "Sarah Thompson",
        role: "CEO, PixelCraft",
        review: "K-WEB TEc exceeded our expectations. Their designs are stunning and performance is top-notch.",
        avatar: "https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4841.jpg",
        rating: 5,
    },
    {
        name: "James Milton",
        role: "CTO, DevSphere",
        review: "We were impressed with the clean code and attention to detail. Highly recommend their team!",
        avatar: "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
        rating: 4,
    },
    {
        name: "Elena Ruiz",
        role: "Founder, NovaTech",
        review: "Professional, fast, and super responsive. Our website now feels alive!",
        avatar: "https://img.freepik.com/premium-vector/businesswoman-portrait-beautiful-woman-business-suit-employee-business-institution-uniform_625536-2852.jpg",
        rating: 5,
    },
    {
        name: "Michael Chan",
        role: "Lead Engineer, Codex",
        review: "Solid communication and elite-quality frontend work. A fantastic experience!",
        avatar: "https://randomuser.me/api/portraits/men/44.jpg",
        rating: 5,
    },
    {
        name: "Alicia Park",
        role: "Product Manager, WebFly",
        review: "Efficient, creative, and always delivers on time. Great job, K-WEB TEc!",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
        rating: 5,
    },
    {
        name: "Daniel Wu",
        role: "Founder, QuantumApps",
        review: "They turned our idea into reality with smooth animations and fast performance.",
        avatar: "https://randomuser.me/api/portraits/men/85.jpg",
        rating: 4,
    },
    {
        name: "Priya Nair",
        role: "Tech Lead, ScriptCraft",
        review: "A highly professional team. Will definitely work with them again!",
        avatar: "https://randomuser.me/api/portraits/women/25.jpg",
        rating: 5,
    },
];

const TestimonialsSection = () => {
    return (
        <section className="py-20 bg-black text-white">
            <div className="">
                <Fade direction="up"  >
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-4 text-teal-400">
                        What Our Clients Say
                    </h2>
                    <p className="text-center text-gray-400 mb-10">
                        Real words from real people who loved our work.
                    </p>
                </Fade>

                <Marquee pauseOnHover speed={40} gradient={false}>
                    <div className="flex gap-6 px-4 py-4">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="min-w-[300px] max-w-sm bg-white/5 border border-teal-500/20 rounded-xl p-6 backdrop-blur-md shadow-lg hover:shadow-teal-500/30 transition-transform hover:-translate-y-1 duration-300"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-14 h-14 rounded-full object-cover border-2 border-teal-500 shadow-md"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-lg text-white">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                                    </div>
                                </div>

                                <p className="text-gray-300 italic mb-4">"{testimonial.review}"</p>

                                <div className="flex gap-1 text-yellow-400">
                                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                                        <FaStar key={i} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>
        </section>
    );
};

export default TestimonialsSection;
