import React from "react";
import Menu from "./components/Menu";
import { Route } from "react-router-dom";
const App = () => (
  <div>
    <Menu />
    <Route exact path="/">
      <h1>Home</h1>
    </Route>
  </div>
);

export default App;
