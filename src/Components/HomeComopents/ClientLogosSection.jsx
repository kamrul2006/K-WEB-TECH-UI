import Marquee from "react-fast-marquee";

const clientLogos = [
    "/logos/client1.png",
    "/logos/client2.png",
    "/logos/client3.png",
    "/logos/client4.png",
    "/logos/client5.png",
    "/logos/client6.png",
    "/logos/client7.png",
    "/logos/ktech.png",
];

const ClientLogosSection = () => {
    return (
        <section className="w-full h-fit overflow-hidden py-2">
            <div className="mx-auto rounded-xl overflow-hidden h-fit overflow-x-hidden">
                {/* Logo Marquee */}
                <Marquee
                    pauseOnHover
                    speed={40}
                    className="overflow-hidden"
                >
                    {clientLogos.map((logo, index) => (
                        <div
                            key={index}
                            className="mx-4 flex items-center justify-center  filter grayscale hover:grayscale-0 transition-all duration-300 ease-in-out hover:scale-110 hover:drop-shadow-lg cursor-pointer"
                        >
                            <img
                                src={logo}
                                alt={`Client logo ${index + 1}`}
                                className="h-14"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default ClientLogosSection;
