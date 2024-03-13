import React, { useState } from 'react';

const AddTodo = () => {
  const [input, setInput] = useState('');

  const handler = async (e) => {
    e.preventDefault();
    // ... rest of your code
  };

  return (
    <div>
      <h1>add item</h1>
      <form onSubmit={handler}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default AddTodo;