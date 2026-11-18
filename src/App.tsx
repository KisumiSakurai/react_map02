import { useState } from 'react';
import heroImg from './assets/hero.png';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './App.css';

function App() {
  type Task = {
    id: number;
    title: string;
    done: boolean;
  };

  const initialTasks: Task[] = [
    { id: 1, title: '掃除', done: false },
    { id: 2, title: '洗濯', done: true },
    { id: 3, title: '買い物', done: false },
  ];

  const [tasks, setTasks] = useState(initialTasks);

  function toggleDone(id: Number) {
    const newList = tasks.map((task) => {
      if (id === task.id) {
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    });
    setTasks(newList);
  }

  return (
    <>
      <section>
        <ul>
          {tasks.map((task) => (
            <li key={task.id} onClick={() => toggleDone(task.id)}>
              {task.done ? '✅' : '⬜'} {task.title}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default App;
