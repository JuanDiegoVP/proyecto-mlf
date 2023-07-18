import React from "react";
import "../../styles/header/header.css";
import mlfLogo from "../../assets/mlfLogo.png";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import CalculateIcon from "@mui/icons-material/Calculate";
import AssignmentIcon from "@mui/icons-material/Assignment";

function Header() {
  return (
    <>
      <header className="header">
        <img className="header__logo" src={mlfLogo} alt="logo de molino" />
        <ul className="header__ul">
          <li className="header__li">
            <HomeIcon />
            <Link to="/">Home</Link>
          </li>
          <li className="header__li">
            <AssignmentIcon />
            <Link to="/rols">Rols</Link>
          </li>
          <li className="header__li">
            <CalculateIcon />
            <Link to="/fractions">Fractions</Link>
          </li>
          <li className="header__li">item</li>
        </ul>
      </header>
    </>
  );
}

export default Header;
