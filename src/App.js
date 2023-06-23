import React from "react";
import {Footer, Footer2, Features, Header, Capacitacion} from "./containers";
import {Carrusel , Navbar} from "./components";
import "./App.css";

const App = () => {
    return (
        <div className="app">
            <div className="gradient__bg">
                <Navbar/>
                
            </div>
            <Carrusel  />
            <Header />
            <Capacitacion />
            <Features />
            <Footer2 />
            <Footer />
        </div> 
    )
};

export default App;
