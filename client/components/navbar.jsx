import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDrumstickBite } from '@fortawesome/free-solid-svg-icons';

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-light bg-light justify-content-between">
      <div className="col-5 d-flex justify-content-center align-items-baseline">
        <FontAwesomeIcon icon={faDrumstickBite} id="drumstick"/>
        <h2>Bite</h2>
      </div>
      <div className="col-7" />
    </nav>
  );
}
