import React, { useContext, useState } from "react";
import { FaGoogle, FaEyeSlash, FaEye, FaHome } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import { AuthContext } from "../Providers/AuthProvider";

import bg from "/Backgrounds/bglogin.jpg";
import ill from "/Backgrounds/loginIllustration.svg";

const LoginPage = () => {
    const axiosPublic = UseAxiosPublic();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [show, setShow] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const { LoginUser, setUser, GoogleLogin } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        const email = e.target.email.value;
        const password = e.target.password.value;

        LoginUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                setSuccess("✅ Login successful!");
                navigate(location.state ? location.state : "/");
            })
            .catch(() => {
                setError("❌ Email or password is invalid.");
            });
    };

    const handleGoogleLogin = () => {
        GoogleLogin()
            .then((res) => {
                setUser(res.user);

                const userInfo = {
                    name: res.user.displayName,
                    email: res.user.email,
                    role: "user",
                    isSubscribed: false,
                };

                axiosPublic.post("/users", userInfo);
                setSuccess("✅ Login successful!");
                navigate(location.state ? location.state : "/");
            })
            .catch(() => {
                setUser(null);
                setError("❌ Google login failed.");
            });
    };

    return (
        <div
            className="flex items-center justify-center min-h-screen py-10 bg-cover bg-center"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="shadow-2xl border backdrop-blur border-gray-300 text-white rounded-xl flex flex-col lg:flex-row w-11/12 max-w-5xl overflow-hidden bg-black/50 ">

                {/* Left Side */}
                <div className="w-full md:w-1/2 flex items-center justify-center flex-col p-8">
                    <img
                        src={ill}
                        alt="Login Illustration"
                        className="md:w-72 w-48 mb-6 drop-shadow-lg"
                    />
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500 text-white font-semibold rounded-md shadow-md hover:bg-teal-600 transition duration-300 transform hover:scale-105"
                    >
                        <FaHome />
                        Back to Home
                    </Link>
                </div>

                {/* Right Side - Login Form */}
                <div className="lg:w-1/2 w-full p-8 bg-white bg-opacity-10 rounded-lg text-white">
                    <h2 className="text-3xl font-bold text-center bg-white text-black rounded-full py-2 px-8 w-fit mx-auto mb-6 shadow">
                        Sign In
                    </h2>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-black mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-2 rounded-md bg-white text-black border border-gray-300 focus:border-teal-400 shadow-sm focus:outline-none"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div className="relative">
                            <label htmlFor="password" className="block text-sm font-medium text-black mb-1">
                                Password
                            </label>
                            <input
                                type={show ? "text" : "password"}
                                id="password"
                                name="password"
                                className="w-full px-4 py-2 rounded-md bg-white text-black border border-gray-300 focus:border-teal-400 shadow-sm focus:outline-none"
                                placeholder="Enter your password"
                                required
                            />
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    setShow(!show);
                                }}
                                className="absolute right-3 top-9 text-lg text-gray-600 hover:text-teal-400"
                            >
                                {show ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>

                        {/* Error/Success Message */}
                        {error && (
                            <p className="text-red-400 text-sm font-medium text-center">{error}</p>
                        )}
                        {success && (
                            <p className="text-green-400 text-sm font-medium text-center">{success}</p>
                        )}

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full py-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-md shadow-md transition duration-300 transform hover:scale-105"
                        >
                            Sign In
                        </button>
                    </form>

                    {/* Register Link */}
                    <p className="mt-4 text-center text-sm text-black">
                        New here?{" "}
                        <Link
                            to="/register"
                            className="text-teal-700 hover:underline hover:font-bold transition"
                        >
                            Create a New Account
                        </Link>
                    </p>

                    {/* Google Sign-in */}
                    <div className="mt-6 text-center">
                        <p className="text-sm text-white/80 mb-2">Or sign in with</p>
                        <button
                            onClick={handleGoogleLogin}
                            className="w-full flex items-center justify-center gap-2 py-2 bg-white text-teal-700 font-medium rounded-md shadow-xl shadow-black/50 hover:shadow-lg transition duration-300 hover:bg-gray-100 transform hover:scale-105 border-b-4 border"
                        >
                            <FaGoogle />
                            Sign in with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
