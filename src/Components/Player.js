import React from "react";

export default function Player({ name, position, number }) {
  return (
    <div className="col-sm">
      <div className="card mt-3">
        <img
          src={"..."}
          className="card-img-top"
          alt={`Card showing ${name}`}
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{`Position: ${position}`}</p>
          <p className="card-text">{`Number: ${number}`}</p>
        </div>
      </div>
    </div>
  );
}
