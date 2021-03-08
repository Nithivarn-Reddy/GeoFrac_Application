import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import RockwellAndWellBornContainer from "./components/RockwellAndWellBornContainer";
import PumpingSchedule from "./components/PumpingSchedule";
import Plots from "./components/Plots";
import TechnicalData from "./components/TechnicalData";
import FldInput from "./components/FldInput";
import Login from "./components/Login";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import FileReadWrite from "./components/wells-n-stages"
import './styles/index.scss';
import Contour from './components/Contour';
import { Component } from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact={true} component={() => <Login />} />
          <Route path="/wellboreRockData" exact={true}>
            <RockwellAndWellBornContainer />
          </Route>
          <Route path="/pumpingData" component={FileReadWrite} exact/>
          {/* <Route path="/pumpingData" exact>
            <PumpingSchedule /> */}
          {/* </Route> */}
          <Route path="/technicalData" exact>
            <TechnicalData />
          </Route>
          <Route path="/fldInput" exact>
            <FldInput />
          </Route>
          <Route path="/execution" exact />
          <Route path="/plots" exact>
            <Plots />
          </Route>
          <Route path="/contour" exact>
            <Contour />
          </Route>
          <Route path="/manual" exact />
          <Route path="/users" exact>
            {" "}
            <Users />
          </Route>
          <Route path="/addnewuser" exact>
            {" "}
            <AddUser />
          </Route>
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
