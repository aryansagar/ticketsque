import React, { useState } from 'react';

const App = () => {
  const initialItems = [
    { id: 1, text: 'book', checked: false },
    { id: 2, text: 'pen', checked: false },
    { id: 3, text: 'laptop', checked: false },
    // Add more items as needed
  ];

  const [items, setItems] = useState(initialItems);

  const handleCheckboxChange = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleSelectAll = () => {
    setItems((prevItems) =>
      prevItems.map((item) => ({ ...item, checked: true }))
    );
  };

  const handleDeselectAll = () => {
    setItems((prevItems) =>
      prevItems.map((item) => ({ ...item, checked: false }))
    );
  };

  return (
    <div>
      <h1>Checkbox List</h1>
      <button onClick={handleSelectAll}>Select All</button>
      <button onClick={handleDeselectAll}>Deselect All</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheckboxChange(item.id)}
              />
              {item.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
