import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div className="container">
        <Link to="/">Navbar</Link>
        <nav>
          <div>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>

          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
