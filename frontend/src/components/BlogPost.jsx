import React, { useState } from 'react';

const BlogPost = ({ blogs, handleAddBlog }) => {
  const [expandedPostId, setExpandedPostId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ author: '', title: '', post: '' });

  const toggleExpand = (postId) => {
    setExpandedPostId(expandedPostId === postId ? null : postId);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddBlog(formData);
    setFormData({ author: '', title: '', post: '' });
    setShowForm(false);
  };

  return (
    <div className="mt-10 container mx-auto mb-7">
      <div className="flex flex-row">
        <div className="w-1/2 px-10">
          <h1 className="text-4xl font-bold mb-8">My Blog Post</h1>
          {blogs.map((post) => (
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
          ))}
        </div>
        <div className="w-1/2 px-10">
          <div onClick={toggleForm} className="cursor-pointer">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Create a new Blog
            </h2>
          </div>
          {showForm && (
            <div className="w-full px-10">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center justify-center h-full p-6 bg-blue-50 rounded-lg shadow-md"
              >
                <div className="mb-4 w-full">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="author"
                  >
                    Author
                  </label>
                  <input
                    type="text"
                    id="author"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="mb-4 w-full">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="title"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="mb-4 w-full">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="post"
                  >
                    Post
                  </label>
                  <textarea
                    id="post"
                    name="post"
                    value={formData.post}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
