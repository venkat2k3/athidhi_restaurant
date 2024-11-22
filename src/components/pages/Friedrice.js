import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Items.css';

function Friedrice() {
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
        <img src="/images/veg-friedrice.jpg" alt="Veg Fried Rice" />
        <div className="content1">
          <h3>Veg Fried Rice</h3>
          <p>Veg Fried Rice is mixed vegetables and spices with cooked rice.</p>
          <h4>₹149</h4>
          <input
            type="number"
            min="1"
            defaultValue="1"
            onChange={(e) => handleQuantityChange(e, 'Veg Fried Rice')}
            style={{ width: '50px', marginRight: '10px' }}
          />
          <button className="btn1" onClick={() => handleOrderClick({ name: 'Veg Fried Rice', price: 149 })}>Order</button>
        </div>
      </div><br/><br/>

      <div className="box2">
        <img src="/images/paneer-friedrice.jpg" alt="Paneer Fried Rice" />
        <div className="content2">
          <h3>Paneer Fried Rice</h3>
          <p>Paneer Fried Rice is a mix of paneer, vegetables, and spices mixed with rice.</p>
          <h4>₹179</h4>
          <input
            type="number"
            min="1"
            defaultValue="1"
            onChange={(e) => handleQuantityChange(e, 'Paneer Fried Rice')}
            style={{ width: '50px', marginRight: '10px' }}
          />
          <button className="btn1" onClick={() => handleOrderClick({ name: 'Paneer Fried Rice', price: 179 })}>Order</button>
        </div>
      </div><br/><br/>

      <div className="box1">
        <img src="/images/chicken-friedrice.jpg" alt="Chicken Fried Rice" />
        <div className="content1">
          <h3>Chicken Fried Rice</h3>
          <p>Chicken Fried Rice is cooked chicken, vegetables, and spices mixed with rice.</p>
          <h4>₹199</h4>
          <input
            type="number"
            min="1"
            defaultValue="1"
            onChange={(e) => handleQuantityChange(e, 'Chicken Fried Rice')}
            style={{ width: '50px', marginRight: '10px' }}
          />
          <button className="btn1" onClick={() => handleOrderClick({ name: 'Chicken Fried Rice', price: 199 })}>Order</button>
        </div>
      </div><br/><br/>

      <div className="box2">
        <img src="/images/Egg-friedrice.jpg" alt="Egg Fried Rice" />
        <div className="content2">
          <h3>Egg Fried Rice</h3>
          <p>Egg Fried Rice is scrambled eggs, vegetables, and spices mixed with rice.</p>
          <h4>₹169</h4>
          <input
            type="number"
            min="1"
            defaultValue="1"
            onChange={(e) => handleQuantityChange(e, 'Egg Fried Rice')}
            style={{ width: '50px', marginRight: '10px' }}
          />
          <button className="btn1" onClick={() => handleOrderClick({ name: 'Egg Fried Rice', price: 169 })}>Order</button>
        </div>
      </div><br/><br/>
    </div>
  );
}

export default Friedrice;