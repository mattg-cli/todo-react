import React from 'react';
import '../css/App.css';

function Todo({ todo, index, completeTodo, addTodo, deleteTodo }) {

  return (
    <div className={"todo my-2 p-2 " + (todo.isCompleted ? 'bg-secondary' : '')}>
      <span style={{ textDecoration: todo.isCompleted ? 'line-through' : ''}}>{todo.text}</span>
      <div className="btn-group float-right" role="group" aria-label="Basic example">
        <button 
          type="button" 
          className="btn btn-sm btn-success mx-1"
          onClick={() => completeTodo(index)}
          style={{ display: todo.isCompleted ? "none" : "block" }}>
          Complete
        </button>
        <button
          type="button" 
          className="btn btn-sm btn-success mx-1"
          onClick={
            () => {
              deleteTodo(todo);
              addTodo(todo.text);
            }
          }
          style={{ display: todo.isCompleted ? "block" : "none"}}>
            Add
        </button>
        <button 
          type="button" 
          className="btn btn-sm btn-danger mx-1"
          onClick={() => deleteTodo(todo)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
