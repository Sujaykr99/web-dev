import React from "react";
import PoetryCard from "./PoetryCard";

const PoetryGrid = ({ poetry }) => {
  return (
    <div className="poetry-grid">
      {poetry.map((poem) => (
        <PoetryCard
          key={poem.id}
          poetry={poem}
        />
      ))}
    </div>
  );
};

export default PoetryGrid;