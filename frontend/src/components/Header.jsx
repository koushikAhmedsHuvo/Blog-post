import React from 'react';

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
              <a
                href=""
                className="hover:text-gray-300 transition duration-300 text-3xl"
              >
                Login
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-gray-300 transition duration-300 text-3xl"
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
