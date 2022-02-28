import React from "react";
import { useDispatch, useSelector } from "react-redux";
import button from '../../images/searchbutton.svg';
import { IState } from "../../redux/reducer";
import './Input.css';

const Input = ({ callback, label }: any) => {
  const text = useSelector<IState, IState["search"]>(state => state.search);
  const dispatch = useDispatch();

  const handleSubmitSearch = () => {
    callback(text);
  }

  return (
    <div className="Input">
      <input type="text" placeholder={label} onChange={(e) => dispatch({ type: "SEARCH", payload: e.target.value })} />
      <img src={button} onClick={handleSubmitSearch} />
    </div>
  );
}

export default Input;