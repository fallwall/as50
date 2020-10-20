import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import as from './arishack.svg';
import './Nav.css';

export default function Nav() {
  const [overlay, setOverlay] = useState(false);
  return (
    <>
      <div className="nav">
        <div className="nav-left">
          <img src={as} className="logo" alt="logo" />
        </div>
        <div className="nav-right">
          <span style={{ fontSize: "3em", cursor: "pointer" }}
            className="clickable"
            onClick={() => setOverlay(!overlay)}>
            &#9776;
            </span>
        </div>
      </div>
      <div className="overlay" id={overlay ? "myNav" : "myNavHidden"}>
        <a href="javascript:void(0)" className="closebtn" onClick={() => setOverlay(!overlay)}>&times;</a>
        <div className="overlay-content" onClick={() => setOverlay(!overlay)}>
          <Link to="/">Home</Link>
          <Link to="/about">Ari Who</Link>
          <Link to="/all">Gallery</Link>
          <Link to="/field2020">Field Day 2020</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

    </>
  )
}
