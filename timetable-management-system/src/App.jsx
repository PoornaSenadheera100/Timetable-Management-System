import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/login";

function App() {
  return (
    <Router>
      <Route path="/" exact render={(props) => <Login {...props} />} />
    </Router>
  );
}

export default App;
