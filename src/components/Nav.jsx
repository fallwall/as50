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
          <span style={{ fontSize: "30px", cursor: "pointer" }}
            onClick={() => setOverlay(!overlay)}>
            &#9776;
            </span>
        </div>
      </div>
      <div className="overlay" id={overlay ? "myNav" : "myNavHidden"}>
        <a href="javascript:void(0)" className="closebtn" onClick={() => setOverlay(!overlay)}>&times;</a>
        <div className="overlay-content">
          <a href="#">About</a>
          <a href="/all">All</a>
          <a href="#">Contact</a>
        </div>
      </div>

    </>
  )
}
