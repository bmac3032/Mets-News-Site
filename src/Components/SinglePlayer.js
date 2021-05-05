import React from "react";
import playerData from "../data/playerInfo";

export default function SinglePlayer({ stuff }) {
  const playerName = stuff.match.params.playername;
  return (
    <div className="container mt-5 text-center">
      <h1 className="display-4">{playerName.slice(5)}</h1>
    </div>
  );
}
