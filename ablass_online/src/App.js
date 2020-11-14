import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import ThankYou from "./pages/ThankYou";
import RequestAblass from "./pages/RequestAblass";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/">
            <RequestAblass />
          </Route>
          <Route exact path="/thanks">
            <ThankYou />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
