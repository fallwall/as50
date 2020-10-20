import React, { useEffect} from 'react';
import Img from '../components/Img';
import OnePicFront from '../components/OnePicFront';
import OnePicDownload from '../components/OnePicDownload';
import images from '../data/images';
import './OnePic.css';

const OnePic = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="one-pic">
      <Img>{props.isFrontPage? images[props.current]: images[props.download_id]}</Img>
      {props.isFrontPage ? <OnePicFront
        shuffleCurrent={props.shuffleCurrent}
      />
        :
        <OnePicDownload
          download_id={props.download_id}
        />}
    </div>
  )
}

export default OnePic;
