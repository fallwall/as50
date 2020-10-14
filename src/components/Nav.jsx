import React, { useState } from 'react';
import as from './arishack.svg';
import DehazeIcon from '@material-ui/icons/Dehaze';
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
          <DehazeIcon
            fontSize="large"
            className="closebtn"
            onClick={() => setOverlay(!overlay)}
          />
        </div>
      </div>
      <div className="overlay" id={overlay ? "myNav" : "myNavHidden"}>
        <div className="overlay-content">
          <a href="#">About</a>
          <a href="#">All</a>
          <a href="#">Contact</a>
        </div>
      </div>

    </>
  )
}
