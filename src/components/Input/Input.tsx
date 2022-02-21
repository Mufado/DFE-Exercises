import React from "react";
import { useDispatch, useSelector } from "react-redux";
import button from '../../images/searchbutton.svg';
import './Input.css';

const Input = ({ callback, label }: any) => {
  let text = useSelector(state => state);
  const dispatch = useDispatch();

  const handleSubmitSearch = () => {
    callback(text);
  }

  return (
    <div className="Input">
      <input type="text" placeholder={label} onChange={() => dispatch({ type: 'SEARCH', search: "text" })} />
      <img src={button} onClick={handleSubmitSearch} />
    </div>
  );
}

export default Input;