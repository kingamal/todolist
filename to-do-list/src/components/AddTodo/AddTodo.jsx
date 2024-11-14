import { useState } from 'react';
import './AddTodo.css';

function AddTodo({ addTask }) {
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = () => {
    if (inputValue.trim()) {
      addTask(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        className="add-todo-input"
        placeholder="Enter a new task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="add-todo-button" onClick={handleAddTask}>Add</button>
    </div>
  );
}

export default AddTodo;
