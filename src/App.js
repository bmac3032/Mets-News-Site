import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Nascar Project</h1>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Router>
    </div>
  );
}

export default App;
