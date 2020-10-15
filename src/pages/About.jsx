import React from 'react';
import hbd from '../components/arishackhbd.svg';
import about from '../components/arishackabout.svg';
import about2 from '../components/arishackabout2.svg';
import about3 from '../components/arishackabout3.svg';

import './About.css';

export default function About() {
  return (
    <div className="about">
      <img src={about} className="hbd" alt="happy birthday" />
      <img src={about2} className="hbd" alt="happy birthday" />
      <img src={about3} className="hbd" alt="happy birthday" />
      <img src={hbd} className="hbd" alt="happy birthday" />
    </div>
  )
}
