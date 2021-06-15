import Menu from "./Menu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Notes from "./random/Notes";
import Chords from "./random/Chords";
import Keys from "./random/Keys";
import Modes from "./random/Modes";

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
            <Keys />
          </Route>
          <Route path="/modes" exact>
            <Modes />
          </Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
