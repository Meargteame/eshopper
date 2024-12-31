import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products from the backend
        axios.get('http://localhost:5000/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div>
            <h1>Simple E-commerce App</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        <p>{product.price} USD</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
