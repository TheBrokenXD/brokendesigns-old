import React from "react";
//import components
import Nav from "./components/Nav";
import Logo from "./components/Logo";
//import pages
import Home from "./pages/home";
import Work from "./pages/work";
import About from "./pages/about";
import Contact from "./pages/contact";
import Reel from './pages/reel';
//styles
import './styles/app.scss';
//router
import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Logo />
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reel" element={<Reel />} />
        </Routes>

      </div>
  );
}

export default App;
