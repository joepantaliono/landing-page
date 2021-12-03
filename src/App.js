import { Link } from 'react-router-dom';
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/contact">Projects</Link> |{" "}
        <Link to="/resume">Resume</Link>
      </nav>
      <Home />
    </div>
  );
}

export default App;
