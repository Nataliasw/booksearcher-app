import React from "react";

const Header = () => {
  return (
    <header className="header" id="navbar">
      <div className="nav">
        <p>
          <a href="#top-page" className="link">
            about
          </a>
        </p>
        <p>
          <a href="#search" className="link">
            search by title
          </a>
        </p>
        <p>
          <a href="#contact" className="link">
            contact
          </a>
        </p>
      </div>
    </header>
  );
};

export default Header;
