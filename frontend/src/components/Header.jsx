import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md py-4">
      <div className="container mx-auto flex flex-row justify-between items-center px-4">
        <div className="ml-10">
          <h1 className="text-4xl font-bold">My Blog</h1>
        </div>
        <div className="flex flex-row space-x-4 mr-10">
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/login"
                className="hover:text-gray-300 transition duration-300 text-3xl"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="hover:text-gray-300 transition duration-300 text-3xl"
              >
                SignUp
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
