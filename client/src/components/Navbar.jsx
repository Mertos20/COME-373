import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ setFilter }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const location = useLocation(); 

  useEffect(() => {
    fetch('http://localhost:5001/api/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  const handleCategoryChange = (event) => {
    const selected = event.target.value;
    setSelectedCategory(selected);
    setFilter(selected);  
  };

  
  const isHomePage = location.pathname === '/';

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a  className=" navbar-text "href="/" > Zümrüt Doğaltaş</a>
       
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>
        {isHomePage && (  
          <li className="navbar-dropdown">
            <select
              onChange={handleCategoryChange}
              value={selectedCategory}
              className="navbar-dropdown-select"
            >
              <option value="">All</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
