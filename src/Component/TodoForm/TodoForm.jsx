import React, { useState } from 'react';
import './TodoForm.css';

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tag, setTag] = useState('office');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description && tag && date) {
      addTodo(title, description, tag, date);
      setTitle('');
      setDescription('');
      setTag('');
      setDate('');
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <h1>Task:</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>

      <div className='list'>
       <p>List</p>
      <select
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        required
      >
        <option value="office">Office</option>
        <option value="personal">Personal</option>
        <option value="educational">Educational</option>
      </select>
     </div>

       <div className='date'>
        <p>Date</p>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
       </div>
      
      <button type="submit">Add To do</button>
    </form>
  );
};

export default TodoForm;
