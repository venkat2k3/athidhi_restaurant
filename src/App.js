import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/pages/Home';
import Orders from './components/pages/Orders';
import Contact from './components/pages/Contact';
import NavBar from './components/inc/NavBar';
import Menu from './components/pages/Menu';
import Login from './components/pages/index';
import Biryani from './components/pages/Biryani';
import Chickencurry from './components/pages/Chickencurry';
import Mutton from './components/pages/Muttoncurry';
import Roti from './components/pages/Roti';
import Fish from './components/pages/Fishcurry';
import Nonvegstarters from './components/pages/Nonvegstarters.js';
import Rices from './components/pages/Rices';
import Paneer from './components/pages/Paneeritems';
import FriedRice from './components/pages/Friedrice';
import VegStarters from './components/pages/Vegstarters.js';
import Milletlump from './components/pages/Milletlump';
import CurdRice from './components/pages/Curdrice.js';
import './App.css';

function Content() {
  const location = useLocation();
  const noNavBarRoutes = ['/'];

  return (
    <div>
      {!noNavBarRoutes.includes(location.pathname) && <NavBar />}
      <div className="main-content">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/" element={<Login />} />
          <Route path="/Biryani" element={<Biryani />} />
          <Route path="/Chickencurry" element={<Chickencurry />} />
          <Route path="/Muttoncurry" element={<Mutton />} />
          <Route path="/Roti" element={<Roti />} />
          <Route path="/Fishcurry" element={<Fish />} />
          <Route path="/Nonvegstarters" element={<Nonvegstarters />} />
          <Route path="/Rices" element={<Rices />} />
          <Route path="/Paneeritems" element={<Paneer />} />
          <Route path="/Friedrice" element={<FriedRice />} />
          <Route path="/Veg-starters" element={<VegStarters />} />
          <Route path="/Milletlump" element={<Milletlump />} />
          <Route path="/Curdrice" element={<CurdRice />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Content />
    </Router>
  );
}

export default App;
