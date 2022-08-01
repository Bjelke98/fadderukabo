import React from 'react';

import {
  Link, NavLink,
} from "react-router-dom";

const NavigationItem = ({name, url="unknown"}) => {
  let activeStyle = "active-page";
  let inActiveStyle = "nav-link";
  return (
    <li class="nav-item">
      <NavLink to={url} onClick={CloseNav} className={({ isActive }) => inActiveStyle + (isActive? " "+activeStyle : "")}>
        {name}
      </NavLink>
    </li>
  );
}

const CloseNav = () => {
  document.getElementById("navbarNavDropdown").classList.remove("show");
}

const BrandItem = () => (
  <NavLink className="navbar-brand" to="/">
    <img
      src="https://www.usn.no/getfile.php/13520469-1525427372/usn.no/om_USN/Logo%20og%20grafiske%20elementer/USN_logotype.png"
      alt="" height="75" className="d-i"/>
  </NavLink>
)

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg nav-style pt-0 pb-0">
    <div className="container-fluid">
      
      <BrandItem/>

      <button className="navbar-toggler btn btn-light btn-outline-light" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <ul className="navbar-nav landing-text">

          <NavigationItem name="Hjem" url="/"/>
          <NavigationItem name="Program" url="program"/>
          <NavigationItem name="Fadder" url="fadder"/>
          <NavigationItem name="Info" url="info"/>
          {/* <NavigationItem name="International" url="international"/> */}

          <li className="vr"></li>
          <li className="nav-item">
            <div className="btn-group">
              <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown"
                aria-expanded="false">
                NO
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a className="dropdown-item" href="#">EN</a></li>
              </ul>
            </div>
          </li>

        </ul>
      </div>
    </div>
  </nav>
  );
};



export default Navigation;