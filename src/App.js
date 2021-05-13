import "./App.css";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Players from "./Components/Pages/Players";
import playersInfo from "./data/playerInfo";
import Navbar from "./Components/Navbar";
import { Route, Switch, NavLink } from "react-router-dom";
import SinglePlayer from "./Components/SinglePlayer";

function App() {
  const getPlayer = (props) => {
    let number = props.match.params.playerNumber;
    let currentPlayer = playersInfo.find((player) => player.number === number);
    return <SinglePlayer {...props} player={currentPlayer} />;
  };
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/players" component={Players} />
        <Route exact path="/players/:playerNumber" render={getPlayer} />
      </Switch>
    </div>
  );
}

export default App;
