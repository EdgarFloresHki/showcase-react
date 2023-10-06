import React from "react";
import './App.css';
import './components/navbarComponent/Navbar.css';
import './assets/css/material.css'
import './assets/js/core/jquery.min'
import './assets/js/core/popper.min'
import './assets/js/core/bootstrap-material-design.min'

import './assets/js/material-dashboard'

//import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbarComponent/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar>
            <Routes>
                <Route path="/">Home</Route>
            </Routes>
        </Navbar>
      </Router>
    </div>
  );
}

export default App;
