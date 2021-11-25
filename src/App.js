import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ResourcesPage from "./pages/ResourcesPage";
import Landing from "./pages/Landing";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <section>
          <Route exact path="/" component={ResourcesPage} />
          <Route path="/landing" component={Landing} />
          </section>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
