import React from 'react';
import { Link, Route } from 'react-router-dom';
import OnePic from './pages/OnePic';
import AllPics from './pages/AllPics';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />

      <Route path="/" exact render={() => <OnePic

      />} />
      <Route path="/all" render={() => <AllPics />} />
    </div>
  );
}

export default App;
