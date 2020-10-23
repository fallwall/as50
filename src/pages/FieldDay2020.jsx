import React from 'react';
import fieldday from '../components/fieldday.svg';
import ImageScroller from 'react-image-scroller';

import images from '../data/fieldday2020';

export default function FieldDay2020() {
  return (
    <div className="field-day">
      <ImageScroller>
        {images.map(e => <img src={process.env.PUBLIC_URL + `${e.url}`} alt="First" />)}
      </ImageScroller>
    </div>
  )
}
