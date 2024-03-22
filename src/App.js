import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg'; // Ensure you have this logo in your src folder

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!task) return; 
    setTasks([...tasks, { name: task, done: false }]);
    setTask(''); 
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input
          type="text"
          className="inputTask"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button className="addButton" onClick={addTask}>Add Task</button>
      </header>
      <ul className="taskList">
        {tasks.map((task, index) => (
          <li className="taskItem" key={index}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(index)}
            />
            <span className={task.done ? 'done' : ''}>{task.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
