import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Items.css';

function Curdrice() {
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
      <button className="back-btn" onClick={handleBack} style={{ fontSize: '10px', top: '80px', position: 'sticky' }}>
        &#8617;
      </button>

      <div className="box1">
        <img src="/images/Curd rice 1.jpg" alt="Curd Rice" />
        <div className="content1">
          <h3>Curd Rice</h3>
          <p>Also known as Yogurt Rice or Thayir Sadam, Curd Rice is a popular South Indian dish.</p>
          <h4>₹149</h4>
          <input
            type="number"
            min="1"
            defaultValue="1"
            onChange={(e) => handleQuantityChange(e, 'Curd Rice')}
            style={{ width: '50px', marginRight: '10px' }}
          />
          <button className="btn1" onClick={() => handleOrderClick({ name: 'Curd Rice', price: 149 })}>
            Order
          </button>
        </div>
      </div>
      <br />
      <br />

      <div className="box2">
        <img src="/images/CURD.jpg" alt="Curd" />
        <div className="content2">
          <h3>Curd</h3>
          <p>CURD is a traditional dairy product made by fermenting milk with lactic acid bacteria, resulting in a creamy yogurt-like substance rich in probiotics.</p>
          <h4>₹49</h4>
          <input
            type="number"
            min="1"
            defaultValue="1"
            onChange={(e) => handleQuantityChange(e, 'Curd')}
            style={{ width: '50px', marginRight: '10px' }}
          />
          <button className="btn2" onClick={() => handleOrderClick({ name: 'Curd', price: 49 })}>
            Order
          </button>
        </div>
      </div>

      <br />
      <br />
      
    </div>
  );
}

export default Curdrice;