import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <Link to="/">
        <span className="font-code text-3xl font-bold">Pixonoids</span>
      </Link>
    </div>
  );
};

export default Navbar;
