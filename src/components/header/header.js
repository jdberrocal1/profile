import React from 'react';
import './header.scss';

import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import WorkIcon from '@material-ui/icons/Work';
import EmailIcon from '@material-ui/icons/Email';

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <h1>JD</h1>
      </div>
      <nav className="nav">
        <a href="#">
          <HomeIcon fontSize="large" />
          <span>Home</span>
        </a>
        <a href="#">
          <PersonIcon fontSize="large"/>
          <span>About</span>
        </a>
        <a href="#">
          <SettingsIcon fontSize="large"/>
          <span>Skills</span>
        </a>
        <a href="#">
          <WorkIcon fontSize="large"/>
          <span>Work</span>
        </a>
        <a href="#">
          <EmailIcon fontSize="large"/>
          <span>Contact</span>
        </a>
      </nav>
    </div>
  );
}

export default Header;
