import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/index';
import ProtectedRoute from './components/tools/ProtectedRoute';
import React, { Component, useState } from 'react';
import Home from './components/Home/index';
import Header from "./components/TopNav/Index";
import Login from './components/Auth/Login';
import Signin from './components/Auth/Signin';
import Agent from "./components/Agent/index";
import preassessment from "./components/preassessment/index";
import SignupStepTow from './components/Auth/SignupStepTow';
import CustomerDashboard from "./components/Customer-dashboard/index"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Route exact path='/login' component={Login} />
        <Route exact path='/signin' component={Signin} />
        <Route  exact path="/" component={Home}  />
        <ProtectedRoute  exact path="/signupsteptwo" component={SignupStepTow}  />
        <ProtectedRoute  exact path="/customerdashboard" component={CustomerDashboard}  />
        <ProtectedRoute  exact path="/dashboard" component={Dashboard}  />
        <Route  exact path="/assessment" component={preassessment}  />
        <Route  exact path="/Agent" component={Agent}  />
      </Router>
    </div>
  );
}

export default App;