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
            <li className="border rounded p-2 text-start" key={meal.idMeal}>
              <p className="font-medium">{meal.strMeal}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
