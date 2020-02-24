import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Components
import Home from "./Home";
import Navbar from "./Navbar";
import Signup from "./Signup";
import Garbage from "./Garbage";
import Treasure from "./Treasure";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/garbage" component={Garbage} />
          <Route path="/treasure" component={Treasure} />
          <Route path="/signup" component={Signup} />
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
