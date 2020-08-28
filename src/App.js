import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './containers/Dashboard';
import Login from './containers/Login';
import PageNotFound from "./views/PageNotFound"

import './App.css';

var authenticated = false;
if(localStorage.getItem("token")){
  authenticated = true
}

function App() {
  return (
    <AppLayout>
      <Switch>
        <Route  path="/login" component={Login} />
        <PrivateRoute authenticated={authenticated} path="/dashboard" component={Dashboard} />
        <Route  component={PageNotFound} />
      </Switch>
    </AppLayout>
  );
}

export default App;
