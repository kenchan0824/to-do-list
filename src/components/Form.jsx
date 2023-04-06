import { useState } from "react";

const Form = ({setTasks}) => {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setTasks((tasks) => {
      return [...tasks, newTask];
    });
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        id='newTask'
        value={newTask}
        onChange={(event) => {setNewTask(event.target.value)}}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;