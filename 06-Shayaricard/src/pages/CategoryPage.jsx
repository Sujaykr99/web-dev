import React from "react";
import { useParams } from "react-router-dom";
import { poetry } from "../data/poetry";
import PoetryGrid from "../components/PoetryGrid";

const CategoryPage = () => {
  const { category } = useParams();

  const categoryPoetry = poetry.filter(
    (item) =>
      item.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="category-page">

      <div className="category-heading">
        <p>WORDS OF</p>

        <h1>{category}</h1>

        <div className="category-line"></div>
      </div>

      <PoetryGrid poetry={categoryPoetry} />

    </div>
  );
};

export default CategoryPage;