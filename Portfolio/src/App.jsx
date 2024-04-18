// App.js

import React from 'react';
import './App.css'; 
import Header from './components/Header';
import About from './components/about';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Skills from "./components/Skills";
import SocialIcons from "./components/SocialIcons";

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <SocialIcons />
    </div>
  );
};

export default App;
