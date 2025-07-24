import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Modal from "./components/Modal";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alert, setAlert] = useState("");

  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  
  const handleAddToCart = (product) => {
    const alreadyInCart = cartItems.find((item) => item.id === product.id);

    if (alreadyInCart) {
      setAlert("Item already added to the cart");
      setTimeout(() => setAlert(""), 3000);
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  
  const handleRemoveFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar
        cartCount={cartItems.length}
        onCartClick={() => setIsModalOpen(true)}
      />

      {alert && (
        <div className="text-center bg-red-100 text-red-700 py-2">
          {alert}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      {isModalOpen && (
        <Modal
          cartItems={cartItems}
          onClose={() => setIsModalOpen(false)}
          onRemove={handleRemoveFromCart}
        />
      )}
    </div>
  );
};

export default App;
