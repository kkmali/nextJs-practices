import React from "react";
import constants from "./constants";

function IngredientsList() {
  const { Ingredients } = constants();
  return (
    <>
      {Ingredients.map((item, index) => (
        <div
          key={index}
          className="p-4 rounded-sm bg-white shadow-dropdown flex justify-between md:text-base text-sm gap-5"
        >
          <p>{item.name}</p>
          <p>{item.quantity}</p>
        </div>
      ))}
    </>
  );
}

export default IngredientsList;
