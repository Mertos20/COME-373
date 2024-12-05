import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import About from './pages/About';
import './App.css';

function App() {
  const [filter, setFilter] = useState('');  

  return (
    <Router>
      <Navbar setFilter={setFilter} />  
      <div className="App">
        <Routes>
          <Route 
            path="/" 
            element={<ProductList filter={filter} />}  
          />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
