import React from 'react';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import './css/App.css';

function App() {

  const [todos, setTodos] = React.useState([
    { 
      text: "Go to the Store.",
      isCompleted: false
    },
    { 
      text: "Wash Car.",
      isCompleted: false
    },
    { 
      text: "Clean Garage.",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="container">
      <h1 className="text-center">React</h1>
      <h3 className="text-center">Basic Todo Application</h3>
      <div className="content p-2">
        <div className="list pb-2">
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
        </div>
      </div>
      <AddTodo addTodo={addTodo} />
    </div>
  );
}

export default App;
