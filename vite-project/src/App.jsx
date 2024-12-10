import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import CartModal from "./components/CartModal";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const addToCart = (product) => {
    if (cart.find((item) => item.id === product.id)) {
      alert("Item already added to the cart");
    } else {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <div className="App">
      <Navbar
        cartCount={cart.length}
        onCartClick={() => setIsModalOpen(true)}
      />
      <Products products={products} addToCart={addToCart} />
      {isModalOpen && (
        <CartModal
          cart={cart}
          onClose={() => setIsModalOpen(false)}
          removeFromCart={removeFromCart}
        />
      )}
    </div>
  );
}

export default App;
