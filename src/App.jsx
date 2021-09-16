import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Fetches from "./Fetches";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <Navigation />

      <Switch>
        <Route exact path="/" component={Fetches}></Route>
      </Switch>
    </Router>
  );
}

export default App;
