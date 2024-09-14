import React, { useState } from "react";
import "./TodoList.css";
import TodoForm from "../TodoForm/TodoForm";
import TodoItem from "../TodoItem/TodoItem";
import { MdDoubleArrow } from "react-icons/md";
import { FaList } from "react-icons/fa";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { FaGreaterThan } from "react-icons/fa";

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
    newTodos[index] = {
      ...newTodos[index],
      title: newTitle,
      description: newDescription,
      tag: newTag,
      date: newDate,
    };
    setTodos(newTodos);
  };

  const toggleCompletion = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div className="todo-list-container">
      <div className="todo-left">
        <h1>Menu</h1>

        <div className="task">
          <p>Task</p>
          <ul>
            <li>
              <MdDoubleArrow className="icon1" />
              Upcoming
            </li>
            <li>
              <FaList className="icon1" />
              Today
            </li>
            <li>
              <MdOutlineStickyNote2 className="icon1" />
              Stickl Wall
            </li>
          </ul>
        </div>

        <div className="lists">
          <p>Lists</p>
          <ul>
            <li>
              <div />
              <FaGreaterThan className="icon2" />
              Personal
            </li>
            <li>
              <div />
              <FaGreaterThan className="icon2" />
              Office
            </li>
            <li>
              <div />
              <FaGreaterThan className="icon2" />
              Educational
            </li>
          </ul>
        </div>

        <div className="tag">
          <p>Tags</p>
          <ul>
            <li>Tag1</li>
            <li>Tag2</li>
            <li>Tag3</li>
          </ul>
        </div>
      </div>

      <div className="todo-center">
        <h1>Today</h1>
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

      <div className="todo-right">
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
};

export default TodoList;
