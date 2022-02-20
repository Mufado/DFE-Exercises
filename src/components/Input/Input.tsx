import React from "react";
import button from '../../images/searchbutton.svg';
import './Input.css';

const Input = ({ callback, label }: any) => {
  const [text, setText] = React.useState('');

  const handleChangeSearchbar = (event: any) => {
    setText(event.target.value);
  }

  const handleSubmitSearch = () => {
    callback(text);
  }

  return (
    <div className="Input">
      <input type="text" placeholder={label} onChange={handleChangeSearchbar} />
      <img src={button} onClick={handleSubmitSearch} />
    </div>
  );
}

export default Input;