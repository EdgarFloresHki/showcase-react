import React from "react";
import './App.css';
import './components/navbarComponent/Navbar.css';
import './assets/css/material.css'
import './assets/css/showcase.css'


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
