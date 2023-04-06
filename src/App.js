import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <Header />
      <Form setTasks={setTasks} />
      <ToDoList tasks={tasks} />
    </div>
  );
}

export default App;

