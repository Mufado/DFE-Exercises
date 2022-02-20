import React from "react";
import './List.css';

const List = ({ apiData }: any | null) => {
  return (
    <div className="List">
      {apiData.map((item: any, index: number) => (
        <div className="Item" key={index}>
          <hr />
          <h3>〰 {item.title} </h3>
          <p>🧷 {item.author} </p>
          <p>🌎 <a href={item.url} target='_blank' rel="noreferrer"> {item.url} </a> </p>
        </div>
      ))}
    </div>
  );
}

export default List;