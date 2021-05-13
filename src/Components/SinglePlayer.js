import React from "react";
import { Link } from "react-router-dom";

export default function SinglePlayer({ player }) {
  console.log(player);
  return (
    <div className="container mt-5 text-center">
      <div className="player-card card p-3">
        <img src={player.img} alt={player.name} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{player.name}</h5>
          <p className="text-info d-inline">{player.position}, </p>
          <p className="text-info d-inline">#{player.number}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li className="list-group-item">Height - {player.HT}</li>
          <li className="list-group-item">Weight - {player.WT}</li>
          <li className="list-group-item">DOB - {player.DOB}</li>
        </ul>
        <div className="card-body">
          <Link className="btn btn-info" to="/players">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
}
