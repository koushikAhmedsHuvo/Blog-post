import React, { useState } from 'react'; // Add useState import
import Header from '../Header';
import BlogPost from '../BlogPost';
import blogData from '../../data.json'; // Ensure the path is correct

const HomePage = () => {
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
      <BlogPost blogs={blogs} handleAddBlog={handleAddBlog} />
    </div>
  );
};

export default HomePage;
