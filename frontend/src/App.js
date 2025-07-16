import './App.css';
import React, { useState, useEffect } from 'react';
import { getFoodItems, addFoodItem } from './api';

function App() {
  const [foodItems, setFoodItems] = useState([]);
  const [newFoodItem, setNewFoodItem] = useState('');

  useEffect(() => {
    const fetchFoodItems = async () => {
      const items = await getFoodItems();
      setFoodItems(items);
    };
    fetchFoodItems();
  }, []);

  const handleAddFoodItem = async () => {
    if (newFoodItem.trim() !== '') {
      const newItem = await addFoodItem(newFoodItem);
      setFoodItems([...foodItems, newItem]);
      setNewFoodItem('');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lunch Sheet</h1>
      </header>
      <main>
        <h2>Food Items</h2>
        <ul>
          {foodItems.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        <input
          type="text"
          value={newFoodItem}
          onChange={(e) => setNewFoodItem(e.target.value)}
        />
        <button onClick={handleAddFoodItem}>Add Food Item</button>
      </main>
      <footer>
        <p>&copy; 2024 My Company</p>
      </footer>
    </div>
  );
}

export default App;
