import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Players from "./Components/Players";
import {
  Route,
  Link,
  Switch,
  NavLink,
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand">New York Mets</a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-link"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  to="/about"
                  className="nav-link"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  to="/players"
                  className="nav-link"
                >
                  Players
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/players" component={Players} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
