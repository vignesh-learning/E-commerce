import React, { useState } from "react";
import "./products.css";

function Fashion() {
  const items = [
    {
        id:1,
        name:"T-Shirt",
        price: 499.99,
        image:"T-shirt.jpg",
        description: "",
    },
    {
        id:2,
        name:"Fleece Cardigan Jacket",
        price: 699.9,
        image:"Two-Pocket Fleece Cardigan Jacket.jpg",
        description:"",
    },
    {
        id:3,
        name:"Short Sleeve T-Shirt",
        price:599.99,
        image:"Short Sleeve T-Shirt.jpg",
        description:"",
    },
    {
        id:4,
        name:"Printed Shirt",
        price:699.99,
        image:"printed shirt.jpg",
        description:"",
    },
    {
        id:5,
        name:"Plants Print Shirt",
        price:899.9,
        image:"Plants Print Shirt.jpg",
        description:"",
    },
    {
        id:6,
        name:"Men's OutFit",
        price:11999.99,
        image:"OutFit.jpg",
        description:"",
    },
    {
        id:7,
        name:"Hoodie",
        price:899.99,
        image:"oody1.jpg",
        description:"",
    },
    {
        id:8,
        name:"Hoodie",
        price:799.99,
        image:"oody.jpg",
        description:"",
    },
    {
        id:9,
        name:"Fashion Shirt",
        price:299.99,
        image:"Morden Shirt.jpg",
        description:"",
    },
    {
        id:10,
        name:"Men's Shoes",
        price:499.99,
        image:"Men's Shoes.jpg",
        description:"",
    },
    {
        id:11,
        name:"Men's T-shirt",
        price:299.99,
        image:"Men Tree Print Tee Without Necklace.jpg",
        description:"",
    },
    {
        id:12,
        name:"Men Ombre Shirt",
        price:199.99,
        image:"Men Ombre Shirt Without Tee.jpg",
        description:"",
    },
    {
        id:13,
        name:"Men's Ombre T-shirt",
        price:199.99,
        image:"Men Ombre Shirt Without Tee.jpg",
        description:"",
    },
    {
        id:14,
        name:"Formal Shirt",
        price:699.99,
        image:"FormalShirt.jpg",
        description:"",
    },
    {
        id:15,
        name:"Formal Shoe",
        price:499.99,
        image:"Formal shoo.jpg",
        description:"",
    },
    {
        id:16,
        name:"Formal Phant",
        price:599.99,
        image:"Formal Phant.jpg",
        description:"",
    },
    {
        id:17,
        name:"Anime Hoodie",
        price:199.99,
        image:"Casual Anime Hoodie.jpg",
        description:"",
    },
    {
        id:18,
        name:"Cap",
        price:29.99,
        image:"Cap.jpg",
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

export default Fashion;