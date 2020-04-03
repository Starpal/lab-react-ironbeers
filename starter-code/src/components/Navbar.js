import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav className="navBar">
        <Link className="home" to="/">
          Home
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
