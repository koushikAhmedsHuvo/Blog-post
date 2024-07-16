import React, { useState } from 'react'; // Add useState import
import Header from '../Header';
import BlogPost from '../BlogPost';
import blogData from '../../data.json'; // Ensure the path is correct

const HomePage = () => {
  const [blogs, setBlogs] = useState(blogData.Blog);

  return (
    <div>
      <Header />
      <BlogPost blogs={blogs} />
    </div>
  );
};

export default HomePage;
