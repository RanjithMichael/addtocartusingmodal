import React from 'react';

const Navbar = ({ count, onCartClick }) => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Fake Store</h1>
      <button
        onClick={onCartClick}
        className="relative bg-white text-blue-600 px-4 py-2 rounded-md font-medium"
      >
        Cart ({count})
      </button>
    </nav>
  );
};

export default Navbar;