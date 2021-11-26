import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import InitialForm from './components/Form.js';
import Home from './components/Home.js'
import "./App.css"


function App() {
    return (
    <React.Fragment>
        <Router>
        <Routes>
            <Route path="/" element={<InitialForm />}/>
            <Route path="/home" element={<Home />}/>
        </Routes>
        </Router>
    </React.Fragment>
    );
}

export default App;