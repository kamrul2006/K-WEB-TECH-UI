import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const ContactInfoBlock = () => {
    return (
        <section className="relative bg-gradient-to-b from-gray-950 via-black to-gray-900 py-20 px-6 text-white overflow-hidden">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

                {/* Contact Info Card */}
                <div className="rounded-2xl bg-white/10 backdrop-blur-md p-10 shadow-2xl border border-white/10 space-y-6">
                    <h3 className="text-3xl font-bold text-teal-300 mb-6">Get In Touch</h3>

                    <div className="grid sm:grid-cols-2 gap-6 text-lg">
                        {/* Email */}
                        <div className="flex items-start gap-4">
                            <FaEnvelope className="text-teal-400 text-2xl mt-1" />
                            <div>
                                <p className="text-gray-200 font-semibold">Email</p>
                                <p className="text-white">hello@kwebtech.com</p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-4">
                            <FaPhoneAlt className="text-cyan-400 text-2xl mt-1" />
                            <div>
                                <p className="text-gray-200 font-semibold">Phone</p>
                                <p className="text-white">+880-1XXXXXXX</p>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-start gap-4">
                            <FaMapMarkerAlt className="text-blue-400 text-2xl mt-1" />
                            <div>
                                <p className="text-gray-200 font-semibold">Location</p>
                                <p className="text-white">Dhaka, Bangladesh</p>
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="flex items-start gap-4">
                            <FaClock className="text-purple-400 text-2xl mt-1" />
                            <div>
                                <p className="text-gray-200 font-semibold">Working Hours</p>
                                <p className="text-white">Mon–Fri, 10am–6pm</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right-side Image */}
                <div className="flex justify-center md:justify-end">
                    <img
                        src="/images/contact.svg"
                        alt="Contact Illustration"
                        className="w-full max-w-md drop-shadow-xl"
                    />
                </div>
            </div>
        </section>
    );
};

export default ContactInfoBlock;
