import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ResourcesPage from "./pages/ResourcesPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <section>
          <Route exact path="/" component={ResourcesPage} />
          </section>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
