import React, { useEffect, useState } from "react";
import "./sign.css";

function Home() {

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 89.99,
      image: "neckband.jpg",
      description: "High-quality wireless headphones with noise cancellation",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.99,
      image: "smartwatch.jpg",
      description: "Feature-rich smartwatch with health monitoring",
    },
    {
      id: 3,
      name: "Laptop Backpack",
      price: 49.99,
      image: "backpack.jpg",
      description: "Durable laptop backpack with USB charging port",
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      price: 59.99,
      image: "speaker.jpg",
      description: "Portable Bluetooth speaker with 12-hour battery",
    },

  ];

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === product.id);

      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });

    alert(`${product.name} added to cart!`);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <a href="/Home" className="logo">
            <img src="logo.png" alt="MyShop Logo" />
           <span className="logoname">VIRTUAL MALL</span>
          </a>
          <ul class="nav-links" id="navLinks">
                <li><a href="/Home">Home</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/About" class="active">About</a></li>
                <li><a href="/Contact">Contact</a></li>
                <li><a href="/Conformation">Oders</a></li>
                <li><a href="/Cart" class="cart-btn">
                    <i class="fas fa-shopping-cart"></i>
                    <span class="cart-count">0</span>
                    <span class="cart-text"> Cart</span>
                </a></li>
            </ul>
        </div>
      </nav>

      <section className="hero">
        <div className="container">
          <h1>Welcome to VIRTUAL MALL</h1>
          <p>Find the best products at amazing prices</p>
          <a href="/Login" className="btn">Sign up</a>
        </div>
      </section>

      <section className="featured-products">
        <div className="container">
          <h2>Featured Products</h2>

          <div className="products-grid">
            {products.map(product => (
              <div className="product-card" key={product.id}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-img"
                />
                <div className="product-info">
                  <h3 className="product-title">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <p className="product-price">${product.price.toFixed(2)}</p>
                  <button
                    className="add-to-cart"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <br />
          <div className="more"> 
            <a href="/Register" className="btn">More</a>
        </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2026 VIRTUAL MALL. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Home;
