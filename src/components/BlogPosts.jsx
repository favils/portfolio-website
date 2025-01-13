import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BlogPosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/blog/posts`);
                const data = await response.json();
                setPosts(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching posts:', error);
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const getSnippet = (content) => {
        const snippetLength = 100;
        if (content.length > snippetLength) {
            return content.substring(0, snippetLength) + '...';
        } else {
            return content;
        }
    };

    if (loading) {
        return <div className="text-center py-12 text-xl">⋆⭒˚.⋆ loading ⋆⭒˚.⋆</div>;
    }

    return (
        <div className="container w-1/2 mx-auto px-4 py-8">
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="search blog posts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="placeholder-black w-full p-3 border-2 border-black bg-white shadow-[-10px_10px_0_0_rgba(0,0,0,1)] rounded-full text-lg"
                />
            </div>

            <div className="mx-auto">
                {filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => (
                        <div
                            key={post._id}
                            className="mb-8 p-6 bg-black border-4 border-white cursor-pointer"
                            onClick={() => navigate(`/blog/${post._id}`)}
                        >
                            <h2 className="text-3xl font-semibold text-white mb-4">{post.title}</h2>
                            <p className="text-white mb-4">{getSnippet(post.content)}</p>
                            <div className="text-sm text-white">
                                <span className="font-semibold">Author:</span> {post.author}
                            </div>
                            <div className="text-sm text-white">
                                <span className="font-semibold">Published at:</span> {new Date(post.publishedAt).toLocaleString()}
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-xl text-gray-500">No posts match your search.</p>
                )}
            </div>
        </div>
    );
};

export default BlogPosts;
