import React from "react";
import Button from "../components/core/Button";
import constants from "../components/generic/constants";

function StorePage() {
  const { StorecardData } = constants();
  return (
    <section className="md:py-14 py-6">
      <div className="container">
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] justify-items-center md:gap-12 gap-6">
          {StorecardData.map((card, index) => (
            <div
              key={index}
              className="relative flex flex-col max-w-[382px] rounded-2xl bg-white shadow-dropdown md:p-6 p-4 h-full space-y-4"
            >
              <div className="md:h-[286px] h-[244px] rounded-lg overflow-hidden">
                <img
                  src={card.imageSrc}
                  alt={card.title}
                  className="h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <div className="text-2xl flex justify-between items-center font-bold gap-4">
                  <h3 className="text-green-600">{card.title}</h3>
                  <span className="text-black">{card.price}</span>
                </div>
                <p className="font-medium md:text-base text-sm text-green-400">
                  {card.description}
                </p>
              </div>
              <Button
                label={card.buttonText}
                variant="primary"
                fullWidth
                className="py-4 text-lg mt-auto"
              />
              <div className="bg-orange text-white text-lg font-bold absolute top-12 right-0 rounded-s-lg py-2 px-4">
                Download
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StorePage;
