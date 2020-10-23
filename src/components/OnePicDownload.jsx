import React from 'react';
import { Link } from 'react-router-dom';
import GetAppIcon from '@material-ui/icons/GetApp';
import MoreIcon from '@material-ui/icons/More';
import images from '../data/images';

export default function OnePicDownload(props) {
  return (
    <div className="icon">
      <a href={process.env.PUBLIC_URL + `${images[props.download_id].url}`} download>
        <div className="icon1 clickable">
          <GetAppIcon
            fontSize="large"
          />
          <div>
            <h2>Download</h2>
          </div>
        </div>
      </a>
      <div className="icon2">
        <Link to="/all">
          <MoreIcon fontSize="large" />
          <div><h2>All</h2></div>
        </Link>
      </div>
    </div>
  )
}
