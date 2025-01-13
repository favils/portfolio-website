import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/blog/posts/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch post');
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
      }
    };
    fetchPost();
  }, [id]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/blog/posts/${id}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: comment }),
      });
      if (!response.ok) {
        throw new Error('Failed to add comment');
      }
      const updatedPost = await response.json();
      setPost(updatedPost);
      setComment('');
    } catch (error) {
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      {post ? (
        <div className="w-[50%] p-6">
          <h1 className="text-2xl text-center font-bold">{post.title}</h1>
          <h2 className="text-lg text-center">By {post.author}</h2>
          <p className="text-sm text-center mb-4">{new Date(post.publishedAt).toLocaleDateString()}</p>
          <p className="text-base mb-4">{post.content}</p>
          <h3 className="text-xl font-bold mt-6">comments</h3>
          <ul className="mb-6">
            {post.comments.length > 0 ? (
              post.comments.map((comment, index) => (
                <li key={index} className="bg-white p-2">
                  <p>{comment.text}</p>
                  <p className="text-xs text-gray-500">{new Date(comment.timestamp).toLocaleString()}</p>
                </li>
              ))
            ) : (
              <p>No comments yet.</p>
            )}
          </ul>
          <form onSubmit={handleCommentSubmit} className="mt-4">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a comment"
              className="w-full p-2 border mb-4"
              rows="4"
              required
            />
            <button type="submit" className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-700">
              Submit Comment
            </button>
          </form>
        </div>
      ) : (
        <p>⋆⭒˚.⋆ loading ⋆⭒˚.⋆</p>
      )}
    </div>
  );
};

export default Post;
