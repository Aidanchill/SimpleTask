import Header from './components/Header'
import Button from './components/Button'

function App({ title }) {
  return (
    <div className="container">
      <h1>{title}</h1>
      <Header />
    </div>
  );
}

export default App;
