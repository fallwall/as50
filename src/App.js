import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import OnePic from './pages/OnePic';
import AllPics from './pages/AllPics';
import About from './pages/About';
import Trail from './pages/Trail';
import Contact from './pages/Contact';
import Nav from './components/Nav';
import './App.css';

const TOTAL_IMAGES = 50;

const App = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const init = Math.floor(Math.random() * TOTAL_IMAGES);
    setCurrent(init);
  }, []);

  const shuffleCurrent = () => {
    const rand = Math.floor(Math.random() * TOTAL_IMAGES);
    setCurrent(rand);
  }

  return (
    <div className="App">
      <Nav />
      <Route path="/" exact render={() =>
        <OnePic
          current={current}
          shuffleCurrent={shuffleCurrent}
          isFrontPage={true}
        />}
      />
      <Route path="/all" render={() => <AllPics />} />
      <Route path="/about" render={() => <About />} />
      <Route path="/field2020" render={() => <Trail />} />
      <Route path="/contact" render={() => <Contact />} />
      <Route path="/download/:id" render={(props) =>
        <OnePic
          isFrontPage={false}
          download_id={props.match.params.id}
        />} />
    </div>
  );
}

export default App;
