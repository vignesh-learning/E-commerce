import React, { useEffect, useState } from "react";
import "./contacts.css";

function Contact() {
  const [showScroll, setShowScroll] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Your message has been sent successfully! We will contact you soon.");
    e.target.reset();
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  

  return (
    <>
      <nav className="navbar">
        <div className="container nav-container">
          <a href="/Home" className="logo">
            <img src="logo.png" alt="VIRTUAL MALL Logo" className="logo-img" />
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

      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container contact-grid">

          <div className="contact-info">
            <div className="info-card">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h3>Address</h3>
                <p>123 Shopping Street, E-Commerce City</p>
              </div>
            </div>

            <div className="info-card">
              <i className="fas fa-phone"></i>
              <div>
                <h3>Phone</h3>
                <p>+91 9150312680</p>
              </div>
            </div>

            <div className="info-card">
              <i className="fas fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>info@virtualmall.com</p>
                <p>support@virtualmall.com</p>
              </div>
            </div>
          </div>

          <div className="contact-form-box">
            <h2>Send a Message</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone Number" />
              <select required>
                <option value="">Select Subject</option>
                <option>General Inquiry</option>
                <option>Order Related</option>
                <option>Returns & Refunds</option>
              </select>
              <textarea rows="5" placeholder="Your Message" required></textarea>

              <button type="submit">
                <i className="fas fa-paper-plane"></i> Send Message
              </button>
            </form>
          </div>
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
                        <li><a href="FAQ">FAQ</a></li>
                        <li><a href="Shipping">Shipping Policy</a></li>
                        <li><a href="Returns">Returns & Refunds</a></li>
                        <li><a href="Privacy">Privacy Policy</a></li>
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

      {showScroll && (
        <button className="scroll-top-btn" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </>
  );
}

export default Contact;
