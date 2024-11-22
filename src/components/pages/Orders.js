import React, { useEffect, useState } from 'react';
import './orders.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [orderConfirmation, setOrderConfirmation] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('cart')) || [];
    setOrders(savedOrders);

    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token);
  }, []);

  const totalPrice = orders.reduce((total, order) => total + order.price * order.quantity, 0);

  const handlePlaceOrder = () => {
    if (!isLoggedIn) {
      alert("You must be logged in to place an order.");
      return;
    }

    const confirmationMessage = `Your order has been placed with total amount ₹${totalPrice.toFixed(2)}.\nDetails:\n${orders
      .map(order => `${order.name} (x${order.quantity}) - ₹${(order.price * order.quantity).toFixed(2)}`)
      .join('\n')}`;
  
    localStorage.removeItem('cart');
    setOrders([]);
    setOrderConfirmation(confirmationMessage);
  };
  
  const handleDeleteOrder = (indexToDelete) => {
    const updatedOrders = orders.filter((_, index) => index !== indexToDelete);
    setOrders(updatedOrders);
    localStorage.setItem('cart', JSON.stringify(updatedOrders));
  };

  return (
    <div className="orders-container">
      <h1>Your Selected Items</h1>
      {orders.length > 0 ? (
        <>
          <ul>
            {orders.map((order, index) => (
              <li key={index}>
                {order.name} ({order.quantity-1}) - ₹{(order.price *(order.quantity -1)).toFixed(2)}
                <button
                  onClick={() => handleDeleteOrder(index)}
                  className="delete-button">
                    x
                </button>
              </li>
            ))}
          </ul>
          <div className="total-section">
            <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
            <button 
              onClick={handlePlaceOrder} 
              className="place-order-button" 
              disabled={!isLoggedIn} 
            >
              Place Order
            </button>
          </div>
          {!isLoggedIn && <p className="login-message">You need to log in to place an order.</p>}
        </>
      ) : (
        <p>No selected orders!</p>
      )}

      {orderConfirmation && (
        <div className="order-confirmation">
          <h2>Order Confirmed</h2>
          <p>{orderConfirmation}</p>
        </div>
      )}
    </div>
  );
};

export default Orders;