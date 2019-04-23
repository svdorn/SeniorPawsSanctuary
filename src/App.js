import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Choreography from "./pages/Choreography";
import Dance from "./pages/Dance";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Philosophy from "./pages/Philosophy";
import ScrollToTop from "react-router-scroll-top";

import "./App.css";

const App = () => (
    <Router>
        <ScrollToTop>
            <Header />

            <div className="App">
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/choreography" component={Choreography} />
                <Route path="/dance" component={Dance} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/philosophy" component={Philosophy} />
            </div>

            <Footer />
        </ScrollToTop>
    </Router>
);

export default App;
