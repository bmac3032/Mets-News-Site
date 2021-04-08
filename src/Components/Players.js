import React from "react";
import playersInfo from "../data/playerInfo";

// Render a <Player /> component for each player.
// We need to create the player component and style it using BootStrap
// Pass the data down from this component(Players) to the Player component

export default function Players() {
  return (
    <div>
      {playersInfo.map((player) => (
        <h1>{player.name}</h1>
      ))}
    </div>
  );
}
