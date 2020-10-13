import React from 'react';
import Image from 'material-ui-image';

export default function Img({ children }) {
  
  console.log(children.url);
  return (
    <div className="one-pic-frame">
      <Image
        src={children.url}
        aspectRatio={children.url.width > children.url.height ? (117/83) : (83/117)}
        animationDuration={5000}
      />
    </div>
  )
}
