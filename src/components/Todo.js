import React from 'react';
import '../css/App.css';

function Todo({ todo, index, completeTodo, removeTodo }) {

  return (
    <div className="todo my-2 p-2">
      <span style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>{todo.text}</span>
      <div className="btn-group float-right" role="group" aria-label="Basic example">
        <button 
          type="button" 
          className="btn btn-sm btn-success mx-1"
          onClick={() => completeTodo(index)}
          style={{ visibility: todo.isCompleted ? "hidden" : "show" }}>
          Complete
        </button>
        <button 
          type="button" 
          className="btn btn-sm btn-danger mx-1"
          onClick={() => removeTodo(index)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default Todo;
