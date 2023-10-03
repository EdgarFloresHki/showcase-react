import React from "react";
import './App.css';
import Navbar from './components/navbarComponent/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
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
