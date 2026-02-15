import React, { useState } from "react";
import "./products.css";

function Electronics() {
  const items = [
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
      name: "Bluetooth Speaker",
      price: 59.99,
      image: "speaker.jpg",
      description: "Portable Bluetooth speaker with 12-hour battery",
    },
    {
        id:4,
        name: "Washing Meachine",
        price: 14999.99,
        image: "washingMeachine.jpg",
        description: "",
    },
    {
        id:5,
        name:"Laptop",
        price:39999.99,
        image:"laptop.jpg",
        description:"",
    },
    {
        id:6,
        name:"Gaming Monitor",
        price:14999.99,
        image:"Gaming monitor.jpg",
        description:"",
    },
    {
        id:7,
        name:"Fridge",
        price:9999.99,
        image:"fridge.jpg",
        description:"",
    },
    {
        id:8,
        name:"Case Fans",
        price:599.99,
        image:"Case Fans.jpg",
        description:"",
    },
    {
        id:9,
        name:"Airpods",
        price:99.99,
        image:"airpods.jpg",
        description:"",
    },
    {
        id:10,
        name:"Air Conditioner",
        price:999.99,
        image:"ac.jpg",
        description:"",
    },

  ];

  const [cartCount, setCartCount] = useState(0);
  const [maxPrice, setMaxPrice] = useState(15000);
  const [sortBy, setSortBy] = useState("featured");

  const addToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  const filteredItems = items
    .filter((item) => item.price <= maxPrice)
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "name-asc") return a.name.localeCompare(b.name);
      if (sortBy === "name-desc") return b.name.localeCompare(a.name);
      return 0;
    });

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

      <section className="products-page">
        <div className="container products-layout">

          {/* LEFT COLUMN */}
          <aside className="sidebar">
            <div className="filter-section">
              <h3>Categories</h3>
              <ul className="category-filter">
                <li><a href="Products" className="active">All Products</a></li>
                <li><a href="/Electronics">Electronics</a></li>
                <li><a href="/Fashion">Fashion</a></li>
                <li><a href="/Living">Home & Living</a></li>
                <li><a href="/Sports">Sports</a></li>
                <li><a href="/Books">Books</a></li>
              </ul>
            </div>

            <div className="filter-section">
              <h3>Price Range</h3>
              <input
                type="range"
                min="0"
                max="100000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
              />
              <p>Max Price: ${maxPrice}</p>
            </div>

            <div className="filter-section">
              <h3>Sort By</h3>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>
            </div>
          </aside>
            <br />
          <main className="products-grid">
            {filteredItems.map((item) => (
              <div className="product-card" key={item.id}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p className="price">${item.price.toFixed(2)}</p>
                <button onClick={addToCart}>Add to Cart</button>
              </div>
            ))}
          </main>
        </div>
      </section>

      <footer className="footer">
         <div class="container">
            <div class="footer-grid">
                <div class="footer-col">
                    <a href="/Home" class="footer-logo">VIRTUAL MALL</a>
                    <p>Your one-stop destination for quality products at affordable prices.</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
                <div class="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/Home">Home</a></li>
                        <li><a href="/Products">Products</a></li>
                        <li><a href="/About">About Us</a></li>
                        <li><a href="/Contact">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Customer Service</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Shipping Policy</a></li>
                        <li><a href="#">Returns & Refunds</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Contact Info</h4>
                    <ul class="contact-info">
                        <li><i class="fas fa-map-marker-alt"></i> 123 Street, City, Country</li>
                        <li><i class="fas fa-phone"></i> +1 234 567 890</li>
                        <li><i class="fas fa-envelope"></i> info@myshop.com</li>
                    </ul>
                </div>
            </div>
        <p>© 2026 VIRTUAL MALL</p>
        </div>
      </footer>
    </>
  );
}

export default Electronics;