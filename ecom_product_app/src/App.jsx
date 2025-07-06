import React, { useState } from 'react';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  const [products] = useState([
    { id: 1, name: 'Phone', price: '$699', description: 'A smart phone with OLED display' },
    { id: 2, name: 'Laptop', price: '$999', description: 'A lightweight laptop with great performance' },
    { id: 3, name: 'Headphones', price: '$199', description: 'Noise cancelling over-ear headphones' }
  ]);

  return (
    <div className="app">
      <h1>Product Listing</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;
