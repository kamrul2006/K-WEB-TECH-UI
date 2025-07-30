import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaSearch } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const categories = ["All", "Design", "Development", "Performance"];

const BlogsPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        fetch("/blogs.json")
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);

    const filteredBlogs = blogs.filter((blog) => {
        const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
        const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <section className="bg-gray-950 min-h-screen py-16 px-6 text-white">
            <div className="max-w-6xl mx-auto">
                <Fade  >
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Explore Our Blog
                        </h2>
                        <p className="text-gray-400 mt-2">Insights, tutorials, and inspiration from K-Web-Tech</p>
                    </div>
                </Fade>

                {/* Search and Filter */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
                    {/* Search */}
                    <div className="relative w-full md:w-1/2">
                        <input
                            type="text"
                            placeholder="Search blog..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full p-3 pl-10 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                        <FaSearch className="absolute top-3.5 left-3 text-cyan-400" />
                    </div>

                    {/* Dropdown Filter */}
                    <div className="w-full md:w-1/3">
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="w-full bg-white/10 border border-white/10 text-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        >
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Blog Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredBlogs.map((blog, index) => (
                        <Fade key={blog.id} cascade delay={index * 50}>
                            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/40 border border-white/10 rounded-2xl overflow-hidden shadow-md hover:shadow-cyan-500/30 group transition-all duration-300 hover:scale-[1.02]">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover transform transition duration-500 group-hover:scale-110 group-hover:brightness-90"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                </div>

                                <div className="p-5 flex flex-col h-full">
                                    <span className="text-xs text-cyan-400 uppercase font-medium mb-1 tracking-wider">{blog.category}</span>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-300 transition">
                                        {blog.title}
                                    </h3>
                                    <p className="text-sm text-gray-300 flex-grow">
                                        {blog.description.slice(0, 120)}...
                                    </p>

                                    <div className="mt-4 flex justify-between text-sm text-gray-400">
                                        <div>🗓 {blog.date} | ⏰ {blog.time}</div>
                                        <div className="flex items-center gap-1">
                                            <FaHeart className="text-red-500" />
                                            {blog.likes}
                                        </div>
                                    </div>

                                    <Link
                                        to={`/blogs/${blog.id}`}
                                        className="mt-4 inline-block text-center px-4 py-2 bg-cyan-500 rounded-md text-sm font-medium text-white hover:bg-cyan-600 transition"
                                    >
                                        Read Full Blog
                                    </Link>
                                </div>
                            </div>
                        </Fade>
                    ))}

                    {filteredBlogs.length === 0 && (
                        <p className="text-center col-span-full text-gray-500">No blogs found.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default BlogsPage;
