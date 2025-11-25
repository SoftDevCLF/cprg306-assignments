"use client";
import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  if (!ingredient) {
    return [];
  }
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data.meals || [];
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  async function loadMealIdeas() {
    const mealsData = await fetchMealIdeas(ingredient);
    setMeals(mealsData);
  }
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      {meals.length === 0 || meals === undefined || meals === null ? (
        <p className="text-gray-500 text-start">No meals found.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {meals.map((meal) => (
            <li
              className="border border-gray-300  rounded p-2 shadow-md dark:bg-gray-800 dark:border-gray-800"
              key={meal.idMeal}
            >
              <div className="flex flex-col items-center gap-2">
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-full h-40 object-cover rounded"
                />
                <p className="font-medium text-center">{meal.strMeal}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
