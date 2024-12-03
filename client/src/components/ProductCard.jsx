import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product_name, product_description, product_price, product_image, product_category }) => {
  return (
    <div className="product-card">
      <img
        className="product-card-image"
        src={product_image}
        alt={product_name}
      />
      <div className="product-card-content">
        <h3>{product_name}</h3>
        <p>{product_category}</p>
        <p>{product_description}</p>
        <p>{product_price} TL</p>
        <Link
          to={`/product/${product_name}`}
          state={{ product_name, product_description, product_price, product_image, product_category }}
          className="product-card-link"
        >
          Görüntüle
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
