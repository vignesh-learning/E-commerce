import React from "react";

function About(){

    return(
        <>
            <nav class="navbar">
        <div class="container">
            <a href="/Home" class="logo">
                <img src="logo.png" alt="MyShop Logo"/>
                <span className="logoname">VIRTUAL MALL</span>
            </a>
            <button class="menu-toggle" id="menuToggle">
                <i class="fas fa-bars"></i>
            </button>
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

    <section class="page-header">
        <div class="container">
            <h1>About VIRTUAL MALL</h1>
            <p>Learn more about our story and mission</p>
        </div>
    </section>

    <section class="about-content">
        <div class="container">
            <div class="about-hero">
                <div class="about-text">
                    <h2>Our Story</h2>
                    <p>Founded in 2026, VIRTUAL MALL started with a simple mission: to make quality products accessible to everyone at affordable prices. What began as a small online store has grown into a trusted e-commerce platform serving thousands of customers worldwide.</p>
                    <p>We believe that shopping should be a delightful experience, which is why we focus on curating the best products, providing excellent customer service, and ensuring a seamless shopping journey from browsing to delivery.</p>
                </div>
                <div class="about-image">
                    <img src="story.jpg" alt="Our Story" />
                </div>
            </div>

            <div class="mission-vision">
                <div class="mission-card">
                    <div class="mission-icon">
                        <i class="fas fa-bullseye"></i>
                    </div>
                    <h3>Our Mission</h3>
                    <p>To provide exceptional value through quality products, competitive pricing, and outstanding customer service, making online shopping accessible and enjoyable for everyone.</p>
                </div>
                <div class="vision-card">
                    <div class="vision-icon">
                        <i class="fas fa-eye"></i>
                    </div>
                    <h3>Our Vision</h3>
                    <p>To become the most trusted and customer-centric e-commerce platform, setting new standards in online retail through innovation and excellence.</p>
                </div>
            </div>

            <div class="values-section">
                <h2>Our Values</h2>
                <div class="values-grid">
                    <div class="value-card">
                        <div class="value-icon">
                            <i class="fas fa-users"></i>
                        </div>
                        <h4>Customer First</h4>
                        <p>We prioritize our customers' needs and satisfaction above all else.</p>
                    </div>
                    <div class="value-card">
                        <div class="value-icon">
                            <i class="fas fa-award"></i>
                        </div>
                        <h4>Quality Assurance</h4>
                        <p>Every product undergoes strict quality checks before reaching you.</p>
                    </div>
                    <div class="value-card">
                        <div class="value-icon">
                            <i class="fas fa-shield-alt"></i>
                        </div>
                        <h4>Trust & Transparency</h4>
                        <p>We believe in honest pricing and clear communication.</p>
                    </div>
                    <div class="value-card">
                        <div class="value-icon">
                            <i class="fas fa-truck"></i>
                        </div>
                        <h4>Fast Delivery</h4>
                        <p>We ensure timely delivery with reliable shipping partners.</p>
                    </div>
                </div>
            </div>


            <div class="stats-section">
                <div class="stat-card">
                    <h3>10,000+</h3>
                    <p>Happy Customers</p>
                </div>
                <div class="stat-card">
                    <h3>500+</h3>
                    <p>Products Available</p>
                </div>
                <div class="stat-card">
                    <h3>50+</h3>
                    <p>Brand Partners</p>
                </div>
                <div class="stat-card">
                    <h3>24/7</h3>
                    <p>Customer Support</p>
                </div>
            </div>
        </div>
    </section>

    <section class="cta-section">
        <div class="container">
            <h2>Ready to Start Shopping?</h2>
            <p>Join thousands of satisfied customers who trust MyShop for their shopping needs.</p>
            <a href="/Products" class="btn btn-primary">Browse Products</a>
            <br />
            <br />
            <a href="/Contact" class="btn btn-secondary">Contact Us</a>
        </div>
    </section>

    <footer>
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
                        <li><a href="/FAQ">FAQ</a></li>
                        <li><a href="/Shipping">Shipping Policy</a></li>
                        <li><a href="/Returns">Returns & Refunds</a></li>
                        <li><a href="/Privacy">Privacy Policy</a></li>
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
            <div class="footer-bottom">
                <p>&copy; 2026 VIRTUAL MALL. All rights reserved.</p>
            </div>
        </div>
    </footer>
        </>
    )
}

export default About;