import React from "react";
import { useParams } from "react-router-dom";
import { poetry } from "../data/poetry";
import CardCustomizer from "../components/CardCustomizer";

const CreateCard = () => {
  const { id } = useParams();

  const poem = poetry.find((item) => item.id === Number(id));

  return (
    <div className="create-card">
      <CardCustomizer poem={poem} />
    </div>
  );
};

export default CreateCard;