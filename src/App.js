import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Component/Home/Home';
import NoMatch from './NoMatch/NoMatch';
import CountryDetail from './Component/CountryDetail/CountryDetail';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div>
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about/:countryName">
              <CountryDetail/>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      </div>
      <p><small>Developed by: Md Touhedul Haque (copyright 2020)</small></p>


    </div>
  );
}

export default App;
