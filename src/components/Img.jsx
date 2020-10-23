import React, { useState, useEffect } from 'react';
import Image from 'material-ui-image';

export default function Img({ children }) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const updateWindowDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener('resize', () => { updateWindowDimensions(); });
    return () => {
      window.removeEventListener('resize', () => { updateWindowDimensions(); })
    }
  }, [])

  return (
    <div className="one-pic-frame">
      <Image
        src={process.env.PUBLIC_URL + `${children.url}`}
        animationDuration={5000}
        imageStyle={width < 640 ? { marginLeft: '0', width: '100%', height: '100%' } : { width: '50%', height: '50%' }}
      />
    </div>
  )
}
