import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ setFilter }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const location = useLocation();  // Şu anki sayfayı alıyoruz

  useEffect(() => {
    fetch('http://localhost:5001/api/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  const handleCategoryChange = (event) => {
    const selected = event.target.value;
    setSelectedCategory(selected);
    setFilter(selected);  // Filtreyi navbar'dan güncelliyoruz
  };

  // Anasayfada olup olmadığımızı kontrol ediyoruz
  const isHomePage = location.pathname === '/';

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a  className=" navbar-text "href="/" > Zümrüt Doğal Taş</a>
       
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/" className="nav-link">Anasayfa</Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">Hakkımızda</Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">İletişim</Link>
        </li>
        {isHomePage && (  // Sadece anasayfada dropdown menüsünü gösteriyoruz
          <li className="navbar-dropdown">
            <select
              onChange={handleCategoryChange}
              value={selectedCategory}
              className="navbar-dropdown-select"
            >
              <option value="">Tüm Kategoriler</option>
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
