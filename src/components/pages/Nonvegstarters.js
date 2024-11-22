import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Items.css';

function Nonvegstarters() {
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
        <img src="/images/Tandoori chicken 1.jpg" alt="Tandoori chicken" />
        <div className="content1">
          <h3>Tandoori Chicken</h3>
          <p>Marinated chicken roasted in a clay oven (tandoor) with yogurt and spices.</p>
          <h4>₹189</h4>
          <input
            type="number"
            min="1"
            defaultValue="1"
            onChange={(e) => handleQuantityChange(e, 'Tandoori chicken')}
            style={{ width: '50px', marginRight: '10px' }}
          />
          <button className="btn1" onClick={() => handleOrderClick({ name: 'Tandoori chicken', price: 189 })}>Order</button>
        </div>
      </div><br/><br/>

      <div className="box2">
        <img src="/images/prawn fry 1.jpg" alt="Prawn fry" />
        <div className="content2">
          <h3>Prawn Fry</h3>
          <p>Shrimp sautéed with garlic, ginger, and spices, often served with lemon.</p>
          <h4>₹239</h4>
          <input
            type="number"
            min="1"
            defaultValue="1"
            onChange={(e) => handleQuantityChange(e, 'Prawn fry')}
            style={{ width: '50px', marginRight: '10px' }}
          />
          <button className="btn2" onClick={() => handleOrderClick({ name: 'Prawn fry', price: 239 })}>Order</button>
        </div>
      </div><br/><br/>

      <div className="box1">
        <img src="/images/mutton fry 1.jpg" alt="Mutton fry" />
        <div className="content1">
          <h3>Mutton Fry</h3>
          <p>Tender mutton cooked with onions, tomatoes, and spices, often served with rice.</p>
          <h4>₹239</h4>
          <input
            type="number"
            min="1"
            defaultValue="1"
            onChange={(e) => handleQuantityChange(e, 'Mutton fry')}
            style={{ width: '50px', marginRight: '10px' }}
          />
          <button className="btn1" onClick={() => handleOrderClick({ name: 'Mutton fry', price: 239 })}>Order</button>
        </div>
      </div><br/><br/>

      <div className="box2">
        <img src="/images/Fish fry 1.jpg" alt="Fish fry" />
        <div className="content2">
          <h3>Fish Fry</h3>
          <p>Crispy fried fish coated with spices, herbs, and lemon juice.</p>
          <h4>₹229</h4>
          <input
            type="number"
            min="1"
            defaultValue="1"
            onChange={(e) => handleQuantityChange(e, 'Fish fry')}
            style={{ width: '50px', marginRight: '10px' }}
          />
          <button className="btn1" onClick={() => handleOrderClick({ name: 'Fish fry', price: 229 })}>Order</button>
        </div>
      </div><br/><br/>

      <div className="box1">
        <img src="/images/Chicken tikka 1.jpg" alt="Chicken tikka" />
        <div className="content1">
          <h3>Chicken Tikka</h3>
          <p>Marinated chicken grilled or baked with yogurt, spices, and herbs.</p>
          <h4>₹199</h4>
          <input
            type="number"
            min="1"
            defaultValue="1"
            onChange={(e) => handleQuantityChange(e, 'Chicken tikka')}
            style={{ width: '50px', marginRight: '10px' }}
          />
          <button className="btn1" onClick={() => handleOrderClick({ name: 'Chicken tikka', price: 199 })}>Order</button>
        </div>
      </div><br/><br/>

      <div className="box2">
        <img src="/images/Chicken popcorn 1.jpg" alt="Chicken popcorn" />
        <div className="content2">
          <h3>Chicken Popcorn</h3>
          <p>Crispy fried chicken bites tossed in spicy sauce and herbs.</p>
          <h4>₹199</h4>
          <input
            type="number"
            min="1"
            defaultValue="1"
            onChange={(e) => handleQuantityChange(e, 'Chicken popcorn')}
            style={{ width: '50px', marginRight: '10px' }}
          />
          <button className="btn1" onClick={() => handleOrderClick({ name: 'Chicken popcorn', price: 199 })}>Order</button>
        </div>
      </div><br/><br/>

      <div className="box1">
        <img src="/images/Chicken 65 1.jpg" alt="Chicken 65" />
        <div className="content1">
          <h3>Chicken 65</h3>
          <p>It is a spicy, deep-fried chicken recipe that has gained widespread acclaim across the country.</p>
          <h4>₹239</h4>
          <input
            type="number"
            min="1"
            defaultValue="1"
            onChange={(e) => handleQuantityChange(e, 'Chicken 65')}
            style={{ width: '50px', marginRight: '10px' }}
          />
          <button className="btn1" onClick={() => handleOrderClick({ name: 'Chicken 65', price: 239 })}>Order</button>
        </div>
      </div><br/><br/>
    </div>
  );
}

export default Nonvegstarters;