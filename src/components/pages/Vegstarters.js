import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Items.css';

function Vegstarters() {
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
        <img src="/images/Panner tikka 1.jpg" alt="Paneer Tikka" />
        <div className="content1">
          <h3>Paneer Tikka</h3>
          <p>Paneer Tikka is marinated paneer grilled to perfection.</p>
          <h4>₹139</h4>
          <input
            type="number"
            min="1"
            defaultValue="1"
            onChange={(e) => handleQuantityChange(e, 'Paneer Tikka')}
            style={{ width: '50px', marginRight: '10px' }}
          />
          <button className="btn1" onClick={() => handleOrderClick({ name: 'Paneer Tikka', price: 139 })}>Order</button>
        </div>
      </div><br/><br/>

      <div className="box2">
        <img src="/images/Paneer Tikka Masala 1.jpg" alt="Paneer Tikka Masala" />
        <div className="content2">
          <h3>Paneer Tikka Masala</h3>
          <p>Paneer Tikka Masala is a creamy tomato-based curry with grilled paneer.</p>
          <h4>₹149</h4>
          <input
            type="number"
            min="1"
            defaultValue="1"
            onChange={(e) => handleQuantityChange(e, 'Paneer Tikka Masala')}
            style={{ width: '50px', marginRight: '10px' }}
          />
          <button className="btn1" onClick={() => handleOrderClick({ name: 'Paneer Tikka Masala', price: 149 })}>Order</button>
        </div>
      </div><br/><br/>

      <div className="box1">
        <img src="/images/Paneer 65 1.jpg" alt="Paneer 65" />
        <div className="content1">
          <h3>Paneer 65</h3>
          <p>Paneer 65 is a spicy paneer stir-fry with herbs and chili peppers.</p>
          <h4>₹149</h4>
          <input
            type="number"
            min="1"
            defaultValue="1"
            onChange={(e) => handleQuantityChange(e, 'Paneer 65')}
            style={{ width: '50px', marginRight: '10px' }}
          />
          <button className="btn1" onClick={() => handleOrderClick({ name: 'Paneer 65', price: 149 })}>Order</button>
        </div>
      </div><br/><br/>

      <div className="box2">
        <img src="/images/gobi-manchurian.webp" alt="Gobi Manchurian" />
        <div className="content2">
          <h3>Gobi Manchurian</h3>
          <p>Gobi Manchurian is crispy cauliflower fritters in spicy Manchurian sauce.</p>
          <h4>₹159</h4>
          <input
            type="number"
            min="1"
            defaultValue="1"
            onChange={(e) => handleQuantityChange(e, 'Gobi Manchurian')}
            style={{ width: '50px', marginRight: '10px' }}
          />
          <button className="btn1" onClick={() => handleOrderClick({ name: 'Gobi Manchurian', price: 159 })}>Order</button>
        </div>
      </div><br/><br/>
    </div>
  );
}

export default Vegstarters;