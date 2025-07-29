import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    FaBars,
    FaTimes,
    FaHome,
    FaInfoCircle,
    FaEnvelope,
    FaBlog,
    FaEllipsisH,
    FaSignInAlt,
    FaLaptopCode,
    FaChevronDown,
    FaSignOutAlt,
} from "react-icons/fa";

import { AuthContext } from "../../Auth/Providers/AuthProvider";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const location = useLocation();
    const { user, UserSignOut } = useContext(AuthContext);

    const links = [
        { name: "Home", path: "/", icon: <FaHome /> },
        { name: "About", path: "/about", icon: <FaInfoCircle /> },
        { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
        { name: "Blogs", path: "/blogs", icon: <FaBlog /> },
    ];

    const otherLinks = [
        { name: "Projects", path: "/projects" },
        { name: "Our Team", path: "/team" },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/60 shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link
                    to="/"
                    className="text-2xl font-extrabold text-teal-400 hover:text-teal-300 flex items-center gap-1"
                    onClick={() => setIsOpen(false)}
                >
                    <FaLaptopCode className="text-white" />
                    <span>
                        K-WEB <span className="text-white">TEc</span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <ul className="hidden md:flex gap-8 text-sm font-semibold tracking-wide">
                    {links.map(({ name, path, icon }) => (
                        <li key={name}>
                            <Link
                                to={path}
                                className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-300
                                    ${location.pathname === path
                                        ? "bg-teal-500 text-white shadow-lg"
                                        : "text-gray-300 hover:text-teal-400 hover:bg-gray-900/50"
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {icon}
                                {name}
                            </Link>
                        </li>
                    ))}

                    {/* Dropdown */}
                    <li
                        className="relative"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                        <button
                            className={`flex items-center gap-1 py-2 rounded-md transition-all duration-300
                                ${otherLinks.some((link) => link.path === location.pathname)
                                    ? "bg-teal-500 text-white shadow-lg"
                                    : "text-gray-300 hover:text-teal-400 hover:bg-gray-900/50"
                                }`}
                        >
                            <FaEllipsisH />
                            Other
                            <FaChevronDown className="text-xs mt-[2px]" />
                        </button>

                        {isDropdownOpen && (
                            <ul className="absolute top-full left-0 mt-1 w-40 bg-black/90 backdrop-blur-md rounded-md shadow-lg py-2 z-50">
                                {otherLinks.map(({ name, path }) => (
                                    <li key={name}>
                                        <Link
                                            to={path}
                                            className={`block px-4 py-2 text-sm rounded-md
                                                ${location.pathname === path
                                                    ? "bg-teal-500 text-white"
                                                    : "text-gray-300 hover:bg-teal-600 hover:text-white"
                                                }`}
                                            onClick={() => {
                                                setIsDropdownOpen(false);
                                                setIsOpen(false);
                                            }}
                                        >
                                            {name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                </ul>

                {/* Right (User) */}
                <div className="hidden md:flex items-center gap-4">
                    {user ? (
                        <>
                            <img
                                src={user.photoURL || "/user.png"}
                                alt="Profile"
                                className="w-9 h-9 rounded-full border-2 border-teal-400"
                            />
                            <button
                                onClick={() => UserSignOut()}
                                className="flex items-center gap-2 bg-orange-500 hover:text-white hover:bg-orange-600 px-4 py-2 rounded-full text-sm font-semibold transition duration-300 shadow-md"
                            >
                                <FaSignOutAlt />
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link
                            to="/login"
                            className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 px-5 py-2 rounded-full text-sm font-semibold transition duration-300 shadow-md"
                            onClick={() => setIsOpen(false)}
                        >
                            <FaSignInAlt />
                            Login
                        </Link>
                    )}
                </div>

                {/* Mobile Menu Icon */}
                <div
                    className="md:hidden text-2xl text-gray-200 cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-black/80 backdrop-blur-md text-center px-6 pb-6 rounded-b-lg shadow-lg">
                    <ul className="flex flex-col gap-5 mt-4">
                        {links.map(({ name, path, icon }) => (
                            <li key={name}>
                                <Link
                                    to={path}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center justify-center gap-2 text-lg font-semibold rounded-md px-4 py-2
                                        ${location.pathname === path
                                            ? "bg-teal-500 text-white shadow-lg"
                                            : "text-gray-300 hover:text-teal-400 hover:bg-gray-900/50"
                                        }`}
                                >
                                    {icon}
                                    {name}
                                </Link>
                            </li>
                        ))}

                        {/* Mobile Dropdown */}
                        <li>
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className={`w-full flex justify-center items-center gap-2 text-lg font-semibold rounded-md px-4 py-2
                                    ${otherLinks.some((link) => link.path === location.pathname)
                                        ? "bg-teal-500 text-white shadow-lg"
                                        : "text-gray-300 hover:text-teal-400 hover:bg-gray-900/50"
                                    }`}
                            >
                                <FaEllipsisH />
                                Other
                                <FaChevronDown
                                    className={`text-xs mt-[2px] transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {isDropdownOpen && (
                                <ul className="mt-2 flex flex-col gap-3 bg-black/70 backdrop-blur-md rounded-md p-3">
                                    {otherLinks.map(({ name, path }) => (
                                        <li key={name}>
                                            <Link
                                                to={path}
                                                onClick={() => setIsOpen(false)}
                                                className={`block text-center text-lg font-semibold rounded-md px-4 py-2
                                                    ${location.pathname === path
                                                        ? "bg-teal-500 text-white"
                                                        : "text-gray-300 hover:bg-teal-600 hover:text-white"
                                                    }`}
                                            >
                                                {name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>

                        {/* Auth Buttons */}
                        <li>
                            {user ? (
                                <button
                                    onClick={() => UserSignOut()}
                                    className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-full text-lg font-semibold mx-auto w-max transition duration-300 shadow-md"
                                >
                                    <FaSignOutAlt />
                                    Logout
                                </button>
                            ) : (
                                <Link
                                    to="/login"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 px-6 py-2 rounded-full text-lg font-semibold mx-auto w-max transition duration-300 shadow-md"
                                >
                                    <FaSignInAlt />
                                    Login
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
