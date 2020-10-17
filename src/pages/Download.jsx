import React from 'react';
import Img from '../components/Img';
import data from '../data/images.json';

export default function Download(props) {
  // const download_pic = data.images[props.download_id];
  return (
    <div className="download-page">
      <Img>{data.images[props.download_id]}</Img>
    </div>
  )
}
