import { Fade } from "react-awesome-reveal";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";
import { IoIosMailUnread } from "react-icons/io";
import { RiWhatsappFill } from "react-icons/ri";

const ContactSection = () => {
    return (
        <section id="contact" className="py-20 bg-gray-950 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <Fade direction="up"  >
                    <h2 className="text-3xl sm:text-4xl font-bold text-center text-teal-400 mb-3">Get in Touch</h2>
                    <p className="text-center text-gray-400 mb-12">We’d love to hear from you. Send us a message!</p>
                </Fade>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Illustration */}
                    <Fade direction="left"  >
                        <div className="hidden md:block">
                            <img
                                src="https://cdni.iconscout.com/illustration/premium/thumb/contact-us-3489588-2912014.png"
                                alt="Contact Illustration"
                                className="w-full h-auto rounded-2xl shadow-2xl"
                            />
                        </div>
                    </Fade>

                    {/* Contact Form */}
                    <Fade direction="right"  >
                        <div className="w-full  mx-auto space-y-8">
                            <form className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-lg space-y-6">
                                <div>
                                    <label className="block text-sm text-gray-300 mb-1">Name</label>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-300 mb-1">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-300 mb-1">Message</label>
                                    <textarea
                                        rows="4"
                                        placeholder="Your Message"
                                        className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3 px-6 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 rounded-md text-white font-semibold transition"
                                >
                                    Send Message
                                </button>
                            </form>

                            {/* Social Media Icons */}
                            <div className="flex justify-center items-center gap-5 mt-2">
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-teal-400 transition transform hover:scale-110 hover:drop-shadow-lg"
                                >
                                    <FaFacebook size={40} />
                                </a>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-teal-400 transition transform hover:scale-110 hover:drop-shadow-lg"
                                >
                                    <FaTwitter size={40} />
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-teal-400 transition transform hover:scale-110 hover:drop-shadow-lg"
                                >
                                    <FaLinkedin size={40} />
                                </a>
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-teal-400 transition transform hover:scale-110 hover:drop-shadow-lg"
                                >
                                    <FaGithub size={40} />
                                </a>
                                <a
                                    href="mailto:kamrulislamapurba@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-teal-400 transition transform hover:scale-110 hover:drop-shadow-lg"
                                >
                                    <IoIosMailUnread size={40} />
                                </a>
                                <a
                                    href="01616210277"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-teal-400 transition transform hover:scale-110 hover:drop-shadow-lg"
                                >
                                    <RiWhatsappFill size={40} />
                                </a>
                                <a
                                    href="www.instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-teal-400 transition transform hover:scale-110 hover:drop-shadow-lg"
                                >
                                    <FaInstagramSquare size={40} />
                                </a>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
