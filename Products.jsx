import React, { useState, useEffect } from "react";
import "./products.css";

function Products() {
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
    {
        id:5,
        name:"T-Shirt",
        price: 499.99,
        image:"T-shirt.jpg",
        description: "",
    },
    {
        id: 6,
        name: "Washing Meachine",
        price: 14999.99,
        image: "washingMeachine.jpg",
        description: "",
    },
    {
        id:7,
        name:"Fleece Cardigan Jacket",
        price: 699.9,
        image:"Two-Pocket Fleece Cardigan Jacket.jpg",
        description:"",
    },
    {
        id:8,
        name:"Short Sleeve T-Shirt",
        price:599.99,
        image:"Short Sleeve T-Shirt.jpg",
        description:"",
    },
    {
        id:9,
        name:"Racks",
        price:1499.99,
        image:"Racks.jpg",
        description:"",
    },
    {
        id:10,
        name:"Printed Shirt",
        price:699.99,
        image:"printed shirt.jpg",
        description:"",
    },
    {
        id:11,
        name:"Plants Print Shirt",
        price:899.9,
        image:"Plants Print Shirt.jpg",
        description:"",
    },
    {
        id:12,
        name:"Men's OutFit",
        price:11999.99,
        image:"OutFit.jpg",
        description:"",
    },
    {
        id:13,
        name:"Hoodie",
        price:899.99,
        image:"oody1.jpg",
        description:"",
    },
    {
        id:14,
        name:"Hoodie",
        price:799.99,
        image:"oody.jpg",
        description:"",
    },
    {
        id:15,
        name:"Fashion Shirt",
        price:299.99,
        image:"Morden Shirt.jpg",
        description:"",
    },
    {
        id:16,
        name:"Men's Shoes",
        price:499.99,
        image:"Men's Shoes.jpg",
        description:"",
    },
    {
        id:17,
        name:"Men's T-shirt",
        price:299.99,
        image:"Men Tree Print Tee Without Necklace.jpg",
        description:"",
    },
    {
        id:18,
        name:"Men Ombre Shirt",
        price:199.99,
        image:"Men Ombre Shirt Without Tee.jpg",
        description:"",
    },
    {
        id:19,
        name:"Naruto Manga Book",
        price:69.99,
        image:"manga.jpg",
        description:"",
    },
    {
        id:20,
        name:"Men's Ombre T-shirt",
        price:199.99,
        image:"Men Ombre Shirt Without Tee.jpg",
        description:"",
    },
    {
        id:21,
        name:"Laptop",
        price:39999.99,
        image:"laptop.jpg",
        description:"",
    },
    {
        id:21,
        name:"Gaming Monitor",
        price:14999.99,
        image:"Gaming monitor.jpg",
        description:"",
    },
    {
        id:22,
        name:"Fridge",
        price:9999.99,
        image:"fridge.jpg",
        description:"",
    },
    {
        id:23,
        name:"Formal Shirt",
        price:699.99,
        image:"FormalShirt.jpg",
        description:"",
    },
    {
        id:24,
        name:"Formal Shoe",
        price:499.99,
        image:"Formal shoo.jpg",
        description:"",
    },
    {
        id:25,
        name:"Formal Phant",
        price:599.99,
        image:"Formal Phant.jpg",
        description:"",
    },
    {
        id:26,
        name:"FootBall",
        price:699.99,
        image:"football.jpg",
        description:"",
    },
    {
        id:27,
        name:"Circket Ball",
        price:99.99,
        image:"circketball.jpg",
        description:"",
    },
    {
        id:28,
        name:"Anime Hoodie",
        price:199.99,
        image:"Casual Anime Hoodie.jpg",
        description:"",
    },
    {
        id:29,
        name:"Case Fans",
        price:599.99,
        image:"Case Fans.jpg",
        description:"",
    },
    {
        id:30,
        name:"Cap",
        price:29.99,
        image:"Cap.jpg",
        description:"",
    },
    {
        id:31,
        name:"Bed",
        price:1499.99,
        image:"Bed.jpg",
        description:"",
    },
    {
        id:32,
        name:"Circket Bat",
        price:499.99,
        image:"bat.jpg",
        description:"",
    },
    {
        id:33,
        name:"Airpods",
        price:99.99,
        image:"airpods.jpg",
        description:"",
    },
    {
        id:34,
        name:"Air Conditioner",
        price:999.99,
        image:"ac.jpg",
        description:"",
    },
    {
        id:35,
        name:"Pen",
        price:9.9,
        image:"Pen.jpg",
        description:"",
    },
    {
        id:36,
        name:"Fash Wash",
        price:49.99,
        image:"Facewash.jpg",
        description:"",
    },


  ];

  const [cartCount, setCartCount] = useState(0);
  const [maxPrice, setMaxPrice] = useState(15000);
  const [sortBy, setSortBy] = useState("featured");

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.reduce((sum, item) => sum + item.quantity, 0));
  }, []);

 const addToCart = (product) => {

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingItem = cart.find(item => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  setCartCount(cart.reduce((sum, item) => sum + item.quantity, 0));
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
            <img src="/logo.png" alt="MyShop Logo" />
            <span className="logoname">VIRTUAL MALL</span>
          </a>
          <ul className="nav-links">
            <li><a href="/Home">Home</a></li>
            <li><a href="/Products" className="active">Products</a></li>
            <li><a href="/About"> About</a></li>
            <li><a href="/Contact">Contact</a></li>
            <li><a href="/Conformation">Oders</a></li>
           <li>
              <a href="/Cart" className="cart-btn">
                <i className="fas fa-shopping-cart">Cart</i>
                <span className="cart-count">{cartCount}</span>
              </a>
            </li>
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
                <button className="add-to-cart" onClick={() => addToCart(item)}>Add to Cart</button>
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

export default Products;