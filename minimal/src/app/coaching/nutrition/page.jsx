"use client";
import constants from "@/app/components/generic/constants";
import RecipeTab from "@/app/components/generic/RecipeTab";
import Link from "next/link";
import React, { useState } from "react";
import { Fire, Timer } from "@/app/components/generic/icon";

function NutritionPage() {
  const { recipes } = constants();
  const [selectedRecipe, setSelectedRecipe] = useState(recipes[0]);
  return (
    <section className="md:p-12 p-4 bg-white shadow-dropdown flex xl:flex-row flex-col w-full justify-between gap-6 rounded-2xl">
      <div className="xl:flex-1/2 md:space-y-6 space-y-4  xl:max-w-[608px]">
        <h3 className="md:text-2xl text-lg text-green-500 font-bold">
          Your Recipe
        </h3>
        <div
          className={`md:p-6 sm:p-4 p-2 flex gap-2 sm:gap-4 sm:items-center  rounded-2xl "bg-white shadow-dropdown
          `}
        >
          <div className="lg:h-[127px] lg:w-[166px] size-24 overflow-hidden rounded-lg">
            <img
              src={selectedRecipe.image}
              alt=".."
              className="lg:max-h-[127px] w-full max-h-24 object-cover"
            />
          </div>
          <div className="space-y-3">
            <h4
              className={` text-lg lg:text-2xl font-bold text-green-600
              `}
            >
              {selectedRecipe.title}
            </h4>
            <div className="flex   gap-3">
              <div className="flex gap-2 items-center text-dark-gray">
                <Timer className="size-6" /> <span>{selectedRecipe.time}</span>
              </div>
              <div className="flex gap-2 items-center text-dark-gray">
                <Fire className="size-6" />
                <span>{selectedRecipe.ingredients.length} ingredients</span>
              </div>
            </div>
            <Link
              href={selectedRecipe.pdfLink}
              target="_blank"
              download
              className="text-lg text-green-600 font-bold"
            >
              Download Pdf
            </Link>
          </div>
        </div>

        <RecipeTab
          TabTitle={selectedRecipe.TabTitle}
          ingredients={selectedRecipe.ingredients}
          instructions={selectedRecipe.Instructions}
        />
      </div>
      <div className="xl:flex-1/2 md:space-y-6 space-y-4 xl:max-w-[608px]">
        <h3 className="md:text-2xl text-lg text-green-500 font-bold">
          Personalized Recipes
        </h3>
        {recipes.map((recipe) => {
          return (
            <div
              key={recipe.id}
              onClick={() => setSelectedRecipe(recipe)}
              className={`md:p-6 sm:p-4 p-2 flex gap-2 sm:gap-4 sm:items-center  rounded-2xl "bg-white shadow-dropdown
          `}
            >
              <div className="lg:h-[127px] lg:w-[166px] size-24 overflow-hidden rounded-lg">
                <img
                  src={recipe.image}
                  alt=".."
                  className="lg:max-h-[127px] w-full max-h-24 object-cover"
                />
              </div>
              <div className="space-y-3">
                <h4
                  className={` text-lg lg:text-2xl font-bold text-green-600
              `}
                >
                  {recipe.title}
                </h4>
                <div className="flex   gap-3">
                  <div className="flex gap-2 items-center text-dark-gray">
                    <Timer className="size-6" /> <span>{recipe.time}</span>
                  </div>
                  <div className="flex gap-2 items-center text-dark-gray">
                    <Fire className="size-6" /> <span>{recipe.kcal}</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  {recipe.Benefits.map((item) => (
                    <div
                      key={item.title}
                      className="py-2 px-3 text-dark-gray text-sm bg-green-200 rounded-lg w-fit"
                    >
                      {item.title}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default NutritionPage;
