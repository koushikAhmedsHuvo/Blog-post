import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BlogPost = ({ blogs }) => {
  // Accept blogs as a prop
  const [expandedPostId, setExpandedPostId] = useState(null);

  const toggleExpand = (postId) => {
    setExpandedPostId(expandedPostId === postId ? null : postId);
  };

  return (
    <div className="mt-10 container mx-auto mb-7">
      <div className="flex flex-row">
        <div className="w-1/2 px-10">
          <h1 className="text-4xl font-bold mb-8">My Blog Post</h1>
          {blogs.map(
            (
              post // Use blogs prop instead of blogData
            ) => (
              <div
                key={post.id}
                className="mt-8 p-6 bg-white rounded-lg shadow-md cursor-pointer"
                onClick={() => toggleExpand(post.id)}
              >
                <h2 className="text-2xl font-bold">{post.title}</h2>
                <p className="text-gray-700 mt-2">
                  {expandedPostId === post.id
                    ? post.post
                    : `${post.post.substring(0, 100)}...`}
                </p>
                <div className="mt-4 text-gray-500 text-sm">
                  <span>By {post.author}</span>
                </div>
              </div>
            )
          )}
        </div>
        <div className="w-1/2 px-10">
          <Link to="/create">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Create a new Blog
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
