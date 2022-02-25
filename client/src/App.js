import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./components/pages/Profile";
import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/pages/ContactUs";
import SignUp from "./components/pages/SignUp";

import Footer from "./components/Footer";
import SignIn from "./components/pages/SignIn";
import Update from "./components/pages/Update";
import Search from "./components/pages/Search";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/update" component={Update} />
        <Route path="/search" component={Search} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
