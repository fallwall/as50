import React from 'react';
import fieldday from '../components/fieldday.svg';

export default function Trail() {
  return (
    <div className="trail">
      <img
        style={{ width:"40%" }}
        src={fieldday}
        className="hbd"
        alt="field day cover" />
      <h2>To be updated post-Field Day.</h2>
    </div>
  )
}
