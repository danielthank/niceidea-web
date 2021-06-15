import Menu from "./Menu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Notes from "./random/Notes";
import Chords from "./random/Chords";
import Key from "./random/Key";
import Modes from "./random/Modes";
import Meter from "./random/Meter";

function App() {
  return (
    <div className="h-screen flex flex-col max-w-screen-sm mx-auto">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Menu />
          </Route>
          <Route path="/notes" exact>
            <Notes />
          </Route>
          <Route path="/chords" exact>
            <Chords />
          </Route>
          <Route path="/keys" exact>
            <Key />
          </Route>
          <Route path="/modes" exact>
            <Modes />
          </Route>
          <Route path="/meter" exact>
            <Meter />
          </Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
