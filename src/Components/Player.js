import React from "react";

export default function Player({ name, position, number, img, key }) {
  return (
    <div className="col-3">
      <div className="card mt-3 mb-3">
        <img src={img} className="card-img-top" alt={`Card showing ${name}`} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{`Position: ${position}`}</p>
          <p className="card-text">{`Number: ${number}`}</p>
        </div>
      </div>
    </div>
  );
}
