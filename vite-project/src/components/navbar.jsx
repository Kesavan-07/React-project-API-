import React from "react";
import "./Navbar.css";

function Navbar({ cartCount, onCartClick }) {
  return (
    <nav className="Navbar">
      <h1>Fake Store</h1>
      <button onClick={onCartClick} className="cart-button">
        Cart ({cartCount})
      </button>
    </nav>
  );
}

export default Navbar;
