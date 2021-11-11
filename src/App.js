import React from "react";
import "./App.css";
import Home from "./Components/Home";
import DisplayMovie from "./Components/DisplayMovie";
import { Card, Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/displayMovie" element={ <DisplayMovie />}/>
      </Routes>
    </Router>
  );
};

export default App;
