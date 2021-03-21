import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';

import LoginScreen from "../src/screens/Login"
import HomeScreen from "../src/screens/Home"
import SiteScreen from "../src/screens/Sites"
import PageNotFound from "../src/screens/PageNotFound"
import {useGAPageViewHook} from "../src/hooks/GAhooks"
import Store from "../src/redux/index"


function App() {

  useGAPageViewHook(window.location.pathname);

  return (
    <div className="App">
      <BrowserRouter>
      <Provider store={Store}>
        <Switch>
          <Route exact path="/" component={LoginScreen} />
          <Route exact path="/home" component={HomeScreen} />
          <Route exact path="/sites" component={SiteScreen} />
          <Route component={PageNotFound} />
        </Switch>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
