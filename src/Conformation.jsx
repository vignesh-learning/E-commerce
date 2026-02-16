import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./order.css";

function Conformation() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  const [shipping, setShipping] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: ""
  });

  const handleChange = (e) => {
    setShipping({ ...shipping, [e.target.name]: e.target.value });
  };

  const saveShipping = () => {
    localStorage.setItem("shippingInfo", JSON.stringify(shipping));
    alert("Shipping information saved successfully!");
  };

  return (
    <>
     <nav className="navbar">
        <div className="container">
          <a href="/Home" className="logo">
            <img src="/logo.png" alt="MyShop Logo" />
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
    <div className="order-page">

      <h1 className="page-title">Order Confirmation</h1>

      <div className="main-layout">

        <div className="shipping-section">
          <h2>Shipping Information</h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={shipping.name}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={shipping.phone}
            onChange={handleChange}
          />

          <textarea
            name="address"
            placeholder="Full Address"
            value={shipping.address}
            onChange={handleChange}
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={shipping.city}
            onChange={handleChange}
          />

          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={shipping.pincode}
            onChange={handleChange}
          />

          <button className="save-btn" onClick={saveShipping}>
            Save Details
          </button>
        </div>

        <div className="orders-section">
          <h2>Your Orders</h2>

          {orders.length === 0 ? (
            <p className="no-orders">No orders yet</p>
          ) : (
            <div className="order-grid">
              {orders.map((order, index) => (
                <div className="order-card" key={index}>
                  <img src={order.image} alt={order.name} />

                  <div className="order-info">
                    <h3>{order.name}</h3>

                    <p>Price: ₹{order.price}</p>
                    <p>Quantity: {order.quantity}</p>
                    <p>Ordered On: {order.orderDate}</p>

                    <span className="status">{order.status}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

      <button
        className="continue-btn"
        onClick={() => navigate("/Products")}
      >
        Continue Shopping
      </button>

    </div>
    </>
  );
}

export default Conformation;
