import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle, FaHome } from "react-icons/fa";
import { sendEmailVerification } from "firebase/auth";
import { AuthContext } from "../Providers/AuthProvider";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";

import bg from "/Backgrounds/signlogin.jpg";
import ill from "/Backgrounds/signIllustration.svg";

const SignupPage = () => {
    const axiosPublic = UseAxiosPublic();
    const navigate = useNavigate();
    const { CreateUserByMailPass, setUser, updatedProfile, GoogleLogin } = useContext(AuthContext);

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [show, setShow] = useState(false);

    const HandleSignUp = (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        const Email = e.target.email.value;
        const Password = e.target.password.value;
        const Name = e.target.name.value;
        const Photo = e.target.photo.value;
        const Terms = e.target.terms.checked;

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

        if (!Terms) return setError("Please accept terms and conditions.");
        if (Password.length < 6) return setError("Password must be at least 6 characters.");
        if (!passwordRegex.test(Password)) return setError("Password must include lowercase, uppercase, number, and special character.");

        CreateUserByMailPass(Email, Password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);

                axiosPublic.post("/Users", {
                    name: Name,
                    email: Email,
                    role: "user",
                    isSubscribed: false
                }).then((res) => {
                    if (res.data.insertedId) setSuccess("Account created successfully.");
                });

                updatedProfile({ displayName: Name, photoURL: Photo }).then(() => {
                    sendEmailVerification(user).then(() => { });
                    e.target.reset();
                    navigate("/");
                }).catch(err => setError(err.message));
            })
            .catch(err => setError(err.message));
    };

    const HandleGoogleLogin = () => {
        GoogleLogin()
            .then((res) => {
                const user = res.user;
                setUser(user);

                axiosPublic.post("/Users", {
                    name: user.displayName,
                    email: user.email,
                    role: "user",
                    isSubscribed: false
                });

                setSuccess("Google Sign Up successful.");
                navigate("/");
            })
            .catch(() => {
                setError("Google Sign Up failed.");
                setUser(null);
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center py-10 bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
            <div className="bg-white/10 backdrop-blur-xl text-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col md:flex-row">

                {/* Illustration Section */}
                <div className="md:w-1/2 flex flex-col items-center justify-center gap-4 p-6 backdrop-blur-lg bg-white/40">

                    <img src={ill} alt="Sign Up" className="w-40 md:w-48 drop-shadow-xl" />

                    <Link to="/" className="mt-3 px-4 py-2 bg-white text-teal-700 rounded-full font-semibold hover:bg-teal-200 transition duration-300 flex items-center gap-2">
                        <FaHome /> Back to Home
                    </Link>
                </div>

                {/* Form Section */}
                <div className="md:w-1/2 p-8 bg-white/10 rounded-lg text-white">
                    <h2 className="text-3xl font-bold text-center mb-6 text-teal-300">Join K-Web-Tech</h2>

                    <form onSubmit={HandleSignUp} className="space-y-5">
                        {/* Name */}
                        <div>
                            <label className="text-sm font-semibold mb-1 block">Full Name</label>
                            <input name="name" type="text" placeholder="Your full name" required className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-sm" />
                        </div>

                        {/* Photo */}
                        <div>
                            <label className="text-sm font-semibold mb-1 block">Photo URL</label>
                            <input name="photo" type="text" placeholder="Link to profile photo" required className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-sm" />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="text-sm font-semibold mb-1 block">Email</label>
                            <input name="email" type="email" placeholder="Your email" required className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-sm" />
                        </div>

                        {/* Password */}
                        <div className="relative">
                            <label className="text-sm font-semibold mb-1 block">Password</label>
                            <input
                                name="password"
                                type={show ? "text" : "password"}
                                placeholder="Password"
                                required
                                className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-sm"
                            />
                            <button onClick={(e) => { e.preventDefault(); setShow(!show); }} className="absolute top-10 right-4 text-gray-500 hover:text-teal-400 transition">
                                {show ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>

                        {/* Terms */}
                        <div className="flex items-center gap-2">
                            <input type="checkbox" name="terms" className="w-4 h-4 accent-teal-400" />
                            <span className="text-sm">I agree to the terms and conditions.</span>
                        </div>

                        {/* Error/Success */}
                        {error && <p className="text-red-400 text-sm text-center">{error}</p>}
                        {success && <p className="text-green-400 text-sm text-center">{success}</p>}

                        {/* Submit */}
                        <button type="submit" className="w-full py-2 rounded-md bg-teal-500 hover:bg-teal-600 font-semibold text-white transition duration-300">
                            Sign Up
                        </button>
                    </form>

                    {/* Google Login */}
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-300">Or sign up with</p>
                        <button
                            onClick={HandleGoogleLogin}
                            className="mt-2 w-full flex justify-center items-center gap-2 px-4 py-2 bg-white text-teal-700 rounded-md hover:bg-gray-200 transition duration-300"
                        >
                            <FaGoogle /> Google
                        </button>
                    </div>

                    {/* Login Link */}
                    <p className="text-center mt-6 text-sm text-gray-200">
                        Already have an account?{" "}
                        <Link to="/login" className="text-teal-300 hover:underline">Log in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
