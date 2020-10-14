import React from 'react'; 
import hbd from '../components/arishackhbd.svg';
import './About.css';

export default function About() {
  return (
    <div className="about">
      <img src={hbd} className="hbd" alt="happy birthday"/>
    </div>
  )
}
