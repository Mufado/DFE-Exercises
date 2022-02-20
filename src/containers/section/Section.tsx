import React from "react";
import './Section.css';

const Section = ({ children }: any) => {
  return (
    <div className="Section"> {children} </div>
  );
}

export default Section;