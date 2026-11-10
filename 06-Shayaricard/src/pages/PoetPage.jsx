import React from "react";
import { useParams } from "react-router-dom";
import { poets } from "../data/poet";
import { poetry } from "../data/poetry";
import PoetryGrid from "../components/PoetryGrid";

const PoetPage = () => {
  const { id } = useParams();

  const poet = poets.find((p) => p.id === Number(id));

  const poetPoetry = poetry.filter(
    (item) => item.poet === poet.name
  );

  return (
    <div className="poet-page">

      <div className="poet-heading">
        <p>THE VOICE OF</p>

        <h1>{poet.name}</h1>

        <div className="poet-line"></div>
      </div>

      <PoetryGrid poetry={poetPoetry} />

    </div>
  );
};

export default PoetPage;