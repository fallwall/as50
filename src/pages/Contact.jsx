import React from 'react';
import copyright from '../components/arishackcr.svg';
import InstagramIcon from '@material-ui/icons/Instagram';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact">
      <a href="https://instagram.com/afismack66">
      <InstagramIcon fontSize="large" /> 
        </a>
      <img
        style={{ width:"40%" }}
        src={copyright}
        className="hbd"
        alt="copyright info" />
    </div>
  )
}
