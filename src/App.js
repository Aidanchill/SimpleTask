import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

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


  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  return (
    <div className="container">
      <h1>{title}</h1>
      <Header />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask}/>) : 'No Current Tasks'}
    </div>
  );
}

export default App;
