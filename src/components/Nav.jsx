import React from 'react';
import as from './arishack.svg';
import DehazeIcon from '@material-ui/icons/Dehaze';
import './Nav.css';

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav-left">
        <img src={as} className="logo" alt="logo" />
      </div>
      <div className="nav-right">
        <DehazeIcon fontSize="large" />
      </div>
    </div>
  )
}
