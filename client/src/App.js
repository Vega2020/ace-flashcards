import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

//This and the corresponding route are for testing. Probably remove them once the component is accessible normally.
import CardRender from "./components/cardRender";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/cardtest" component={CardRender} /> 
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
