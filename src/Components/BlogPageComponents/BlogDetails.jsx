import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaCalendarAlt, FaClock, FaHeart, FaUser, FaTag, FaArrowLeft } from "react-icons/fa";
import { Fade, Slide } from "react-awesome-reveal";

const BlogDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(null);
    const [blogs, setBlogs] = useState([]);
    const [likes, setLikes] = useState(0);

    useEffect(() => {
        fetch("/blogs.json")
            .then((res) => res.json())
            .then((data) => {
                setBlogs(data);
                const found = data.find((item) => item.id === parseInt(id));
                setBlog(found);
                setLikes(found?.likes || 0);
            });
    }, [id]);

    const handleLike = () => setLikes(prev => prev + 1);

    if (!blog) return <p className="text-white text-center mt-20 text-xl">Loading blog post...</p>;

    const relatedBlogs = blogs.filter(
        (item) => item.category === blog.category && item.id !== blog.id
    ).slice(0, 4);

    return (
        <div className="min-h-screen bg-[#0d1117] text-white py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Blog Main Content */}
                <div className="lg:col-span-8">
                    <Fade direction="up"  >
                        <button
                            onClick={() => navigate("/blogs")}
                            className="my-6 p-2 border border-cyan-500 rounded-full inline-flex items-center gap-2 text-cyan-400 hover:text-white hover:bg-cyan-600/20 transition"
                        >
                            <FaArrowLeft /> Back to All Blogs
                        </button>

                        <div className="rounded-xl overflow-hidden shadow-xl">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full object-cover h-72 md:h-[28rem] rounded-xl"
                            />
                        </div>

                        <div className="mt-10 bg-gradient-to-br from-[#161b22] to-[#1f2937] p-8 rounded-2xl shadow-2xl">
                            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-cyan-300">
                                {blog.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-6">
                                <span className="flex items-center gap-1"><FaCalendarAlt /> {blog.date}</span>
                                <span className="flex items-center gap-1"><FaClock /> {blog.time}</span>
                                <span className="flex items-center gap-1"><FaUser /> K-Web Team</span>
                                <span className="flex items-center gap-1"><FaTag /> {blog.category}</span>
                                <span className="bg-teal-600/20 text-teal-300 px-3 py-1 rounded-full ml-auto text-xs">
                                    ~ 4 min read
                                </span>
                            </div>

                            <article className="prose prose-invert prose-sm sm:prose-base lg:prose-lg max-w-none whitespace-pre-line">
                                {blog.description}
                            </article>

                            {/* Like Button */}
                            <div className="mt-8 flex items-center gap-3">
                                <button
                                    onClick={handleLike}
                                    className="flex items-center gap-2 px-4 py-2 bg-pink-600/20 hover:bg-pink-600/40 text-pink-400 rounded-full transition"
                                >
                                    <FaHeart /> Like
                                </button>
                                <span className="text-pink-300">{likes} likes</span>
                            </div>

                            {/* Author Info */}
                            <div className="mt-12 border-t border-gray-700 pt-6 text-sm text-gray-400">
                                <p>📢 <span className="text-white font-medium">Author:</span> K-Web Tech Editorial Team</p>
                                <p className="mt-1">💌 <span className="text-white font-medium">Contact:</span> support@kwebtech.dev</p>
                                <p className="mt-1">🔖 <span className="text-white font-medium">Tags:</span> #{blog.category.toLowerCase()} #webdev #frontend</p>
                            </div>
                        </div>
                    </Fade>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-4 ">
                    <Slide direction="right"  >
                        <div className=" p-6 rounded-2xl shadow-xl sticky top-20 h-full flex flex-col justify-around">

                            <h3 className="text-2xl font-bold text-cyan-400 my-4">Related Posts</h3>
                            <div className="space-y-5 min-h-screen ">
                                {relatedBlogs.length > 0 ? relatedBlogs.map((item) => (
                                    <Link
                                        key={item.id}
                                        to={`/blogs/${item.id}`}
                                        className="bg-white/5 hover:bg-white/10 p-3 rounded-lg block transition"
                                    >
                                        <div className="flex gap-3 items-start">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-20 h-20 object-cover rounded-md flex-shrink-0"
                                            />
                                            <div>
                                                <h4 className="text-base font-semibold text-white mb-1 line-clamp-2">{item.title}</h4>
                                                <p className="text-xs text-gray-400 line-clamp-2">{item.description.slice(0, 60)}...</p>
                                                <span className="text-[10px] text-gray-500 mt-1 block">🗓 {item.date}</span>
                                            </div>
                                        </div>
                                    </Link>
                                )) : (
                                    <p className="text-sm text-gray-500">No related blogs found.</p>
                                )}
                            </div>

                            <img src="/kwebTech.png" alt="logo" className="bottom-0 bg-white p-4 rounded-2xl" />
                        </div>
                    </Slide>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
