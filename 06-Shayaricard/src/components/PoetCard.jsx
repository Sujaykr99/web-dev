import React from "react";
import { Link } from "react-router-dom";

const PoetCard = ({ poet }) => {
  return (
    <Link to={`/poet/${poet.id}`} className="poet-card">

      <img
        src={poet.image}
        alt={poet.name}
      />

      <div className="poet-info">

        <h3>{poet.name}</h3>

        <p className="poet-life">
          {poet.birth} — {poet.death}
        </p>

        <div className="poet-small-line"></div>

        <p className="poet-quote">
          "{poet.quote}"
        </p>

        <span className="view-poems">
          View Poems →
        </span>

      </div>

    </Link>
  );
};

export default PoetCard;