import RecipesCard from "@/app/components/generic/RecipesCard";
import RecipeTab from "@/app/components/generic/RecipeTab";
import Link from "next/link";
import React from "react";

function NutritionPage() {
  return (
    <section className="md:p-12 p-4 bg-white shadow-dropdown flex xl:flex-row flex-col w-full justify-between gap-6 rounded-2xl">
      <div className="xl:flex-1/2 md:space-y-6 space-y-4  xl:max-w-[608px]">
        <h3 className="md:text-2xl text-lg text-green-500 font-bold">
          Your Recipe
        </h3>
        <RecipesCard
          DishName="Quinoa Buddha Bowl"
          time="20 mins"
          kcal="5 ingredients"
          className="bg-gray-200"
          DishclassName="text-black"
        >
          <Link
            href="https://www.bu.edu/geneva/files/2010/08/Easy_recipes.pdf"
            target="_blank"
            download
            className="text-lg text-green-600 font-bold"
          >
            Download Pdf
          </Link>
        </RecipesCard>
        <RecipeTab />
      </div>
      <div className="xl:flex-1/2 md:space-y-6 space-y-4 xl:max-w-[608px]">
        <h3 className="md:text-2xl text-lg text-green-500 font-bold">
          Personalized Recipes
        </h3>
        <RecipesCard
          DishName="Lean Chicken Stir-Fry"
          time="20 mins"
          kcal="400 kcal"
        />
        <RecipesCard
          DishName="Lean Chicken Stir-Fry"
          time="20 mins"
          kcal="400 kcal"
        />
        <RecipesCard
          DishName="Lean Chicken Stir-Fry"
          time="20 mins"
          kcal="400 kcal"
        />
      </div>
    </section>
  );
}

export default NutritionPage;
