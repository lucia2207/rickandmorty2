import React from "react";

const Navbar = ({ brand }) => {
  return (
    <nav >
      <div >
        <a href="/">
          {brand}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;