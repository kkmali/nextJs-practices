import React from "react";
import constants from "./constants";

function InstructionsList() {
  const { InstructionsList } = constants();
  return (
    <>
      {InstructionsList.map((item, index) => (
        <div
          key={index}
          className="p-4 rounded-sm bg-white shadow-dropdown  md:text-base text-sm"
        >
          <h4 className="text-lg font-semibold text-black mb-2.5">
            {item.step}
          </h4>
          <ul className="list-disc ml-4 text-sm">
            {item.instructions.map((instruction, i) => (
              <li key={i}>{instruction}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export default InstructionsList;
