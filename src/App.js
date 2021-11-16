import React from "react";
//import components
import Nav from "./components/Nav";
import Logo from "./components/Logo";
//import pages
import Home from "./pages/home";
//styles
import './styles/app.scss';

function App() {
  return (
      <div className="App">
        <Logo />
        <Nav />
        <Home />
      </div>
  );
}

export default App;
