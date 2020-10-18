import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../src/Dashboard';
import Login from '../src/Login';
import Error from '../src/Error';

function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route  exact path="/Dashboard" component={Dashboard} />
      <Route   component={Error} />
    </Switch>
 </>
  );
}

export default App;
