import React, { useState } from 'react';
import Header from '../Header';
import BlogPost from '../BlogPost';
import CreateBlogPost from '../CreateBlogPost';
import blogData from '../../data.json';

const LandingPage = () => {
  const [blogs, setBlogs] = useState(blogData.Blog);

  const handleAddBlog = (newBlog) => {
    setBlogs((prevBlogs) => [
      ...prevBlogs,
      { ...newBlog, id: prevBlogs.length + 1 }, // Assigning a new id
    ]);
  };
  return (
    <div>
      <Header />
      <BlogPost blogs={blogs} />
      <CreateBlogPost onSubmit={handleAddBlog} />
    </div>
  );
};

export default LandingPage;
