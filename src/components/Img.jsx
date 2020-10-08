import React from 'react';
import Image from 'material-ui-image';

export default function Img({ children }) {
  return (
    <div>
      <Image
        src={children.url}
      />
    </div>
  )
}
