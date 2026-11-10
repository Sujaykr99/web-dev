import React from "react";
import { Link, useParams } from "react-router-dom";
import { poetry } from "../data/poetry";

const PoetryDetail = () => {
  const { id } = useParams();

  const poem = poetry.find(
    (item) => item.id === Number(id)
  );

  return (
    <div className="poetry-detail">

      <div className="detail-category">
        {poem.category}
      </div>

      <h1>{poem.title}</h1>

      <div className="detail-line"></div>

      <p className="detail-text">
        {poem.text}
      </p>

      <p className="detail-poet">
        — {poem.poet}
      </p>

      <Link
        to={`/create/${poem.id}`}
        className="generate-card-btn"
      >
        Generate Card
      </Link>

    </div>
  );
};

export default PoetryDetail;