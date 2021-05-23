import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Insert from './Components/Home/Insert/Insert';
import Read from './Components/Home/Read/Read';
import Update from './Components/Home/Update/Update';
import Delete from './Components/Home/Delete/Delete';
import Home from './Components/Home/Home/Home';

function App() {
  return (
    <div className="App">
    <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/insert">
            <Insert />
          </Route>
          <Route path="/read">
            <Read />
          </Route>
          <Route path="/update">
            <Update />
          </Route>
          <Route path="/delete">
            <Delete />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>

    </div>
  );
}

export default App;
