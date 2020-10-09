import React from 'react';
import Image from 'material-ui-image';

export default function Img({ children }) {
  return (
    <div>
      <Image
        src={children.url}
        aspectRatio={children.width > children.height ? 3 / 2 : 2 / 3}
        animationDuration={5000}
      />
    </div>
  )
}
