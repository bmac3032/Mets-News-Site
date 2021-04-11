import React from "react";
import Player from "./Player";
import playersInfo from "../data/playerInfo";

// Render a <Player /> component for each player.
// We need to create the player component and style it using BootStrap
// Pass the data down from this component(Players) to the Player component

export default function Players() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;

  return (
    <div className="container text-center">
      <h1 className="m-5 display-4">2021 Roster (Active as of {today})</h1>
      <div className="row  justify-content-around">
        {playersInfo.map((player) => (
          // Fix children need a unique key prop
          <Player {...player} />
        ))}
      </div>
    </div>
  );
}
