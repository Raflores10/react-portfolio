import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";
import Header from "./components/Header";
import Contact from "./components/pages/Contact";


const App = () => {
  return (
    <div className="App content">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element = {<About/>}/>
          <Route path="/portfolio" element = {<Portfolio/>}/>
          <Route path="/resume" element = {<Resume/>}/>
          <Route path="/contact" element = {<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App;
