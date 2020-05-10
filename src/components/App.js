import React from 'react';
import './App.scss';
// import Header from './header/header'
import Home from './home/home';
import About from './about/about';
import Experience from './experience/experience';
import Skills from './skills/skills';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Home />
      <About />
      <Experience />
      <Skills />
    </div>
  );
}

export default App;
