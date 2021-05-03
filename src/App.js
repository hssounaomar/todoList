import React from "react";
import SignIn from "./components/SignIn";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import Home from "./components/Home";
import { BrowserRouter, Switch } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <PublicRoute
            restricted={true}
            component={SignIn}
            path="/signin"
            exact
          />
          <PrivateRoute component={Home} path="/" exact />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
