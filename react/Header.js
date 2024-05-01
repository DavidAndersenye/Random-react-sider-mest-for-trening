import React from 'react';

function Header() {
  return (
    <header>
      <nav className="navbar">
        <img src="stian.jpg" width="80px" alt="bilde av stian" />
        <ul className="nav-items">
          <li>Home</li>
          <li>About</li>
          <li>Pricing</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
