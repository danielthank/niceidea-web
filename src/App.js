import Menu from "./Menu";
import Notes from "./random/Notes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chords from "./random/Chords";

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
        </Switch>
      </Router>
    </div >
  );
}

export default App;
