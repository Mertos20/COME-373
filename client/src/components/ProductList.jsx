import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList = ({ filter }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/data', {
          params: {
            category: filter, // Kategori parametresini gönderiyoruz
          },
        });
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Veri çekme hatası:', error);
      }
    };

    fetchProducts();
  }, [filter]);  // filter değiştiğinde ürünleri yeniden çek

  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
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
  );
};

export default ProductList;
