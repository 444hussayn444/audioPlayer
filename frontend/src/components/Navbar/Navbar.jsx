import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
// upload logo image
import LogoPNG from "../../assets/Untitled_Project__5_-removebg-preview.png";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  function toHome() {
    return navigate("/"); // this function put navigation to logo
  }
 
  return (
    <div className="navbar">
      <div className="logo" onClick={() => toHome()}>
        <img className="logo-image" src={LogoPNG} alt="logo" />
      </div>
      <div className="links">
        <NavLink
          className={({ isActive }) => (isActive ? "link Active" : "link")}
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "link Active" : "link")}
          to="/musics"
        >
          Musics
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "link Active" : "link")}
          to="/favorite"
        >
          Favorite
        </NavLink>
        {/* <NavLink
          className={({ isActive }) => (isActive ? "link Active" : "link")}
          to="/downloads"
        >
          Downloads
        </NavLink> */}
      </div>
    </div>
  );
};

export default Navbar;
