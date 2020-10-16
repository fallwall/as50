import React, { useState } from 'react';
import Img from '../components/Img';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import MoreIcon from '@material-ui/icons/More';
import data from '../data/images.json';
import './OnePic.css';

const init = Math.floor(Math.random() * data.images.length);

export default function OnePic() {
  const [current, setCurrent] = useState(init);
  return (
    <div className="one-pic">
      <Img>{data.images[current]}</Img>
      <div className="icon">
        <div className="icon-next">
          <ShuffleIcon
            fontSize="large"
            onClick={() => setCurrent(Math.floor(Math.random() * data.images.length))}
          />
          <div
            onClick={() => setCurrent(Math.floor(Math.random() * data.images.length))}>
            <h2>Next</h2>
            </div>
        </div>
        <div className="icon-all">
          <MoreIcon fontSize="large" />
          <div><h2>All</h2></div>
        </div>
      </div>
    </div>

  )
}
