import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md flex flex-col justify-between">
      <img src={product.image} alt={product.title} className="h-40 object-contain mx-auto" />
      <h2 className="font-semibold text-md mt-2">{product.title}</h2>
      <p className="text-lg font-bold text-green-700">${product.price}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;