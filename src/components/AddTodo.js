import React from 'react';
import { Form, FormControl } from 'react-bootstrap';
import '../css/App.css';

function AddTodo({ addTodo }) {
  const [value, setValue] = React.useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return; // if there is not a value, return early
    addTodo(value); // if there is a value, add the value
    setValue(""); // after the value is added, change the input back to empty
  }

  return (
    <Form
      onSubmit={handleSubmit}
    >
      <FormControl 
        type="text" 
        placeholder="Enter Todo Item..." 
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </Form>
  );
}

export default AddTodo;
