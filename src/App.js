import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Navbar} from "./components";
import { Footer } from "./containers";
import "./App.css";
import {Home, Loginn, Registro } from "./pages";


const App = () => {
    return (

    <Router>
        <div className="app">
            <div className="gradient__bg">
                <Navbar/>
                
            </div>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/login" element={<Loginn />}/>
                    <Route path="/register" element={<Registro />}/>
                </Routes>
            <Footer />
        </div>
    </Router>
    );
};

export default App;
