import { useState } from 'react';
import './TodoItem.css';

function TodoItem({ task, toggleTaskCompletion, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTask(task.id, newText); 
    setIsEditing(false);
  };

   return (
    <li className="todo-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="edit-input"
          />
          <button className="save-button" onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span
            className={`task-text ${task.completed ? 'completed' : ''}`}
            onClick={() => toggleTaskCompletion(task.id)}
          >
            {task.text}
          </span>
          <button className="edit-button" onClick={handleEdit}>Edit</button>
          <button className="delete-button" onClick={() => deleteTask(task.id)}>Delete</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
