import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList = ({ filter }) => {
  const [products, setProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/data');
        const allProducts = response.data;

        
        const filteredPopularProducts = allProducts.filter(product => product.stockquantity < 25);
        setPopularProducts(filteredPopularProducts);

       
        const filteredProducts = allProducts.filter(
          product => product.stockquantity > 0 && (filter ? product.category_name === filter : true)
        );
        setProducts(filteredProducts);

        setLoading(false);
      } catch (error) {
        console.error('Veri çekme hatası:', error);
      }
    };

    fetchProducts();
  }, [filter]);

  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <div className="product-list">
      
      <div className="all-products-section">
        <h1 className="product-title">PRODUCTS</h1>
        <div className="all-products-grid">
          {products.map(product => (
            <ProductCard
              key={product.product_name}
              product_name={product.product_name}
              product_description={product.description}
              product_price={product.price}
              product_image={product.imageurl}
              product_category={product.category_name}
            />
          ))}
        </div>
      </div>

      {popularProducts.length > 0 && (
        <div className="popular-products-section">
          <h1 className="product-subtitle">POPULAR PRODUCTS</h1>
          <div className="popular-products-grid">
            {popularProducts.map(product => (
              <ProductCard
                key={product.product_name}
                product_name={product.product_name}
                product_description={product.description}
                product_price={product.price}
                product_image={product.imageurl}
                product_category={product.category_name}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
