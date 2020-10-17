import React from 'react';
import Image from 'material-ui-image';
import Img from '../components/Img';
import GetAppIcon from '@material-ui/icons/GetApp';
import MoreIcon from '@material-ui/icons/More';
import data from '../data/images.json';
import './Download.css';

export default function Download(props) {
  // const download_pic = data.images[props.download_id];
  return (
    <div className="download-page">
      <div className="download-img">
      <Img>{data.images[props.download_id]}</Img>
      </div>
      <div className="download-icons">
        <div className="download-icon1 clickable">
          <a href={data.images[props.download_id].url} download>
            <GetAppIcon fontSize="large" />
            <div><h2>Download</h2></div>
          </a>
        </div>
        <div className="download-icon2 clickable">
          <a href="/all">
            <MoreIcon fontSize="large" />
            <div><h2>Return</h2></div>
          </a>
        </div>
      </div>
    </div>
  )
}
