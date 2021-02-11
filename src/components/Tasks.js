const tasks = [
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
]

const Tasks = () => {
    return (
        <>
          {tasks.map((task) => (<h3 key={task.id}>{task.text}; {task.day}</h3>))}  
        </>
    )
}

export default Tasks
