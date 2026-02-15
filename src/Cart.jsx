import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Carts.css"

function Cart(){

const navigate = useNavigate();
 const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  const updateCart = (updatedCart) => {
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const increaseQty = (id) => {
    const updated = cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(updated);
  };

  const decreaseQty = (id) => {
    const updated = cartItems.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    updateCart(updated);
  };

  const removeItem = (id) => {
    const updated = cartItems.filter(item => item.id !== id);
    updateCart(updated);
  };
  const clearCart = () => {
    if(window.confirm("Are you sure you want to clear cart?")){
  updateCart([]);
  }
};

   const confirmOrder = (product) => {
  const confirm = window.confirm(
    `Confirm order for ${product.name}?`
  );

  if (confirm) {

    const existingOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    const newOrder = {
      ...product,
      status: "Processing",
      orderDate: new Date().toLocaleString(),
    };

    const updatedOrders = [...existingOrders, newOrder];

    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    removeItem(product.id);

    navigate("/Conformation");
  }
};





    return(
        <>
            <nav className="navbar">
        <div className="container">
            <a href="/Home" className="logo">
                <img src="logo.png" alt="MyShop Logo" className="logo-img" />
                <span className="logoname">VIRTUAL MALL</span>
            </a>
            <button className="menu-toggle" id="menuToggle">
                <i className="fas fa-bars"></i>
            </button>
            <ul className="nav-links" id="navLinks">
                <li><a href="/Home">Home</a></li>
                <li><a href="/Products">Products</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Contact">Contact</a></li>
                <li><a href="/Conformation">Oders</a></li>
                <li><a href="/Cart" className="cart-btn active">
                    <i className="fas fa-shopping-cart"></i>
                    <span>{cartItems.length}</span>
                    <span className="cart-text">Cart</span>
                </a></li>
            </ul>
        </div>
    </nav>

    <section className="page-header">
        <div className="container">
            <h1>Shopping Cart</h1>
            <p>Review your items and proceed to checkout</p>
        </div>
    </section>

    <section className="cart-content">
        <div className="container">
            <div className="cart-wrapper">
                <div className="cart-items">
                    <div className="cart-header">
                        <h2>Your Items (<span id="itemCount">0</span>)</h2>
                       <button className="btn-clear" onClick={clearCart}>Clear Cart</button>

                    </div>

                    <div className="cart-table">
                        <div className="cart-table-header">
                            <div className="cart-col-product">Product</div>
                            <div className="cart-col-price">Price</div>
                            <div className="cart-col-quantity">Quantity</div>
                            <div className="cart-col-total">Total</div>
                            <div className="cart-col-remove">Remove</div>
                        </div>

                        <div className="cart-items-list">

                    {cartItems.length === 0 ? (

                        <div className="cart-empty">
                        <h3>Your cart is empty</h3>
                        <a href="/Products" className="btn btn-primary">
                            Browse Products
                        </a>
                        </div>

                    ) : (

                        cartItems.map((item) => (
                        <div className="cart-row" key={item.id}>

                            <div className="cart-col-product">
                            <img src={item.image} width="80" />
                            <span>{item.name}</span>
                            </div>

                            <div className="cart-col-price">
                            ${item.price}
                            </div>

                            <div className="cart-col-quantity">
                            <button onClick={() => decreaseQty(item.id)}>-</button>
                            {item.quantity}
                            <button onClick={() => increaseQty(item.id)}>+</button>
                            </div>

                            <div className="cart-col-total">
                            ${(item.price * item.quantity).toFixed(2)}
                            </div>

                            <div className="cart-col-remove">
                            <button onClick={() => removeItem(item.id)}>Remove</button>
                            </div>

                            <button className="btn-confirm" onClick={() => confirmOrder(item)}>Confirm Order</button>
                        </div>
                        ))
                    )}
                    </div>
                    </div>
                </div>

                <div className="order-summary">
                    <div className="summary-card">
                        <h3>Order Summary</h3>
                        
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span id="subtotal">$0.00</span>
                        </div>
                        
                        <div className="summary-row">
                            <span>Shipping</span>
                            <span id="shipping">$0.00</span>
                        </div>
                        
                        <div className="summary-row">
                            <span>Tax</span>
                            <span id="tax">$0.00</span>
                        </div>
                        
                        <div className="summary-row total-row">
                            <span>Total</span>
                            <span id="total">$0.00</span>
                        </div>

                        <div className="shipping-options">
                            <h4>Shipping Method</h4>
                            <div className="shipping-option">
                                <input type="radio" id="standard" name="shipping"  unChecked/>
                                <label for="standard">
                                    <span>Standard Shipping</span>
                                    <span>Free</span>
                                    <small>5-7 business days</small>
                                </label>
                            </div>
                            <div className="shipping-option">
                                <input type="radio" id="express" name="shipping" />
                                <label for="express">
                                    <span>Express Shipping</span>
                                    <span>$9.99</span>
                                    <small>2-3 business days</small>
                                </label>
                            </div>
                        </div>

                        <div className="discount-code">
                            <h4>Discount Code</h4>
                            <div className="code-input">
                                <input type="text" id="discountCode" placeholder="Enter code"/>
                                <button id="applyCode">Apply</button>
                            </div>
                            <div id="discountMessage" className="discount-message"></div>
                        </div>

                        <button className="btn btn-checkout" id="checkoutBtn">
                            <i className="fas fa-lock"></i> Proceed to Checkout
                        </button>

                        <a href="/Products" className="btn-continue">
                            <i className="fas fa-arrow-left"></i> Continue Shopping
                        </a>

                        <div className="payment-methods">
                            <p>We accept:</p>
                            <div className="payment-icons">
                                <i className="fab fa-cc-visa"></i>
                                <i className="fab fa-cc-mastercard"></i>
                                <i className="fab fa-cc-amex"></i>
                                <i className="fab fa-cc-paypal"></i>
                                <i className="fab fa-apple-pay"></i>
                            </div>
                        </div>
                    </div>

                    <div className="security-info">
                        <div className="security-item">
                            <i className="fas fa-shield-alt"></i>
                            <div>
                                <h4>Secure Payment</h4>
                                <p>Your payment information is protected</p>
                            </div>
                        </div>
                        <div className="security-item">
                            <i className="fas fa-truck"></i>
                            <div>
                                <h4>Free Shipping</h4>
                                <p>On orders over $50</p>
                            </div>
                        </div>
                        <div className="security-item">
                            <i className="fas fa-undo"></i>
                            <div>
                                <h4>Easy Returns</h4>
                                <p>30-day return policy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <div className="container">
            <div className="footer-grid">
                <div className="footer-col">
                    <a href="/Home" className="footer-logo">VIRTUAL MALL</a>
                    <p>Your one-stop destination for quality products at affordable prices.</p>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/Home">Home</a></li>
                        <li><a href="/Products">Products</a></li>
                        <li><a href="/About">About Us</a></li>
                        <li><a href="/Contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Customer Service</h4>
                    <ul>
                        <li><a href="FAQ">FAQ</a></li>
                        <li><a href="Shipping">Shipping Policy</a></li>
                        <li><a href="Returns">Returns & Refunds</a></li>
                        <li><a href="Privacy">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Contact Info</h4>
                    <ul className="contact-info">
                        <li><i className="fas fa-map-marker-alt"></i> 123 Street, City, Country</li>
                        <li><i className="fas fa-phone"></i> +1 234 567 890</li>
                        <li><i className="fas fa-envelope"></i> info@myshop.com</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 VIRTUAL MALL. All rights reserved.</p>
            </div>
        </div>
    </footer>
        </>
    )
}
export default Cart;