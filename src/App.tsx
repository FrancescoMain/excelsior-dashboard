import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Paperbase from "./Paperbase/Paperbase";

function App() {
  return (
    <div className="App">
      <Router>
        <Paperbase></Paperbase>
      </Router>
    </div>
  );
}

export default App;
