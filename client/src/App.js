import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import routes from "../src/routes/routes";
import GlobalRoute from "./components/tools/GlobalRoute";
import Header from "./components/TopNav/Index";

const App = (props) => (
  <Router>
    <Header />
    <Switch>
      {routes.map((route, i) => (
        <GlobalRoute key={i} {...route} />
      ))}
    </Switch>
  </Router>
);

export default App;
