import { motion } from "framer-motion";
import { GiShipWheel } from "react-icons/gi";

const CustomLoader = () => {
    return (
        <div className="h-screen w-full flex items-center justify-center bg-black text-white">
            <motion.div
                className="flex flex-col items-center gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                {/* Brand Name with Rotating Icon */}
                <motion.h1
                    className="flex items-center gap-3 text-3xl sm:text-4xl font-bold text-cyan-400"
                    animate={{
                        opacity: [1, 0.7, 1],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                    }}
                >
                    <span>K-Web</span>
                    <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                        className="text-5xl text-cyan-500"
                    >
                        <GiShipWheel />
                    </motion.span>
                    <span>Tech</span>
                </motion.h1>

                {/* Tagline */}
                <motion.p
                    className="text-sm text-gray-400 tracking-wider"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    Loading your personalized experience...
                </motion.p>
            </motion.div>
        </div>
    );
};

export default CustomLoader;
