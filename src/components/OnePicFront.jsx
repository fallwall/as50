import React from 'react';
import { Link } from 'react-router-dom';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import MoreIcon from '@material-ui/icons/More';

export default function OnePicFront(props) {
  return (
    <div className="icon">
      <div className="icon1 clickable" onClick={() => props.shuffleCurrent()}>
        <ShuffleIcon
          fontSize="large"
        />
        <div>
          <h2>Next</h2>
        </div>
      </div>
      <div className="icon2">
        <Link to="/all">
          <MoreIcon fontSize="large" />
          <div><h2>All</h2></div>
        </Link>
      </div>
    </div>
  )
}
