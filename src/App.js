import React from 'react';
import Todo from './components/Todo';
import './css/App.css';

function App() {

  const [todos, setTodos] = React.useState([
    { text: "Go to the Store."},
    { text: "Wash Car."},
    { text: "Clean Garage."}
  ]);

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            />
        ))}
      </div>
    </div>
  );
}

export default App;
