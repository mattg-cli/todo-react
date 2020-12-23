import React from 'react';
import '../css/App.css';

function Todo({ todo, index, completeTodo }) {

  const handleClick = e => {
    e.preventDefault();
    completeTodo(index);
  }

  return (
    <div className="todo mb-2 p-2">
      <span style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>({index + 1}) {todo.text}</span>
      <button 
        className="btn btn-sm bg-success text-white float-right"
        onClick={handleClick}
        style={{ visibility: todo.isCompleted ? "hidden" : "show" }}
      >
        Done
      </button>
    </div>
  );
}

export default Todo;
