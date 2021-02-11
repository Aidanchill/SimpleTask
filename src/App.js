import Header from './components/Header'
import Tasks from './components/Tasks'

function App({ title, text }) {
  return (
    <div className="container">
      <h1>{title}</h1>
      <Header />
      <Tasks />
    </div>
  );
}

export default App;
