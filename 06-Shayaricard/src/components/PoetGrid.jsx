import React from "react";
import { poets } from "../data/poet";
import PoetCard from "./PoetCard";

const PoetGrid = () => {
  return (
    <div className="poet-grid">
      {poets.map((poet) => (
        <PoetCard key={poet.id} poet={poet} />
      ))}
    </div>
  );
};

export default PoetGrid;
