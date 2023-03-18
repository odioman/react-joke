import logo from './logo.svg';
import './App.css';
import Joke from './components/Joke.js';
import jokesData from './components/jokesData.js';

function App() {
  const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)

  return (
    <div>
      {jokeComponents}
    </div>
  );
}

export default App;
