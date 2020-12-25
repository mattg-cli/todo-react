import React from 'react';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import './css/App.css';

function App() {

  const [todos, setTodos] = React.useState([
    { text: "Go to the Store.", isCompleted: false },
    { text: "Wash Car.", isCompleted: false },
    { text: "Clean Garage.", isCompleted: false }
  ]);

  const [completedTodos, setCompletedTodos] = React.useState([]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    completedTodos.push(newTodos[index]);
    setCompletedTodos(completedTodos);
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  const deleteTodo = todo => {
    if (todo.isCompleted) {
      const newCompletedTodos = [...completedTodos];
      newCompletedTodos.splice(todo, 1);
      setCompletedTodos(newCompletedTodos);
    } else {
      const newTodos = [...todos];
      newTodos.splice(todo, 1);
      setTodos(newTodos);
    }
  }

  return (
    <div className="container">
      <h1 className="text-center">React</h1>
      <h3 className="text-center">Basic Todo Application</h3>
      <AddTodo addTodo={addTodo} />
      <div className="content">
        {
          todos.length <= 0 &&
          <div className="todo bg-dark my-2 p-2">
            <span className="text-white">You've finished your list! Great job!</span>
          </div>
        }
        {
          todos.length > 0 &&
          <div className="list pb-2">
            {todos.map((todo, index) => (
              <Todo
                key={index}
                index={index}
                todo={todo}
                completeTodo={completeTodo}
                deleteTodo={deleteTodo}
              />
            ))}
          </div>
        }
        {
          completedTodos.length > 0 &&
          <div className="list pb-2">
            <h3>Completed</h3>
            {completedTodos.map((cTodo, index) => (
              <Todo
                key={index}
                index={index}
                todo={cTodo}
                completeTodo={completeTodo}
                addTodo={addTodo}
                deleteTodo={deleteTodo}
              />
            ))}
          </div> 
        }
      </div>
    </div>
  );
}

export default App;
