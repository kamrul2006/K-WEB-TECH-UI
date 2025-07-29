import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-black/90 backdrop-blur-md text-gray-300 ">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* About */}
                <div>
                    <h3 className="text-teal-400 text-xl font-bold mb-4">K-WEB TEc</h3>
                    <p className="text-gray-400 leading-relaxed">
                        Empowering developers with the latest tutorials, projects, and career advice. Join us and elevate your coding journey.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-teal-400 text-lg font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/" className="hover:text-teal-400 transition-colors">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-teal-400 transition-colors">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects" className="hover:text-teal-400 transition-colors">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="/blogs" className="hover:text-teal-400 transition-colors">
                                Blogs
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-teal-400 transition-colors">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h4 className="text-teal-400 text-lg font-semibold mb-4">Follow Us</h4>
                    <div className="flex gap-4 text-gray-300 text-xl">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
                            <FaFacebookF />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
                            <FaTwitter />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
                            <FaInstagram />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 className="text-teal-400 text-lg font-semibold mb-4">Newsletter</h4>
                    <p className="text-gray-400 mb-3">Subscribe to get the latest updates.</p>
                    <form className="flex">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="flex-grow px-3 py-2 rounded-l-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-teal-400 text-gray-200"
                        />
                        <button
                            type="submit"
                            className="bg-teal-500 hover:bg-teal-600 text-white px-4 rounded-r-md transition-colors"
                            aria-label="Subscribe"
                        >
                            <FaEnvelope />
                        </button>
                    </form>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-8 py-4 text-center text-gray-500 text-sm select-none">
                &copy; {new Date().getFullYear()} K-WEB TEc. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
