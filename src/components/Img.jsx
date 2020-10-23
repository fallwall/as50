import React from 'react';
import Image from 'material-ui-image';

export default function Img({ children }) {

  console.log(process.env.PUBLIC_URL);
  console.log(children.url);
  return (
    <div className="one-pic-frame">
      <Image
        src={process.env.PUBLIC_URL + `${children.url}`}
        animationDuration={5000}
        imageStyle={{ width: '50%', height: '50%' }}
      />
    </div>
  )
}
