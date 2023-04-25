import React from "react";
import "../styling/Home.css";
import Hours from "./hours"
import data from "../files/hours.json"

const Home = () => {

  function storeHours() {
    return data.map((day) => 
      <Hours 
      day = {day.day}
      open = {day.openingHour}
      close = {day.closingHour}
      />
    )
   
  }

  return (
    <div className="home">
      <h1>sweet fantasy</h1>
      <p>
        deserts are the fairy tales of the kitchen a hapily ever after to supper
      </p>

      {storeHours()}
    </div>
  );
};

export default Home;
