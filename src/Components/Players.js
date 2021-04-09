import React from "react";
import Player from "./Player";
import playersInfo from "../data/playerInfo";

// Render a <Player /> component for each player.
// We need to create the player component and style it using BootStrap
// Pass the data down from this component(Players) to the Player component

export default function Players() {
  return (
    <div className="container">
      <div className="row">
        {playersInfo.map((player) => (
          <Player {...player} />
        ))}
      </div>
    </div>
  );
}
