import React from 'react';
import Img from './Img';
import data from '../data/images.json';

export default function CarouselSection() {
  return (
    <div className="carousel-section">
      {data.images.map(e => <Img>{e}</Img>)}
    </div>
  )
}
