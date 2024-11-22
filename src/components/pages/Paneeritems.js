import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Items.css';

function Paneeritems() {
  const handleBack = () => {
    window.history.back();
  };

  const [selectedOrders, setSelectedOrders] = useState([]);
  const [quantities, setQuantities] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('cart')) || [];
    setSelectedOrders(savedOrders);
  }, []);

  const handleOrderClick = (item) => {
    const quantity = quantities[item.name] || 1;
    const updatedOrders = [...selectedOrders, { ...item, quantity }];

    const existingOrderIndex = updatedOrders.findIndex(order => order.name === item.name);
    if (existingOrderIndex !== -1) {
      updatedOrders[existingOrderIndex].quantity += quantity;
    }

    setSelectedOrders(updatedOrders);
    localStorage.setItem('cart', JSON.stringify(updatedOrders));
    alert(`${item.name} (x${quantity}) has been selected for order!`);
  };

  const handleQuantityChange = (event, itemName) => {
    const value = event.target.value;
    if (value >= 1) {
      setQuantities({
        ...quantities,
        [itemName]: parseInt(value),
      });
    }
  };

  return (
    <div className="fulldiv">
      <button
        className="back-btn"
        onClick={handleBack}
        style={{ fontSize: '10px', top: '80px', position: 'sticky' }}
      >
        &#8617;
      </button>

      <div className="box1">
        <img src="/images/Shahi Paneer 1.jpg" alt="Shahi Paneer" />
        <div className="content1">
          <h3>Shahi Paneer</h3>
          <p>Shahi Paneer is made of rich, creamy paneer curry with nuts and spices.</p>
          <h4>₹229</h4>
          <input
            type="number"
            min="1"
            defaultValue="1"
            onChange={(e) => handleQuantityChange(e, 'Shahi Paneer')}
            style={{ width: '50px', marginRight: '10px' }}
          />
          <button className="btn1" onClick={() => handleOrderClick({ name: 'Shahi Paneer', price: 229 })}>Order</button>
        </div>
      </div><br/><br/>

      <div className="box2">
        <img src="/images/Panner butter masala 1.jpg" alt="Paneer Butter Masala" />
        <div className="content2">
          <h3>Paneer Butter Masala</h3>
          <p>Paneer Butter Masala is a creamy paneer in spiced butter and tomato sauce.</p>
          <h4>₹229</h4>
          <input
            type="number"
            min="1"
            defaultValue="1"
            onChange={(e) => handleQuantityChange(e, 'Paneer butter masala')}
            style={{ width: '50px', marginRight: '10px' }}
          />
          <button className="btn2" onClick={() => handleOrderClick({ name: 'Paneer butter masala', price: 229 })}>Order</button>
        </div>
      </div><br/><br/>

      <div className="box1">
        <img src="/images/paneer-curry.jpg" alt="Paneer Curry" />
        <div className="content1">
          <h3>Paneer Curry</h3>
          <p>Paneer Curry is made of spiced paneer in tomato-based gravy.</p>
          <h4>₹199</h4>
          <input
            type="number"
            min="1"
            defaultValue="1"
            onChange={(e) => handleQuantityChange(e, 'Paneer curry')}
            style={{ width: '50px', marginRight: '10px' }}
          />
          <button className="btn1" onClick={() => handleOrderClick({ name: 'Paneer curry', price: 199 })}>Order</button>
        </div>
      </div><br/><br/>

      <div className="box2">
        <img src="/images/Kadai Paneer 1.jpg" alt="Kadai Paneer" />
        <div className="content2">
          <h3>Kadai Paneer</h3>
          <p>Kadai Paneer is made of spicy paneer curry with yogurt and gram flour.</p>
          <h4>₹229</h4>
          <input
            type="number"
            min="1"
            defaultValue="1"
            onChange={(e) => handleQuantityChange(e, 'Kadai paneer')}
            style={{ width: '50px', marginRight: '10px' }}
          />
          <button className="btn2" onClick={() => handleOrderClick({ name: 'Kadai paneer', price: 229 })}>Order</button>
        </div>
      </div><br/><br/>
    </div>
  );
}

export default Paneeritems;