import React, { useState } from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, index, deleteTodo, editTodo, toggleCompletion }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);
  const [newDescription, setNewDescription] = useState(todo.description);
  const [newTag, setNewTag] = useState(todo.tag);
  const [newDate, setNewDate] = useState(todo.date);

  const handleEdit = () => {
    editTodo(index, newTitle, newDescription, newTag, newDate);
    setIsEditing(false);
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <div className='edit'>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <textarea
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          ></textarea>
          <select
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
          >
            <option value="office">Office</option>
            <option value="personal">Personal</option>
            <option value="educational">Educational</option>
          </select>
          <input
            type="date"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </div>
      ) : (
        <div className='details'>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <p><strong>Lists:</strong> {todo.tag}</p>
          <p><strong>Date:</strong> {todo.date}</p>
          <button onClick={() => toggleCompletion(index)}>
            {todo.completed ? 'Mark as Incomplete' : 'Mark as Completed'}
          </button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
