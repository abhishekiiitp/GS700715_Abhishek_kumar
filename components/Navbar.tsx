import React from "react";
import logo from '../public/images/logo.svg';
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="navbar">
          <div className="profile-icon">
              <Image src={logo} alt="Logo" width={100} height={50} />
          </div>
          <h1>Data Viewer App</h1>
          <div className="profile-icon">⚫</div>
      </nav>
  );
};

export default Navbar;