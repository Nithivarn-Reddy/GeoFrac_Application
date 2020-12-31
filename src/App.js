import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import RockwellAndWellBornContainer from "./components/RockwellAndWellBornContainer";
import PumpingSchedule from "./components/PumpingSchedule";
import Plots from "./components/Plots";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Switch>
          <Route path="/" exact={true} />
          <Route path="/rockwellWellborn" exact={true}>
            <RockwellAndWellBornContainer />
          </Route>
          <Route path="/pumpingSchedule" exact>
            <PumpingSchedule />
          </Route>
          <Route path="/technicalData" exact />
          <Route path="/fldInput" exact />
          <Route path="/execution" exact />
          <Route path="/plots" exact>
            <Plots />
          </Route>
          <Route path="/manual" exact />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
