import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ImageScroller from 'react-image-scroller';

import images from '../data/fieldday2020';

export default function FieldDay2020() {
  return (
    <div className="field-day">
      <ImageScroller>
        {images.map(e => <img key={e.id} src={process.env.PUBLIC_URL + `${e.url}`} alt={e.title} />)}
      </ImageScroller>
      <h2><ArrowForwardIcon fontSize="large" style={{ marginLeft: "5%" }}/></h2>
    </div>
  )
}
