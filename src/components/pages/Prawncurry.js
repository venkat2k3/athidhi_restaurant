import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Items.css';

function Prawncurry() {
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
        style={{ fontSize: '10px', top: '80px' }}
      >
        &#8617;
      </button>

      <div className="box1">
        <img src="/images/Prawn curry 1.jpg" alt="Prawn curry" />
        <div className="content1">
          <h3>Prawn Curry</h3>
          <p>Prawn curry is a flavorful dish made with spiced prawns in a rich gravy.</p>
          <h4>₹259</h4>
          <input
            type="number"
            min="1"
            defaultValue="1"
            onChange={(e) => handleQuantityChange(e, 'Prawn curry')}
            style={{ width: '50px', marginRight: '10px' }}
          />
          <button className="btn1" onClick={() => handleOrderClick({ name: 'Prawn curry', price: 259 })}>Order</button>
        </div>
      </div><br/><br/>

      <div className="box2">
        <img src="/images/prawn fry 1.jpg" alt="Prawn fry" />
        <div className="content2">
          <h3>Prawn Fry</h3>
          <p>Prawn fry is a delicious dish made with prawns sautéed with spices and herbs.</p>
          <h4>₹239</h4>
          <input
            type="number"
            min="1"
            defaultValue="1"
            onChange={(e) => handleQuantityChange(e, 'Prawn fry')}
            style={{ width: '50px', marginRight: '10px' }}
          />
          <button className="btn1" onClick={() => handleOrderClick({ name: 'Prawn fry', price: 239 })}>Order</button>
        </div>
      </div><br/><br/>
    </div>
  );
}

export default Prawncurry;