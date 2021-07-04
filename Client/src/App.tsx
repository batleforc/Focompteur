import React from "react";
import Menu from "./components/Menu";
import { Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
const App = () => (
  <div>
    <Menu />
    <Route exact path="/">
      <h1>Home</h1>
    </Route>
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
  </div>
);

export default App;
