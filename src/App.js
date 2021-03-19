import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoginScreen from "../src/screens/Login"
import HomeScreen from "../src/screens/Home"
import PageNotFound from "../src/screens/PageNotFound"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginScreen} />
          <Route exact path="/home" component={HomeScreen} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
