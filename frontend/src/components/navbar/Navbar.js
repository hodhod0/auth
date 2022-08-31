import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div className="container">
        <Link to="/">Navbar</Link>
      </div>
    </header>
  );
}

export default Navbar;
