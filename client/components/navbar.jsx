import React from 'react';

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-sm fixed-top navbar-light">
      <div className="container">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar1">
          <span className="navbar-toggler-icon" />
        </button>
        <a className="navbar-brand" href="#">Brand</a>
        <div className="collapse navbar-collapse" id="navbar1">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Link</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
