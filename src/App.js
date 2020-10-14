import React from 'react';
import { Route } from 'react-router-dom';
import OnePic from './pages/OnePic';
import AllPics from './pages/AllPics';
import About from './pages/About';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Route path="/" exact render={() => <OnePic />} />
      <Route path="/all" render={() => <AllPics />} />
      <Route path="/about" render={() => <About />} />
    </div>
  );
}

export default App;
