import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDrumstickBite, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';

export default function Navbar(props) {
  return (
    <nav className="navbar d-flex" id="navbar">
      <div className="col-6 d-flex justify-content-center align-items-baseline">
        <div className="icons">
          <FontAwesomeIcon icon={faDrumstickBite}/>
          <span className="bite">bite</span>
        </div>
      </div>
      <div className="col-6 d-flex justify-content-center">
        <FontAwesomeIcon icon={faMagnifyingGlass} id="glass" className="icons"/>
        <FontAwesomeIcon icon={faUser} className="icons"/>
      </div>
    </nav>
  );
}
