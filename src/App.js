import { useState } from "react";
import Menu from "./Menu";
import Notes from "./random/Notes";

function App() {
  const [type, setType] = useState("");

  return (
    <div className="h-screen flex flex-col">
      {type === "" && <Menu onSetType={setType} />}
      {type === "notes" && <Notes />}
    </div >
  );
}

export default App;
