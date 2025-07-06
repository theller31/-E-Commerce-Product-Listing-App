import { useState } from 'react';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  const [products] = useState([
    { id: 1, name: 'Laptop', price: 999.99, description: 'A powerful laptop' },
    { id: 2, name: 'Headphones', price: 199.99, description: 'Noise-cancelling headphones' },
    { id: 3, name: 'Smartphone', price: 799.99, description: 'Latest model smartphone' },
    { id: 4, name: 'Keyboard', price: 49.99, description: 'Mechanical keyboard' }
  ]);

  return (
    <div className="App">
      <h1>🛍️ My E-Commerce Store</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;
