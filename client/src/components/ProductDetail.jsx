import React from 'react';
import { useLocation } from 'react-router-dom';
import './ProductDetail.css'; 

const ProductDetail = () => {
  const location = useLocation();
  const { product_name, product_description, product_price, product_image, product_category } = location.state;

  return (
    <div className="product-detail-container">
      
      <div className="image-container">
        <img src={product_image} alt={product_name} />
      </div>

      
      <div className="details-container">
        <div className="detail-item">
          <span className="detail-title">Name:</span>
          <span className="detail-content">{product_name}</span>
        </div>
        <div className="detail-item">
          <span className="detail-title">Category:</span>
          <span className="detail-content">{product_category}</span>
        </div>
        <div className="detail-item">
          <span className="detail-title">Description:</span>
          <span className="detail-content">{product_description}</span>
        </div>
        <div className="detail-item">
          <span className="detail-title">Price:</span>
          <span className="detail-content">{product_price} TL</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
