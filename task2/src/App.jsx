import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!task.trim()) return;

    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <div className="todo-container">
        <div className="header">
          <h1>🌸 Be Productive 🌸</h1>
          <p>Small steps every day lead to big changes</p>
        </div>

        <div className="todo-card">
          <h2>Today's Tasks 💖</h2>

          <div className="input-section">
            <input
              type="text"
              placeholder="Add a task..."
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={addTask}>Add ✨</button>
          </div>

          <div className="counter">
            🌷 Total Tasks: <span>{tasks.length}</span>
          </div>

          <ul className="task-list">
            {tasks.map((item, index) => (
              <li key={index}>
                <span>💗 {item}</span>
                <button
                  className="delete-btn"
                  onClick={() => deleteTask(index)}
                >
                 delete ❌
                </button>
              </li>
            ))}
          </ul>
        </div>

        <footer>
          <p>💕 Stay focused and the results will follow 💕</p>
        </footer>
      </div>
    </div>
  );
}

export default App;