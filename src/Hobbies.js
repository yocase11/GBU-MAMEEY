import React from "react";
import { useParams } from "react-router-dom";

const Hobbies = () => {
  const { mood } = useParams();

  return (
    <div>
      <h2>Here are your hobbies for: {mood}</h2>
      {/* Add logic to fetch or show hobbies */}
    </div>
  );
};

export default Hobbies;
