import React from "react";
import './Footer.css';

const Footer = ({ copyright }: any | null) => {
  return (
    <div className="Footer">
      <footer> {copyright} </footer>
    </div>
  );
}

export default Footer;