import React, { useState } from 'react';
import './TodoList.css';
import TodoForm from '../TodoForm/TodoForm';
import TodoItem from '../TodoItem/TodoItem';


const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (title, description, tag, date) => {
    setTodos([...todos, { title, description, tag, date, completed: false }]);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const editTodo = (index, newTitle, newDescription, newTag, newDate) => {
    const newTodos = [...todos];
    newTodos[index] = { ...newTodos[index], title: newTitle, description: newDescription, tag: newTag, date: newDate };
    setTodos(newTodos);
  };

  const toggleCompletion = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div className="todo-list-container">
      
      
      <div className="todo-list">
        <h1>Todo List</h1>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            index={index}
            todo={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleCompletion={toggleCompletion}
          />
        ))}
      </div>

      <TodoForm addTodo={addTodo} />
    </div>
  );
};

export default TodoList;
