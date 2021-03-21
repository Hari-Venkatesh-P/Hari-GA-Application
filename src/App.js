import React , {useEffect} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';
import LoginScreen from "../src/screens/Login"
import HomeScreen from "../src/screens/Home"
import PageNotFound from "../src/screens/PageNotFound"


ReactGA.initialize('UA-192616362-1');

function App() {

  useEffect (()=>{
    ReactGA.pageview(window.location.pathname + window.location.search);
  })
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
