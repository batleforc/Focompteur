import React from "react";
import Menu from "./components/Menu";
import { Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
const App = () => (
  <>
    <Menu />
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
  </>
);

export default App;
