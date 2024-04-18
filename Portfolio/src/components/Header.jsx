import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="nav-menu">
          <li><img id="logo" src="src\assets\Resource\Logo.png" alt="LS Logo" /></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div id="intro">
        <span>I'M <span id="name">LOVEPREET SINGH</span> <br />WEB DEVELOPER</span>
        <span className="dummy"></span>
        <span className="mobile-pic"><img src="src/assets/Resource/Mypic2.png" alt="My pic" /></span>
      </div>
    </header>
  );
};

export default Header;
