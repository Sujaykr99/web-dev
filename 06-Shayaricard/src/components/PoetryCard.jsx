import React from "react";
import { Link } from "react-router-dom";

const PoetryCard = ({ poetry }) => {
  return (
    <Link
      to={`/poetry/${poetry.id}`}
      className="poetry-card"
    >
      <div className="poetry-card-top">
        <span>{poetry.category}</span>
      </div>

      <h3>{poetry.title}</h3>

      <p className="poetry-preview">
        {poetry.text}
      </p>

      <div className="poetry-card-bottom">
        <span>— {poetry.poet}</span>

        <span className="read-more">
          Read →
        </span>
      </div>
    </Link>
  );
};

export default PoetryCard;