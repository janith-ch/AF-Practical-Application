/** @format */

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BaseRoutes from "../routes/BaseRoutes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <BaseRoutes />
    </Router>
  );
}

export default App;
