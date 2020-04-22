import React from "react";

function Header() {
  return (
    <header>
      <div className="ui inverted segment">
        <div className="ui inverted secondary pointing menu">
          <a className="active item" href="/">
            Mind Master
          </a>
          <a className="item" href="/">
            About Us
          </a>
          <a className="item" href="/">
            Friend Finder
          </a>
        </div>
      </div>
    </header>
  );
}
export default Header;
