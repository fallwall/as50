import React, { useState} from 'react';
import Img from '../components/Img';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import MoreIcon from '@material-ui/icons/More';
import data from '../data/images.json';

const current = Math.floor(Math.random() * data.images.length);

export default function OnePic() {
  const [current, setCurrent] = useState(0);
  return (
    <div className="one-pic">
      <Img>{data.images[current]}</Img>
      <div className="icon">
        <ShuffleIcon
          fontSize="large"
          onClick={()=>setCurrent(Math.floor(Math.random() * data.images.length))}
        />
        <MoreIcon fontSize="large" />
      </div>
    </div>

  )
}
