import React, { useState } from "react";
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
        <input
          type="checkbox"
          id="vertical-menu"
          className="header__vertical-menu"
        />
        <label htmlFor="vertical-menu" className="header__label">
          <span className="header__menu-icon"></span>
        </label>
        <nav className="header__nav">
          <ul className="header__ul header__ul--vertical">
            <li className="header__li">
              <Link className="header__link" to="/">
                <HomeIcon />
                <p className="header__item">Home</p>
              </Link>
            </li>
            <li className="header__li">
              <Link className="header__link" to="/rols">
                <AssignmentIcon />
                <p className="header__item">Rols</p>
              </Link>
            </li>
            <li className="header__li">
              <Link className="header__link" to="/fractions">
                <CalculateIcon />
                <p className="header__item">Fractions</p>
              </Link>
            </li>
            <li className="header__li">item</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
