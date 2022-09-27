import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDrumstickBite, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';

export default function Navbar(props) {
  return (
    <nav className="navbar d-flex" id="navbar">
      <div className="col-6 d-flex justify-content-center align-items-baseline icons">
        <FontAwesomeIcon icon={faDrumstickBite}/>
        <span>bite</span>
      </div>
      <div className="col-6 d-flex justify-content-center icons">
        <FontAwesomeIcon icon={faMagnifyingGlass} id="glass"/>
        <FontAwesomeIcon icon={faUser}/>
      </div>
    </nav>
  );
}
