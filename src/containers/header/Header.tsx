import React from "react";
import './Header.css';
import reactLogo from '../../images/reactlogo.svg'

const Header = ({ title, children }: any | null) => {
  return (
    <div className="Header">
      <div className="Logo">
        <img src={reactLogo} />
        <h1> {title} </h1>
      </div>
      <header> {children} </header>
    </div>
  );
}

export default Header;