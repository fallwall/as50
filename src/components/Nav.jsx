import React, { useState } from 'react';
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
            onClick={() => setOverlay(!overlay)}>
            &#9776;
            </span>
        </div>
      </div>
      <div className="overlay" id={overlay ? "myNav" : "myNavHidden"}>
        <a href="javascript:void(0)" className="closebtn" onClick={() => setOverlay(!overlay)}>&times;</a>
        <div className="overlay-content">
          <a href="/">Home</a>
          <a href="/about">Ari Who</a>
          <a href="/all">Gallery</a>
          <a href="/field2020">Field Day 2020</a>
          <a href="/contact">Contact</a>
        </div>
      </div>

    </>
  )
}
