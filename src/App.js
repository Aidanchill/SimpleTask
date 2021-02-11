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

  return (
    <div className="container">
      <h1>{title}</h1>
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
