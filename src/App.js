import React from 'react';
import { Route } from 'react-router-dom';
import OnePic from './pages/OnePic';
import AllPics from './pages/AllPics';
import About from './pages/About';
import Trail from './pages/Trail';
import Contact from './pages/Contact';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Route path="/" exact render={() => <OnePic />} />
      <Route path="/all" render={() => <AllPics />} />
      <Route path="/about" render={() => <About />} />
      <Route path="/field2020" render={() => <Trail />} />
      <Route path="/contact" render={() => <Contact />} />
    </div>
  );
}

export default App;
