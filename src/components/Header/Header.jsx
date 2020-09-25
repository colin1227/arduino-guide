import "./Header.scss";
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
          <h1>Colin's Arduino Guide</h1>
          <div className="navigation">
              <Link to='/'>Home</Link>
              <Link to='/code-dictionary'>Code Dictionary</Link>
              <Link to='/hardware-dictionary'>Hardware Dictionary</Link>
              <Link to='/code-tutorials'>Learn Arduino Code</Link>
              <Link to='/hardware-projects'>Learn Hardware n Circuitry</Link>

          </div>
        </div>
    )
}

export default Header;