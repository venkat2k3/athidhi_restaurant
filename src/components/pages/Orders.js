import React, { useEffect, useState } from 'react';
import './orders.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('cart')) || [];
    setOrders(savedOrders);
  }, []);

  const totalPrice = orders.reduce((total, order) => total + order.price, 0);

  const handlePlaceOrder = () => {
    localStorage.removeItem('cart');
    setOrders([]);
    alert(`With Amount ₹ ${totalPrice} Order has been Placed!`);
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
                {order.name} - ₹{order.price.toFixed(2)}
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
            <button onClick={handlePlaceOrder} className="place-order-button">
              Place Order
            </button>
          </div>
        </>
      ) : (
        <p>No selected orders!</p>
      )}
    </div>
  );
};

export default Orders;
