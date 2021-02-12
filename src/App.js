import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App({ title, text }) {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 12th, 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Get hotdogs for BBQ',
        day: 'July 3rd, 11:30am',
        reminder: true,
    },
    {
        id: 3,
        text: 'Earn a billion dollars',
        day: 'Yesterday',
        reminder: false,
    }
])

// Add task
const addTask = (task) => {
  console.log(task)
}

// Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

// Toggle the reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <h1>{title}</h1>
      <Header />
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : 'No Current Tasks'}
    </div>
  );
}

export default App;
